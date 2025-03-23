<template>
  <div class="absolute">
    <select v-model="deviceInput">
      <template v-for="device of devices" :key="device.deviceId"
        ><option v-if="device.kind === 'videoinput'" :value="device.deviceId">
          {{ device.label }}
        </option></template
      ></select
    ><button class="rounded border text-white" v-if="!running" @click="start">
      START</button
    ><button
      class="rounded border text-white"
      v-if="running"
      @click="running = false"
    >
      STOP</button
    ><video v-show="false" ref="videoElement"></video>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from "vue";

  const devices = ref<MediaDeviceInfo[]>();
  const deviceInput = ref();
  const videoElement = ref<HTMLVideoElement>();
  const worker = new Worker(
    new URL("~/workers/poseWorker.worker.ts", import.meta.url)
  );
  let stream: MediaStream | null = null;
  onMounted(async () => {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    devices.value = await navigator.mediaDevices.enumerateDevices();
  });
  const running = ref(false);
  async function start() {
    running.value = true;
    stream?.getTracks()?.forEach((v) => v.stop());
    if (!videoElement.value) {
      return;
    }
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { deviceId: deviceInput.value },
      });
    } catch (e) {
      console.log(e);
    }
    videoElement.value.srcObject = stream;
    await new Promise<void>((resolve) => {
      videoElement.value!.addEventListener("loadeddata", () => resolve());
    });
    videoElement.value.play();
    let initializedWorker = false;
    worker.onmessage = (e) => {
      switch (e.data.type) {
        case "init":
          initializedWorker = true;
          break;
        case "pose":
          // renderPose(e.data.result);
          console.log(e.data.result);
          processingPose = false;
          break;
        case "hand":
          // renderHand(e.data.result, e.data.index);
          break;
      }
    };
    let processingPose = false;
    const render = async () => {
      if (initializedWorker && !processingPose) {
        const image = await createImageBitmap(videoElement.value!);
        worker.postMessage(image, [image]);
        processingPose = true;
      }
      if (running.value) {
        requestAnimationFrame(render);
      }
    };
    render();
  }
  onUnmounted(() => {
    running.value = false;
    stream?.getTracks()?.forEach((v) => v.stop());
  });
</script>

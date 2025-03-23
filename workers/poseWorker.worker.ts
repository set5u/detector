import * as tf from "@tensorflow/tfjs-core";
// Register WebGL backend.
import "@tensorflow/tfjs-backend-webgl";
tf.env().global.atob = atob.bind(this);
import {
  SupportedModels,
  createDetector,
} from "@tensorflow-models/pose-detection";
(async () => {
  await tf.setBackend("webgl");
  const model = SupportedModels.BlazePose;
  const detectorConfig = {
    runtime: "tfjs",
    enableSmoothing: true,
    // enableSegmentation: true,
    modelType: "full",
  };
  const detector = await createDetector(model, detectorConfig);
  const handWorkers: Worker[] = [];
  const handWorkersProcessing: boolean[] = [];
  const oCanvas = new OffscreenCanvas(224, 224);
  addEventListener("message", async (e) => {
    const image = e.data as ImageBitmap;
    const result = await detector.estimatePoses(image, {}, performance.now());
    let j = 0;
    for (const r of result) {
      const i = j;
      //   const tensor = r.segmentation!.mask;
      //   // @ts-ignore
      //   r.segmentationImage = await r.segmentation!.mask.toImageData();
      //   // @ts-ignore
      //   tensor.mask.dispose();
      //   delete r.segmentation;
      if (!handWorkers[i * 2]) {
        const right = (handWorkers[i * 2] = new Worker(
          new URL("~/workers/handWorker.worker.ts", import.meta.url)
        ));
        const left = (handWorkers[i * 2 + 1] = new Worker(
          new URL("~/workers/handWorker.worker.ts", import.meta.url)
        ));
        handWorkersProcessing[i * 2] = false;
        handWorkersProcessing[i * 2 + 1] = false;
        const p0 = new Promise<void>((resolve) => {
          right.addEventListener("message", (e) => {
            switch (e.data.type) {
              case "hand":
                postMessage({
                  type: "hand",
                  index: i * 2,
                  result: e.data.result,
                });
                handWorkersProcessing[i * 2] = false;
                break;
              case "init":
                resolve();
            }
          });
        });
        const p1 = new Promise<void>((resolve) => {
          left.addEventListener("message", (e) => {
            switch (e.data.type) {
              case "hand":
                postMessage({
                  type: "hand",
                  index: i * 2 + 1,
                  result: e.data.result,
                });
                handWorkersProcessing[i * 2 + 1] = false;
                break;
              case "init":
                resolve();
            }
          });
        });
        await p0;
        await p1;
      }
      const right = handWorkers[i * 2];
      const left = handWorkers[i * 2 + 1];
      if (!handWorkersProcessing[i * 2]) {
        const rightHandPoint0 = r.keypoints[16]!;
        const rightHandPoint1 = r.keypoints[18]!;
        const rightHandPoint2 = r.keypoints[20]!;
        const rightHandPoint3 = r.keypoints[22]!;
        const rightHandCenterX =
          (rightHandPoint0.x +
            rightHandPoint1.x +
            rightHandPoint2.x +
            rightHandPoint3.x) /
          4;
        const rightHandCenterY =
          (rightHandPoint0.y +
            rightHandPoint1.y +
            rightHandPoint2.y +
            rightHandPoint3.y) /
          4;
        const rightHandWidth = Math.max(
          Math.abs(rightHandPoint1.x - rightHandPoint0.x),
          Math.abs(rightHandPoint2.x - rightHandPoint0.x),
          Math.abs(rightHandPoint3.x - rightHandPoint0.x)
        );
        const rightHandHeight = Math.max(
          Math.abs(rightHandPoint1.y - rightHandPoint0.y),
          Math.abs(rightHandPoint2.y - rightHandPoint0.y),
          Math.abs(rightHandPoint3.y - rightHandPoint0.y)
        );
        const rightHandSize = Math.max(rightHandWidth, rightHandHeight) * 2;
        oCanvas
          .getContext("2d")!
          .drawImage(
            image,
            rightHandCenterX - rightHandSize,
            rightHandCenterY - rightHandSize,
            rightHandSize * 2,
            rightHandSize * 2,
            0,
            0,
            224,
            224
          );
        const handImage = oCanvas.transferToImageBitmap();
        right?.postMessage(handImage, [handImage]);
        handWorkersProcessing[i * 2] = true;
      }
      if (!handWorkersProcessing[i * 2 + 1]) {
        const leftHandPoint0 = r.keypoints[15]!;
        const leftHandPoint1 = r.keypoints[17]!;
        const leftHandPoint2 = r.keypoints[19]!;
        const leftHandPoint3 = r.keypoints[21]!;
        const leftHandCenterX =
          (leftHandPoint0.x +
            leftHandPoint1.x +
            leftHandPoint2.x +
            leftHandPoint3.x) /
          4;
        const leftHandCenterY =
          (leftHandPoint0.y +
            leftHandPoint1.y +
            leftHandPoint2.y +
            leftHandPoint3.y) /
          4;
        const leftHandWidth = Math.max(
          Math.abs(leftHandPoint1.x - leftHandPoint0.x),
          Math.abs(leftHandPoint2.x - leftHandPoint0.x),
          Math.abs(leftHandPoint3.x - leftHandPoint0.x)
        );
        const leftHandHeight = Math.max(
          Math.abs(leftHandPoint1.y - leftHandPoint0.y),
          Math.abs(leftHandPoint2.y - leftHandPoint0.y),
          Math.abs(leftHandPoint3.y - leftHandPoint0.y)
        );
        const leftHandSize = Math.max(leftHandWidth, leftHandHeight) * 2;
        oCanvas
          .getContext("2d")!
          .drawImage(
            image,
            leftHandCenterX - leftHandSize,
            leftHandCenterY - leftHandSize,
            leftHandSize * 2,
            leftHandSize * 2,
            0,
            0,
            224,
            224
          );
        const handImage = oCanvas.transferToImageBitmap();
        left?.postMessage(handImage, [handImage]);
        handWorkersProcessing[i * 2 + 1] = true;
      }
      j++;
    }
    postMessage({ type: "pose", result });
  });
  postMessage({ type: "init" });
})();

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
    modelType: "full",
  };
  const detector = await createDetector(model, detectorConfig);
  addEventListener("message", async (e) => {
    const image = e.data as ImageBitmap;
    const result = await detector.estimatePoses(image, {}, performance.now());
    postMessage({ type: "pose", result });
  });
  postMessage({ type: "init" });
})();

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

  const model = SupportedModels.MoveNet;
  const detectorConfig = {
    runtime: "tfjs",
    enableSmoothing: true,
    enableSegmentation: true,
    modelType: "MultiPose.Lightning",
  };
  const detector = await createDetector(model, detectorConfig);
  addEventListener("message", async (e) => {
    const image = e.data as ImageBitmap;
    const result = await detector.estimatePoses(image, {}, performance.now());
    let j = 0;
    postMessage({ type: "pose", result });
  });
  postMessage({ type: "init" });
})();

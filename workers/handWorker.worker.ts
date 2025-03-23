import {
  SupportedModels,
  createDetector,
} from "@tensorflow-models/hand-pose-detection";
import * as tf from "@tensorflow/tfjs-core";
// Register WebGL backend.
import "@tensorflow/tfjs-backend-webgl";
(async () => {
  await tf.setBackend("webgl");
  const detectorConfig = {
    runtime: "tfjs",
    maxHands: 1,
    modelType: "full",
  } as const;
  const detector = await createDetector(
    SupportedModels.MediaPipeHands,
    detectorConfig
  );

  addEventListener("message", async (e) => {
    const image = e.data as ImageBitmap;
    const result = await detector.estimateHands(image);
    postMessage({ type: "hand", result });
  });
  postMessage({ type: "init" });
})();

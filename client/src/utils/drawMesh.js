
export const drawMesh = (prediction, ctx) => {
  if (!prediction) return;
  const keyPoints = prediction.keypoints;

  if (!keyPoints) return;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  for (let keyPoint of keyPoints) {
    ctx.beginPath();
    ctx.arc(keyPoint.x, keyPoint.y, 1, 0, 3 * Math.PI);
    ctx.fillStyle = "aqua";
    ctx.fill();
  }
};


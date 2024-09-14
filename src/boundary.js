export class Boundary {
  constructor(ctx, pt1, pt2) {
    this.pt1 = pt1;
    this.pt2 = pt2;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = "#f5f6f7";
    this.ctx.moveTo(this.pt1.x, this.pt1.y);
    this.ctx.lineTo(this.pt2.x, this.pt2.y);
    this.ctx.stroke();
    this.ctx.closePath();
  }
}

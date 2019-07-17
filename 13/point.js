function Point(canvas,options) {
  this.canvas = canvas;
  this.context = canvas.getContext("2d");
  options = options || {};
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.radius = options.radius || 1;
  // x轴的速度
  this.vx = options.vx || 0;
  // y轴的速度
  this.vy = options.vy || 0;
  this.color = options.color || '#000000';

  this.draw = function (){
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, Math.PI / 180 * 0, Math.PI / 180 * 360);
    this.context.fillStyle=this.color;
    this.context.fill();
  }

  this.update = function (){
    // 匀速运动
    this.x += this.vx;
    this.y += this.vy;
    // 超出边界反弹
    if (this.x < 0 || this.x > canvas.width) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.vy = -this.vy;
    }
  }
}
const svgns = "http://www.w3.org/2000/svg";

const cx0 = 500;
const cy0 = 500;
const r0 = 400;
const r = "10";

export class Multiplication {
  m: number;
  n: number;

  draw() {
    this.drawSmallCircles();
    this.drawLines();
  }

  drawLine(start: number, end: number) {
    const { x: x1, y: y1 } = this.getPoint(start);
    const { x: x2, y: y2 } = this.getPoint(end);

    const group = document.querySelector("svg g.lines");

    const line = document.createElementNS(svgns, "line");

    line.setAttributeNS(null, "x1", x1 + "");
    line.setAttributeNS(null, "y1", y1 + "");
    line.setAttributeNS(null, "x2", x2 + "");
    line.setAttributeNS(null, "y2", y2 + "");

    group.appendChild(line);
  }

  drawLines() {
    for (let i = 0; i < this.n; i++) {
      this.drawLine(i, i * this.m);
    }
  }

  drawSmallCircles() {
    const group = document.querySelector("svg g.small-circles");

    for (let i = 0; i < this.n; i++) {
      console.log("i: ", i);
      const circle = document.createElementNS(svgns, "circle");
      const { x, y } = this.getPoint(i);

      circle.setAttributeNS(null, "cx", x + "");
      circle.setAttributeNS(null, "cy", y + "");
      circle.setAttributeNS(null, "r", r);
      group.appendChild(circle);
    }
  }

  getPoint(pointId: number) {
    const angle = (pointId * (2 * Math.PI)) / this.n;
    const x = cx0 + r0 * Math.cos(angle);
    const y = cy0 + r0 * Math.sin(angle);

    return { x, y };
  }

  setM(m: number) {
    this.m = m;
  }

  setN(n: number) {
    this.n = n;
  }
}

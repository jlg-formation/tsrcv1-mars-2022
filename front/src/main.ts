import "./style.scss";

const svgns = "http://www.w3.org/2000/svg";

const n = 10;

const cx0 = 500;
const cy0 = 500;
const r0 = 400;

const drawSmallCircles = () => {
  const group = document.querySelector("svg g.small-circle");

  for (let i = 0; i < n; i++) {
    console.log("i: ", i);
    const circle = document.createElementNS(svgns, "circle");
    const angle = (i * (2 * Math.PI)) / n;
    const x = cx0 + r0 * Math.cos(angle);
    const y = cy0 + r0 * Math.sin(angle);
    const r = "10";
    circle.setAttributeNS(null, "cx", x + "");
    circle.setAttributeNS(null, "cy", y + "");
    circle.setAttributeNS(null, "r", r);
    group.appendChild(circle);
  }
};

const main = () => {
  console.log("start");
  drawSmallCircles();
};

main();

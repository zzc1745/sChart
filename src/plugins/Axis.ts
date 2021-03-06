import { createElement, createLine, createText } from "./ElementFactory";

export class Axis {
  private element: any;
  private elementPoint0: any;
  private elementPoint1: any;
  private elementPoint2: any;
  private elementPoint3: any;
  private horizontalData: any[];
  private verticalData: any[];
  private width: any;
  private height: any;

  constructor(
    elementPoint0: any,
    elementPoint1: any,
    elementPoint2: any,
    elementPoint3: any,
    horizontalData: any[],
    verticalData: any[],
  ) {
    this.element = createElement("g", { className: "schart-axis" });
    this.elementPoint0 = elementPoint0;
    this.elementPoint1 = elementPoint1;
    this.elementPoint2 = elementPoint2;
    this.elementPoint3 = elementPoint3;
    this.horizontalData = horizontalData || [];
    this.verticalData = verticalData || [];
    this.width = this.elementPoint2.x - this.elementPoint3.x;
    this.height = this.elementPoint0.y - this.elementPoint3.y;
  }
  public render() {
    this.renderHorizontal();
    this.renderVertical();
    return this.element;
  }
  // 纵轴
  private renderHorizontal() {
    const ticks = createElement("g", { className: "schart-axis-horizontal-ticks" });
    this.horizontalData.map((cur, index) => {
      const tick = createElement("g", { className: "schart-axis-horizontal-tick" });
      const line = createElement("line", {
        className: "schart-axis-horizontal-text",
        styles: {
          "stroke": "#F2F4F5",
          "stroke-dasharray": 4,
          "stroke-width": 1,
        },
        x1: this.elementPoint0.x,
        x2: this.elementPoint1.x,
        y1: this.elementPoint0.y + cur.distance,
        y2: this.elementPoint0.y + cur.distance,
      });
      const text = createElement("text", {
        className: "schart-axis-horizontal-text",
        dy: ".32em",
        innerHTML: cur.text,
        styles: {
          "font-size": "12px",
          "text-anchor": "end",
        },
        x: this.elementPoint0.x - 4,
        y: this.elementPoint0.y + cur.distance,
      });
      tick.appendChild(line);
      tick.appendChild(text);
      ticks.appendChild(tick);
    });
    this.element.appendChild(ticks);
  }
  // 横轴
  private renderVertical() {
    const line = createLine("schart-axis-vertical",
      this.elementPoint3.x, this.elementPoint3.y, this.elementPoint2.x, this.elementPoint2.y, "#333");
    this.element.appendChild(line);
    this.renderVerticalTicks();
  }
  private renderVerticalTicks() {
    const ticks = createElement("g", { className: "schart-axis-vertical-ticks" });
    const ticksNum = this.verticalData.length;
    const tickLength = this.width / (ticksNum);
    this.verticalData.map((cur, index) => {
      const x = tickLength * index + tickLength * 0.5 + this.elementPoint3.x;
      const tick = createElement("g", { className: "schart-axis-vertical-tick" });
      const line = createLine("schart-axis-vertical-line", x, this.elementPoint3.y, x,
        this.elementPoint3.y + 4, "#333");
      const text = createElement("text", {
        className: "schart-axis-vertical-text",
        dy: ".32em",
        innerHTML: cur,
        styles: {
          "font-size": "12px",
          "text-anchor": "middle",
        },
        x,
        y: this.elementPoint3.y + 10,
      });
      tick.appendChild(line);
      tick.appendChild(text);
      ticks.appendChild(tick);
    });
    this.element.appendChild(ticks);
  }
}

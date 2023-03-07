export default class Icon {
  constructor(text, bgColor, textColor, id = null, classes = null) {
    this.text = text;
    this.bgColor = bgColor;
    this.id = id;
    this.classes = classes;
    this.textColor = textColor;
  }
  draw() {
    const div = $("<div></div>")
      .css({
        backgroundColor: this.bgColor,
        color: this.textColor,
        textAlign: "center",
        border: "1px black solid",
        fontFamily: "sans-serif",
        boxShadow: "1px 2px #888888",
        padding: "0.5em",
        fontSize: "2em",
      })
      .addClass("icon")
      .text(this.text);
    return div;
  }
}

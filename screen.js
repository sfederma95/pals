import globalVars from "./globalVars.js";

export default class Screen {
  constructor(backgroundImage) {
    this.height = globalVars.screenHeight;
    this.width = globalVars.screenWidth;
    this.imageUrl = backgroundImage;
  }

  draw() {
    const div = $("<div></div>")
      .css({
        width: this.width + "px",
        height: this.height + "px",
        backgroundImage: "url" + "(" + this.imageUrl + ")",
        backgroundSize: "cover",
        backgroundColor: "black",
      })
      .prop("id", "screen");
    $("#main").append(div);
  }

  destroy() {
    $("#main").remove();
  }
}

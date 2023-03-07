export default class Egg {
  constructor(bgImage, id = null, classes = null) {
    this.bgImage = bgImage;
    this.id = id;
    this.classes = classes;
  }

  draw() {
    const div = $("<div></div>")
      .css({
        backgroundImage: "url" + "(" + this.bgImage + ")",
        width: "50px",
        height: "50px",
        backgroundSize: "cover",
      })
      .addClass("egg")
      .prop("id", this.id);
    return div;
  }
}

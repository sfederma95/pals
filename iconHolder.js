export default class IconHolder {
  constructor(id, height, color, opacity, width, icons, zIndex) {
    this.id = id;
    this.height = height;
    this.width = width;
    this.color = color;
    this.opacity = opacity;
    this.icons = icons;
    this.zIndex = zIndex;
  }

  draw() {
    const div = $("<div></div>")
      .css({
        width: this.width + "px",
        height: this.height + "px",
        backgroundColor: this.color,
        opacity: this.opacity,
        position: "absolute",
        border: "5px black ridge",
        borderRadius: "5px",
        top: "10px",
        left: "25px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        zIndex: this.zIndex,
        flexWrap: "wrap",
      })
      .prop("id", this.id)
      .addClass("icon-holder");
    $("#main").append(div);

    if (this.icons.length) this.appendIcons();
  }

  appendIcons() {
    for (let i = 0; i < this.icons.length; i++) {
      let div = this.icons[i].draw();
      $(`#${this.id}`).append(div);
    }
  }

  destroy() {
    $(".icon-holder").remove();
  }
}

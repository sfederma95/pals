import globalVars from "./globalVars.js";

export default class CharacterSprite {
  constructor() {
    this.height = 100;
    this.width = 100;
    this.position = [400, globalVars.screenWidth / 2 - 50];
    this.idle = [
      "characters/green_slime/idle_1.png",
      "characters/green_slime/idle_2.png",
      "characters/green_slime/idle_3.png",
    ];
    this.left = [
      "characters/green_slime/left_1.png",
      "characters/green_slime/left_2.png",
      "characters/green_slime/left_3.png",
    ];
    this.right = [
      "characters/green_slime/right_1.png",
      "characters/green_slime/right_2.png",
      "characters/green_slime/right_3.png",
    ];
    this.backgroundImage = this.idle[0];
    this.idling = true;
    this.movingLeft = false;
    this.movingRight = false;
  }

  draw() {
    const div = $("<div></div>")
      .css({
        left: this.position[1] + "px",
        top: this.position[0] + "px",
        position: "absolute",
        width: this.width + "px",
        height: this.height + "px",
        backgroundImage: "url" + "(" + this.backgroundImage + ")",
        backgroundSize: "cover",
      })
      .prop("id", "char");
    $("#screen").append(div);
  }

  destroy() {
    $("#char").remove();
  }

  movementAnim(animArray) {
    let i = 1;
    let timer = 0;
    var myInterval = setInterval(() => {
      if (timer >= 24) clearInterval(myInterval);
      if (i > animArray.length - 1) i = 0;
      this.backgroundImage = animArray[i];
      $("#char").css({
        backgroundImage: "url" + "(" + this.backgroundImage + ")",
      });
      i++;
      timer++;
    }, 200);
  }

  moveRight(amount) {
    if (
      this.position[1] <
      globalVars.screenWidth - this.width - globalVars.screenBuffer
    ) {
      this.position[1] += amount;
      $("#char").animate(
        {
          left: "+=" + amount + "px",
        },
        5000
      );
    }
    this.movingRight = false;
    this.idling = true;
  }

  moveLeft(amount) {
    if (this.position[1] > globalVars.screenBuffer) {
      this.position[1] -= amount;
      $("#char").animate(
        {
          left: "-=" + amount + "px",
        },
        5000
      );
    }
    this.movingLeft = false;
    this.idling = true;
  }

  jump(amount) {
    $("#char")
      .animate(
        {
          top: "-=" + amount + "px",
        },
        500
      )
      .animate(
        {
          top: this.position[0] + "px",
        },
        500
      );
  }
}

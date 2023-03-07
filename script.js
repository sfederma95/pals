import globalVars from "./globalVars.js";
import Screen from "./screen.js";
import CharacterSprite from "./characterSprite.js";
import IconHolder from "./iconHolder.js";
import Icon from "./icon.js";
import Egg from "./egg.js";

class Game {
  constructor() {}

  start() {
    // const screen = new Screen("bgs/path_2.png");
    const screen = new Screen("bgs/spawn_point.png");
    screen.draw();
    const character = new CharacterSprite();
    // const iconHolder1 = new IconHolder(
    //   "icon-holder-1",
    //   200,
    //   "tan",
    //   "70%",
    //   600,
    //   [],
    //   1
    // );
    // const iconHolder2 = new IconHolder(
    //   "icon-holder-2",
    //   200,
    //   "transparent",
    //   "100%",
    //   600,
    //   [
    //     new Icon("Food", "green", "black"),
    //     new Icon("Info", "blue", "black"),
    //     new Icon("Play", "red", "black"),
    //   ],
    //   2
    // );
    const eggs = [
      "eggs/Black.png",
      "eggs/Blue.png",
      "eggs/Cyan.png",
      "eggs/Green.png",
      "eggs/Orange.png",
      "eggs/Purple.png",
      "eggs/Red.png",
      "eggs/White.png",
      "eggs/Yellow.png",
    ];
    const eggSprites = [];
    for (let i = 0; i < eggs.length; i++) {
      eggSprites.push(new Egg(eggs[i]));
    }
    const iconHolder1 = new IconHolder(
      "icon-holder-1",
      200,
      "tan",
      "70%",
      600,
      [],
      1
    );
    const iconHolder2 = new IconHolder(
      "icon-holder-2",
      200,
      "transparent",
      "100%",
      600,
      eggSprites,
      2
    );
    iconHolder1.draw();
    iconHolder2.draw();
    // character.draw();
    // this.moveCharacter(character);
  }

  // TODO fix when it hits boundaries
  // TODO fix sprite on jump
  moveCharacter(character) {
    setInterval(() => {
      const choices = [-1, -1 - 1, 0, 1, 1, 1, 2];
      let choice = choices[Math.floor(Math.random() * choices.length) | 0];
      const jumpAmount = [20, 25, 30, 35, 40];
      let amount =
        jumpAmount[Math.floor(Math.random() * jumpAmount.length) | 0];
      switch (choice) {
        case -1:
          character.movementAnim(character.right);
          character.moveRight(amount);
          break;
        case 0:
          character.movementAnim(character.idle);
          break;
        case 1:
          character.movementAnim(character.left);
          character.moveLeft(amount);
          break;
        case 2:
          character.jump(50);
        default:
          console.log("Do nothing");
      }
    }, 5000);
  }
}

const game = new Game();
game.start();

setInterval(() => {
  const eggs = $(".egg");
  let choice = eggs[Math.floor(Math.random() * eggs.length) | 0];
  $(choice).effect("shake", { times: 1, distance: 10 }, 500);
}, 2000);

// TODO fix position egg lands at
$(".egg").click((e) => {
  $("*").unbind("click");
  const character = new CharacterSprite();
  $(e.target).css({ position: "absolute" });
  $(e.target).animate(
    {
      top: character.position[0] + 75 + "px",
      left: character.position[1] + 50 + "px",
    },
    2000,
    () => {
      $(e.target).addClass("exploded");
      $(e.target).hide("explode", { pieces: 4 }, 500);
      setTimeout(() => {
        $(".exploded").remove();
      }, 600);
      setTimeout(() => {
        character.draw();
      }, 800);
    }
  );
});

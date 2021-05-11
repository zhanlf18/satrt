import Food from "./food";
import Snake from "./snake";
import scorePanel from "./scorePanel";
// 将三个零散的类建立关联关系 
class gameControl {
  _food: Food;
  _snake: Snake;
  _scorePanel: scorePanel;
  // 纪录蛇移动的方向
  direction: string = 'ArrowRight';
  // 纪录游戏是否结束
  isLive: Boolean = true;
  constructor() {
    this._food = new Food();
    this._snake = new Snake();
    this._scorePanel = new scorePanel();
    // 创建对象的时候，初始化方法，开始游戏，定义键盘上下左右键可将蛇移动
    this.init();
  }
  init() {
    // 绑定键盘的按键事件
    window.document.addEventListener("keydown", this.keydownHandle.bind(this));
    this.run();
  }
  /*
  *  创建键盘按键响应
  *  keydownHandle 内部的this默认指向window
  */
  keydownHandle(event: KeyboardEvent) {
    // console.log(event.key,"::获取事件");
    // ArrowUp Up ArrowDown Down ArrowLeft  Left ArrowRight Right
    this.direction = event.key;
  }

  // 根据蛇移动的方向修改蛇的偏移量 X Y
  run() {
    let X = this._snake.X;
    let Y = this._snake.Y;

    // if (this.direction === "ArrowRight" && X >= 270 && Y <= 290) {
    //   this.direction = "ArrowDown"
    // } else if (this.direction === "ArrowLeft" && X <= 0 && Y < 290) {
    //   this.direction = "ArrowDown"
    // } if (this.direction === "ArrowRight" && X >= 270 && Y == 290) {
    //   this.direction = "ArrowUp"
    // } else if (this.direction === "ArrowLeft" && X <= 0 && Y === 290) {
    //   this.direction = "ArrowUp"
    // } else if (this.direction === "ArrowUp" && Y <= 0 && X <= 0) {
    //   this.direction = "ArrowRight"
    // } else if (this.direction === "ArrowUp" && Y <= 0 && X < 290) {
    //   this.direction = "ArrowRight"
    // } else if (this.direction === "ArrowDown" && Y >= 290 && X > 0) {
    //   this.direction = "ArrowLeft"
    // } else if (this.direction === "ArrowDown" && Y >= 290 && X <= 0) {
    //   this.direction = "ArrowLeft"
    // }
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }
    this.checkEat(X,Y);
    try {
      this._snake.X = X;
      this._snake.Y = Y;
    } catch (e) {
      alert(e.message)
      this.isLive = false;
    }

    /*
    *  开启定时器  定时器的执行的时间与记分器的级别有关系，级别越高 跑得越快
    *  默认一级别的时候 300Ms跑一格 
    */
    this.isLive && setTimeout(this.run.bind(this), 300 - (this._scorePanel.level - 1) * 30);
  }
  //检查是否吃到食物
  checkEat(X: number, Y: number) {
    if (X === this._food.X && Y === this._food.Y) {
      this._food.change();
      this._snake.addBodies();
      this._scorePanel.addScore();
    }
  }




}

export default gameControl;
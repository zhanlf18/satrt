// 创建计分牌的类
class scorePanel {
  // 属性： 分数，级别数，表示分数和级别数的元素
  // 方法： 增加分数，增加级别数
  score = 0;
  level = 1;
  scoreElement: HTMLElement;
  levelElement: HTMLElement;
  // 级数最高为max 
  max: number;
  // 分数每增加upScore升一级
  up: number; 
  constructor(max:number=20,up:number=2) {
    this.scoreElement = document.getElementById("score")!;
    this.levelElement = document.getElementById("level")!;
    this.max = max;
    this.up = up;
  }

  // 分数增加
  addScore() {
    this.score++;
    this.scoreElement.innerHTML = this.score + '';
    // 分数每增加10分数，级数上升一级
    if((this.score) % (this.up) === 0) {
      this.upLevel();
    }
  }

  // 级别数增加 
  upLevel() {
    // 级数最高为10级
    if(this.level < this.max) {
      this.level++;
      this.levelElement.innerHTML = this.level + '';
    }
  }
}

export default scorePanel;
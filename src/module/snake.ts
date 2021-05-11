class Snake {
  // 蛇的盒子
  element: HTMLElement;
  // 蛇头元素
  headElement: HTMLElement;
  // 蛇身子(包含头)
  bodies: HTMLCollection;
  constructor() {
    this.element = document.getElementById("snake")!;
    this.headElement = document.querySelector("#snake > .s-list")!;
    this.bodies = this.element.getElementsByClassName("s-list");
  }

  // 蛇头的左边位置
  get X() {
    return this.headElement.offsetLeft;
  }

  get Y() {
    return this.headElement.offsetTop;
  }

  // 设置蛇头的坐标
  set X(value: number) {
    if(this.X === value) {
      return
    }
    if(value < 0 || value > 270) {
      throw new Error("蛇撞墙了!")
    }
    // 不能掉头 只有蛇头的话 可以掉头
    // 不能穿过自己的身体
    if(this.bodies[1]) {
      const nextX = (this.bodies[1] as HTMLElement).offsetLeft;
      /* 
      * 设置的值与蛇头后面的值一样表示掉头了
      * 传入的值大于原始值 表示向右
      *  继续向右
      */ 
      if(nextX === value) {
          value = this.X > value ? (this.X + 10) : ( this.X - 10)
      }
    }
    
    this.moveBodies();
    this.headElement.style.left = value + "px";
    // 更新蛇头坐标之后检查蛇是否撞到自己了
    this.checkHead();
  }

  set Y(value: number) {
    if(this.Y === value) {
      return
    }
    if(value < 0 || value > 290) {
      throw new Error("蛇撞墙了!")
    }
    if(this.bodies[1]) {
      const nextY = (this.bodies[1] as HTMLElement).offsetTop;
      /* 
      * 设置的值与蛇头后面的值一样表示掉头了
      * 传入的值大于原始值 表示向右
      *  继续向右
      */ 
      if(nextY === value) {
          value = this.Y > value ? (this.Y + 10) : ( this.Y - 10)
      }
    }
    this.moveBodies();
    this.headElement.style.top = value + "px";
     // 更新蛇头坐标之后检查蛇是否撞到自己了
    this.checkHead();
  }

  // 蛇增加身体的方法
  addBodies() {
    // el.insertAdjacentHTML(position,element) 
    // 一个给定的element元素节点插入到相对于被调用的el元素的给定的一个位置。
    this.element.insertAdjacentHTML("beforeend","<div class='s-list'></div>")
  }

  // 蛇身体移动
  moveBodies() {
    /* 蛇的长度增加  addBodies
    *  蛇的位置改变  后一节去前一节的位子  所以坐标设置需要由后向前设置
    *  不能穿过自己的身体 判断蛇头的坐标是不是与蛇身里面的坐标一样  一样的话表示穿过自己是身体了 穿过自己的身体表示游戏结束
    *  不能掉头 掉头就不管了 判断蛇头的坐标是不是与第二节一样  一样的话表示穿过自己是身体了 穿过自己的身体保持原始位置继续向前 继续向之前的方向走 设置的坐标还是跟掉头之前的一样
    */ 
    for (let i = this.bodies.length - 1; i > 0;i--){
      let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';    
    }
  }

  checkHead() {
    for (let index = 1; index < this.bodies.length; index++) {
      if(this.X === (this.bodies[index] as HTMLElement).offsetLeft && this.Y === (this.bodies[index] as HTMLElement).offsetTop) {
        console.log("蛇穿过自己身体了");
        throw new Error("蛇撞穿过自己身体了，游戏结束！")
      }
    }
  }

}

export default Snake;
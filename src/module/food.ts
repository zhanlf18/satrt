// 创建食物
class Food {
  // 食物属性： 定义一个属性， 表示食物对应的元素 dom 
  element: HTMLElement;

  // 食物的方法： 修改元素的位置
  constructor() {
    //  ! 表示该元素一定存在， 如果不加会提示报错
    this.element = document.getElementById('food')!;
  }
  // 元素的位子 get 方法获取
  // 垂直方向的距离
  get Y() {
    return this.element.offsetTop;
  }
  get X() {
    return this.element.offsetLeft;
  }
  // 修改食物元素的位置
  change() {
    // 食物位置的范围 最小是0 最大是304像素宽-4像素边框=290像素 并且只能十个像素十个像素的位置动  Math.random() * 29 取（0，29] 的随机数， 取整Math.round(Math.random() * 29) 0-29的随机数整数
    const x = Math.round(Math.random() * 27) * 10;
    const y = Math.round(Math.random() * 29) * 10;
    this.element.style.left = x + "px";
    this.element.style.top = y + "px";
  }
}

export default Food;
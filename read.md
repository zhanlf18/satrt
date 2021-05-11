###  ts里面任何代码都需要有类

### 查缺补漏
- 按下键盘事件 `keydown` 里面的 `e.key` 上下左右 谷歌浏览器的值是 `ArrowUp` `ArrowDown` `ArrowLeft` `ArrowRight` , ie是 `Up` `Down` `Left` `Right`

- `ts` 里面涉及到 `html` 元素类型 有 `HTMLElement` 表示单个元素类，`HTMLCollection` 表示元素集合类 ， 可以直接使用

- 在指定的地方插入给定的 `html` 标签语句 `insertAdjacentHTML`，语法  `dom.insertAdjacentHTML(where,html)` , `where` 取值: 
'beforebegin'：dom本身之前。

'afterbegin'：就在dom第一个孩子之前。

'beforeend'：在的dom最后一个孩子之前。

'afterend'：dom本身之后。


   --  在id为 `UL` 的元素里面的最后一个子元素 `后面` 插入 `<li>child</li>`
    ```
      document.getElementById("UL").insertAdjacentHTML("beforeend","<li>child</li>")
    ```
   
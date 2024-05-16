# 过渡`transition`

## `d3.transition(): Transition`

该方法会创建一个`transition`对象，可以作为`selection.transition()`方法的参数传入。

## `selection.transition(name: Transition): Selection`

该方法会根据过渡的效果为`selection`实例添加过渡，其中参数为一个`transition`实例

```js
const t = d3
  .transition()
  .duration(750) // 为过渡设置持续事件
  .ease(d3.easeLinear); //设置过渡的效果

d3.selectAll(".apple").transition(t).style("fill", "red");
```

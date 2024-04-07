# 选择`selection`

选择实现了强大的`DOM`元素的数据驱动变形，如

- 设置`attributes`
- 设置样式`style`
- 设置`properties`
- 设置`HTML`
- 设置文本内容

## 选择元素

### `selection`

选择根元素
```js
const root = d3.selection()
```

### `select(selector)`

使用选择器选择匹配的第一个元素
```js
const svg = d3.select("#chart")
```

如果没有对应的元素，返回一个空的`selection`，如果有多个匹配的元素，只有文档顺序的第一个会被选中。如，选择第一个锚元素
```js
const anchor = d3.select('a')
```

除了选择器字符串，同样可以使用确定的`DOM`对象来选择元素
```js
d3.select(document.body).style("background", "red")
```

或者，为段落元素添加事件，如点击事件
```js
d3.selectAll('p').on('click', (event) => {
    d3.select(event.currentTarget).style("color", "red")
})
```

### `selectAll(selector)`
选择所有匹配的元素

```js
const p = d3.selectAll("p")
```
元素会按照在文档中自上而下的顺序被选择。如果没有匹配的元素，或者传入的选择器为空，则返回空的`selection`

同`select(selector)`，可以传入`DOM`对象的引用的伪数组。

```js
d3.selectAll(ducument.links).style("color", "red")
```

### `selection.select(selector)`

选择`selection`中第一个匹配的元素
```js
const b = d3.selectAll("p").select("b")
```



## 修饰元素



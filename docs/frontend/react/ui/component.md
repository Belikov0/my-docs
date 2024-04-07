# 组件

## 定义组件
采用函数式定义组件
- 定义函数
- 添加标签
- 导出组件

```js
function Profile() {
    return (
        <h1 id='title'>你好</h1>
    );
}

export default function Gallery() {
    return (
        <section>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}
```

::: tip 
注意，组件可以渲染其它组件，但是**不要嵌套他们的定义**。应该在文件的顶层进行所有组件的定义。
:::

## 使用组件

```js
import Gallery from './Gallery.js'

export default function App() {
    return (
        <Gallery />
    );
}
```

## Props
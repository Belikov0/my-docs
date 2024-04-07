# 开始`React`学习

## 手动引入和脚手架

### 引入`react`

直接通过`script`标签引入

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
```

### 使用脚手架

常用的脚手架

- `create-react-app`
- `umi`

## 组件和`jsx`

### 创建根组件

使用`ReactDom.createRoot` API 创建根组件，并且调用其`render`方法进行渲染内容

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>你好</h1>);
```

由于原生`js`无法直接识别`html`标签，因此需要`babel`来将`React`代码自动转换为`js`代码

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

### `React17`的语法

```js
const rootElement = document.getElementById("root");
const element = React.createElement("div", {
  chilren: "Hello World",
  className: 'container',
  id: 'demo'
});

ReactDom.reader(element, rootElement)
```
`ReactDom.render(elem, root)`方法将第一个参数元素渲染到第二个参数元素上 

### `React18`的语法

```js
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
const element = React.createElement('div', {
  chilren: "Hello World",
  className: 'container',
  id: 'demo'
});
 root.reader(element)
```

### 类组件与`jsx`语法

`jsx`需要我们将`html`元素使用圆括号`()`括起来，并且只有一个根元素。
类组需要继承`React.Component`

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>你好</h1>
        <input />
      </div>
    );
  }
}
root.render(<App />);
```

## 插值和状态

使用`{}`可以在`html`元素中插入`js`表达式。
使用`this.state`可以记录当前组件的状态，它是一个对象，以键值对的方式存储状态。

```js
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [1, 2, 3],
    };
  }
  render() {
    return (
      <div>
        <h1>你好</h1>
        <input />
        <ul>
          {this.state.arr.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

## 挂载和状态设置

类组件方法 API`componentDidMount`可以在组件挂载之后执行一些操作。
为了实现先显式组件轮廓再加载数据的需求，通常在`componentDidMount`中
加载数据。

::: tip
`React`代码不期望我们频繁去操作`DOM`，使用`=`对`state`中的内容进行赋值，原始状态对象在内存中的位置
没有改变，因此不会生效。为此`React`提供了`setState`方法用以设置状态，其参数为一个对象。
:::

```js
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [
        { id: 1, name: "1" },
        { id: 2, name: "2" },
        { id: 3, name: "3" },
      ],
      name: "good",
    };
  }

  componentDidMount() {
    fetch("some url")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          arr: json.results,
        });
        console.log(this.state); // [!code highlight]
      });
  }

  render() {
    return (
      <div>
        <h1>你好</h1>
        <input />
        <ul>
          {this.state.arr.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
```

::: tip `this.setState`
`this.setState`方法是异步的，`react`不会立即去同步地更新`DOM`，而是会将要执行的内容推入任务队列
，等待所有更新一起执行。因此，在代码块中高亮的一行会打印`[1, 2, 3]`
:::

```js
//参数中的两个方法异步先后执行
this.setState(
  function update() {},
  function afterUpdated() {}
);
```

::: tip 浅合并
`this.setState`方法会执行数据的**浅合并**
:::

## 生命周期

使用唯一的`key`进行遍历能够提高`React`在更新`DOM`时的性能。
但在上述例子中，如果使用`item.id`为`<li>`设置`key`则会失效，使用`index`则没有问题。
这和`React`组件声明周期有关。

- 构造函数执行
- 首次渲染，调用`render`
- 执行生命收起钩子`componentDidMount`
- 数据更新，再次渲染，调用`render`

如果数据是在`componentDidMount`周期中获得的，那么应该将初始的数组`arr`置为空数组，避免
第一次渲染时报错。

```js
render() {
    return (
      <div>
        <h1>你好</h1>
        <input />
        <ul>
          {this.state.arr.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
```

## 组件拆分

### App 组件

```js
// App.jsx
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      name: "good",
    };
  }

  componentDidMount() {
    fetch("some url")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          arr: json.results,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>你好</h1>
        <input />
        <Lists arr={this.arr} />
      </div>
    );
  }
}

// List部分
class Lists extends React.Component {
    render(){
        return (
            {
                <ul>
                    {this.state.arr.map((item) => (
                        <li key='item.id'>{item.name}</li>
                    ))}
                </ul>
            }
        )
    }
}
```

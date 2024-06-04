# 代码编写规范 v1.0

## `JavaScript`

- 方法采用小驼峰命名，一般使用`动词`+`名词`进行命名
- 组件属性采用小驼峰命名，与`html`自动转换兼容
- 变量采用小驼峰命名，一般使用名词性短语进行命名
- 布尔值变量使用形容词
  如是否处于活动状态：`active`
- 返回布尔值的方法使用`is`+形容词命名
  如调用对象中是否处于活动状态的方法：`isActive()`
- 特定对象变量可以添加后置标注，
  如元素类列表的计算属性：`classListComputed`
  页面中的某一个响应式数据：`dataRef`
- 静态变量（常量），常量采用下划线大写命名，如：`MAX_INT`
- 事件处理方法的命名规范：`handle` + `<event-name>` + `<eventAction>`
  如点击关闭事件：`handleClickClose`
  如按键高亮事件：`handleKeydownHighlight`

## `html`

- 单文件组件使用一个根元素，类名以单文件组件的名称命名
- 除去`App.vue`文件外，根元素不直接包裹内部的其他组件
- 以`wrapper`命名的元素为包裹容器，不作为叶子元素/组件
- 同一个`wrapper`下可以有叶子元素和`wrapper`并存
- `wrapper`可以包裹单一子组件，也可以包裹多个普通`html`元素
- `v-if`和`v-else`互斥的情况可以将两个组件/元素视为一个组件/元素
- 需要复用的`wrapper`抽象为组件，以`container`命名。为`container`定义灵活的属性

## `css`

### 编写位置

- 插槽中的特定样式使用`scoped`
- 组件中确定的样式通过`css`引入

### 类名命名规范

- 类名采用`bem`规范进行命名
- 可以使用`v-for`重复渲染的组件或元素其类名以`item`结尾

### `sass`变量

- 命名规则按照`属性名称__逻辑名称（使用场景、组件等）--修饰样式`命名
- 在项目需求中，变量只确定固定的组件样式时，跟随组件名称（固定样式变量）
  例如侧边栏中项目元素的高度：`$height__aside-item`
- 在项目需求中，变量不固定在固定组件中，跟随使用方式
  例如需要添加标题的字体族：`font-familty__title`
- 在项目需求中，有一系列的样式区别
  例如字体大小系列：`font-size--tiny`,`font-size--small`

### bem 规范

## `vue`

### 单文件组件线性划分

可以大致按照组件的复杂程度来对组件进行划分

- 功能职责单一、远离具体的业务需求（设计属性等时更关注具体的使用需求）。具有较高的一般性和可复用性。
- 功能职责复杂、通常为了完成某一种具体的业务需求，需要有复杂的组件变量来调节子组件的通信。
  职责随功能复杂和与业务目的接近而失去一般性，通常只能在较少的地方复用甚至不能复用。

在实际的代码过程中，可能会遇到复数层组件嵌套的情况，个人认为按照线性回归对上述规律进行划分较为合理。

### 单文件组件命名规范

- 组件名称以大驼峰进行命名
- 路由页面采用`View`结尾命名
- 组件名不采用动名词短语命名，按照名词性短语命名；将路由功能对应的动名词短语转变为名次短语
  如添加用户的路由：`UserCreatingView.vue`
  修改用户数据路由：`UserInfoUpdatingView.vue`

- 按照功能设置常用的动名词
  - `crud`复合操作：`Managing`
  - 增加：`Creating`
  - 删除：`Deleting`
  - 修改：`Updating`
  - 查询：`Reading`
  - 数据展示：`Exhibiting`

### 单文件组件`script`代码顺序

```js
// import methods
import { ref, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useNamespace } from "@/utils/index";
import { useCountStore } from "@/stores/count";

// import common components
import Header from "@/components/Header.vue";

// use common methods
// methods which can be directly invoked at the top-level of the script
const ns = useNamespace("some-name");
const countStore = useCountStore();

// local variables area (includes variable and corresponding methods, computed values)
const variable = ref(1);
const computedVariable = computed(() => {
  return variable.value * 2;
});
const plusValue = () => {
  variable.value += 1;
};

const str = ref("hello ");
const computedStr = computed(() => {
  return str.value + "world";
});
const concatStr = () => {
  str.value += "world";
};

// life circles
onBeforeMount(() => {
  // to-do
});

onMounted(() => {
  // to-do
});
```

## 组件拆分

### 组件拆分的基本原则

组件拆分的优点

- 页面结构清晰
- 逻辑功能独立，耦合性低

可以主要将组件分为两种类型

- **专用组件**
  - **宏观需求**逻辑上与其他部分独立，是整体项目需求要求的体现
  - 通常没有复用的需求
  - 其内容通常是由更小的专用组件或者通用组件组成
  - 主要优点是不同功能之间代码的解耦合
  - 通常是某一个路由中更小的部分

::: info 案例

- 一个需要提交的表单，表单中有大量不同的表单项，这个表单在宏观需求上一个逻辑独立的功能区，但其样式通常不会被复用或者较少被复用。
- 一个由不同类型数据组成的一个数据展示区域，其完成了数据展示的功能，整体样式上通常也不会复用
  :::

- **通用组件**
  - 是**微观需求**的具体体现
  - 通常，这种组件能够在不同项目中有相同呈现需求时复用，也可以在同一个项目中多次复用

组件拆分的基本原则

- 单一职责：尽量只关注一个功能，如果有多个功能，通常应该拆分为更小的组件。
  不重
- 可重用性：
- 接口清晰：明确组件应该有的功能和样式
- 逻辑抽象：将复杂逻辑抽象到`js`文件中
- 避免过度拆分：过细的粒度导致项目代码碎片化，增加维护难度

### 插槽的使用原则

- 在特定的场景需要额外呈现某些特定的界面（具名插槽）
- 插槽要呈现的样式需要组件使用者进行规定，即插槽呈现的样式不唯一确定（作用域插槽）
- 在不同的时候将内容插入不同的插槽位置进行展示（动态插槽名）

### 组件封装

- 使用`nativeType`字段标注原生的属性
- 可以使用`v-bind`和`useAttrs`将没有设置的属性绑定到要封装的组件上

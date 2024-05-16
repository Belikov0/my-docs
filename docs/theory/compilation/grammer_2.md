# 上下文无关文法

::: info 上下文无关文法
若一个形式文法$G=(N,\Sigma,P,S)$ 的产生式都有$V \rightarrow w$，其中$V\in N, w\in(N\cup \Sigma)^*$
:::

## 表示

```
G=({E}, {+, *, I, (, )}, P, E)
P:
  E -> i
  E -> E+E
  E -> E*E
  E -> (E)
```

## 规范推导、最左推导、最右推导

::: info 最左推导

在推导的任何一步$\alpha \rightarrow \beta$，对$\alpha$中最左的**非终结符**进行替换的推导。

:::

::: info 最右推导

在推导的任何一步$\alpha \rightarrow \beta$，对$\alpha$中最右的**非终结符**进行替换的推导。
**最右推导**又被称为**规范推导**。
由规范推导所得到的[句型](./grammer.md#句型和句子){target="\_blank"}称为**规范句型**

:::

例如

```
G[E]:
    E -> i
    E -> E+E
    E -> E*E
    E -> (E)
```

句型$i*i+i$的两个最左推导

$$
    E \Rightarrow E+E \Rightarrow E*E+E \Rightarrow i*E+E \Rightarrow i*i+E \Rightarrow i*i+i
$$

$$
    E \Rightarrow E*E \Rightarrow i*E \Rightarrow i*E+E \Rightarrow i*i+E \Rightarrow i*i+i
$$

两个最右推导

$$
    E \Rightarrow E+E \Rightarrow E+i \Rightarrow E*E+i \Rightarrow E*i+i \Rightarrow i*i+i
$$

$$
    E \Rightarrow E*E \Rightarrow E*E+E \Rightarrow E*E+i \Rightarrow E*i+i \Rightarrow i*i+i
$$

## 二义性

## 语法树

::: info 语法树

:::

::: info 子树的概念
由语法树的非末端结点连同其所有分支组成的部分
:::

::: info 直接子树
树高为 2 的子树
:::

## 短语

::: info 短语
子树的末端结点形成的符号串
:::

::: info 直接短语
每颗直接子树的叶子结点形成的短语（$A \Rightarrow \beta$且$\beta$下没有分支）
:::

::: info 素短语
至少包含一个[**终结符**](./grammer.md#文法和形式语言的定义)且**不包含**更小素短语的短语
:::

::: info 句柄
一个句型的**最左直接短语**
:::

例如，对于给定的句型和文法
```
T*P↑(T*F)

G[T]:
    T -> T*F|F
    F -> F↑P|P
    P -> (T)|i
```
其短语，直接短语和句柄为

短语：$$
# 文法和语言

## 文法的概念

::: info 文法
文法是以**有穷的集合**刻画**无穷的集合**的一个工具
:::

## 符号和符号串

### 基本概念

::: info 字母表
字母表是元素的**非空集合**，字母表中的元素称为**符号**，因此
**字母表也被称为符号集**
:::

::: info 符号串
由字母表中的符号组成的**任意有穷序列**称为符号串
:::

字母表${\sum} = \{0, 1\}$的符号串：$0,1,00,11,000,111...$

字母表$A=\{a, b, c\}$的符号串有：$a, b, c, ab, aaca...$

::: warning 提示
空符号串：**不包含任何符号的符号串**，用$\epsilon$表示
:::

### 符号串的运算

- 乘积
  $x = \{0, 1\}, y = \{a, b\}，则$xy = \{0a, 0b, 1a, 1b\}$

- 方幂
  $x = \{0, 1\}$，则$x^0=\epsilon$，$x^1=\{0, 1\}\{0, 1\}=\{00, 01, 10, 11\}$

- 闭包与正闭包
  若${\sum} = \{a, b\}$，则其正闭包
  $$
      {\sum}^+ = {\sum} \cup {\sum}^2 \cup {\sum}^3 \cup {\sum}^4 \dots
  $$
  闭包
  $$
      {\sum}^{*} ={\sum}^0 \cup {\sum} \cup {\sum}^2 \cup {\sum}^3  \dots = {\sum}^0 \cup {\sum}^+
  $$

## 文法和形式语言的定义

::: info 产生式
形如$\alpha \rightarrow \beta$的$(\alpha, \beta)$**有序**对，其中$\alpha \in V^+, \beta \in V^*$
:::

A 的产生式：$A->a$，读作“A 定义为 a”

::: info 文法
文法$G$定义为四元组$(V_N, V_T, P, S)$ \
 $V_N$：非终结符集，包括标识符、大写字母、数字， \
 $V_T$：终结符集合，包括小写字母、运算符、标点、数字等，他们是文法中不可分割的实际元素 \
 $P$：产生式的集合 \
 $S$：识别符或开始符（最初产生式的左侧）\
:::

假设有文法$G=(\{S, A, B\}, \{0, 1\}, P, S)$，其中$P=\{S \rightarrow 0A, S \rightarrow 1B, A \rightarrow 1B, B \rightarrow 1, B \rightarrow 0 \}$
那么文法可以写为

```
G[S]:
  S -> 0A
  S -> 1B
  A -> 1B
  B -> 0
  B -> 1
```

可简写为

```
G(S):
  S -> 0A | 1B
  A -> 1B
  B -> 0 | 1
```

## 推导

::: info 推导的定义
从文法的开始符号出发，反复连续利用产生式，对非终结符施行替换和展开，最终得到一个
**仅由**终结符构成的**符号串**，推到过程的每一步都是一个**直接推导**。

**直接推导**
只使用一次产生式规则从左推导至右侧

**推导**
使用至少一次产生式规则推导出右侧：$\alpha_0 \mathop{\Rightarrow}\limits^{+} \alpha_1$

**广义推导**
经过 0 次或若干次推导得到右侧：$\alpha_0 \mathop{\Rightarrow}\limits^{*} \alpha_1$
:::

对文法$G[S]: S \rightarrow 0S1, S \rightarrow 01$，存在一个推导：

$$
S \Rightarrow 0S1 \Rightarrow 00S11 \Rightarrow 000S111 \Rightarrow 00001111
$$

可以写成

$$
S \mathop{\Rightarrow}\limits^{+} 00001111
$$

## 句型和句子

::: info 句型
若$S \mathop{\Rightarrow}\limits^* x,x \in (V_N \cup V_T)^*$，即$x$是由终结符和非终结符构成的任意符号串，
则$x$为文法$G[S]$的句型
:::
::: info 句子
若$S \mathop{\Rightarrow}\limits^* x,x \in V_T^*$，即$x$是仅由终结符构成的任意符号串，
则$x$为文法$G[S]$的句子
:::

## 语言

::: info 语言的定义
文法产生的所有句子的集合为该文法所定义的语言 \
$L(G[S])=\{x | S \mathop{\Rightarrow}\limits^+ x \cap x \in V_T^*\}$
:::

如文法$G[Z]: Z\rightarrow aZb, Z\rightarrow ab$，
则该文法确定的语言为$L(G[Z])=\{a^nb^n | n \ge 1\}$

## 文法的类型

::: info 0 型文法
对产生式$\alpha \rightarrow \beta$，都有$\alpha \in (V_N \cup V_T)^*$，
且至少包含一个$V_N$，$\beta \in (V_N \cup V_T)^*$
:::

识别系统：图灵机，可表征任何递归系统的可枚举集

::: info 1 型文法（上下文有关文法）
在 0 型文法的基础上加以限制，规定：对于每一个$\alpha \rightarrow \beta$，都必须满足$|\alpha| \le |\beta|$；
即，**产生式左侧符号串长度必须小于等于右侧的符号串长度**
:::

识别系统：线性界限自动机

::: info 2 型文法（上下文无关文法）
在 1 型文法的基础上加以限制，规定：对于每一个$\alpha \rightarrow \beta$，都必须满足**$\alpha$是一个非终结符**；
即，**产生式的左侧必须是一个非终结符**
:::

识别系统：不确定的下推自动机

::: info 3 型文法（正规文法、右线性文法）
在 2 型文法的基础上加以限制，规定：对于每一个$\alpha \rightarrow \beta$，要么满足$A \rightarrow a | aB$（右线性），
要么满足$A \rightarrow \alpha | B\alpha$（左线性），其中$A,B \in V_N$。
:::

识别系统：有穷自动机（FA）所接收的集合

## 上下文无关文法

::: info 上下文无关文法
若一个形式文法$G=(N,\Sigma,P,S)$ 的产生式都有$V \rightarrow w$，其中$V\in N, w\in(N\cup \Sigma)^*$
:::
例如

```
G=({E}, {+, *, I, (, )}, P, E)
P:
  E -> i
  E -> E+E
  E -> E*E
  E -> (E)
```

::: info 规范推导

:::

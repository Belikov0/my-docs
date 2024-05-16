# `TinyColor`，`js`色彩库

## 项目中引入

安装

```bash
npm install tinycolor2
```

引入默认导出，

```js
import tinycolor from "tinycolor2";
```

## 创建`tinycolor`颜色实例

### 使用构造器方法创建颜色实例

接收一个 16 进制字符串，

```js
import tinycolor from "tinycolor2";
const hexColor = "#eaf387";
const color: tinycolor.Instance = tinycolor(hexColor);
```

在类型定义中，`ColorInput`被分为实例对象输入`Instance`和非实例对象输入`ColorInputWithoutInstance`
后者是一系列`ColorFormats`的类型接口集合，可以使用`ColorFormats`中定义的任意类型接口的格式作为`ColorInput`
类型。

```js
type ColorInputWithoutInstance =
        | string
        | ColorFormats.PRGB
        | ColorFormats.PRGBA
        | ColorFormats.RGB
        | ColorFormats.RGBA
        | ColorFormats.HSL
        | ColorFormats.HSLA
        | ColorFormats.HSV
        | ColorFormats.HSVA;
    type ColorInput = ColorInputWithoutInstance | Instance;

    namespace ColorFormats {
        interface Alpha {
            a: number;
        }

        interface PRGB {
            r: string;
            g: string;
            b: string;
        }

        interface PRGBA extends PRGB, Alpha {}

        interface RGB {
            r: number;
            g: number;
            b: number;
        }

        interface RGBA extends RGB, Alpha {}

        interface HSL {
            h: number;
            s: number;
            l: number;
        }

        interface HSLA extends HSL, Alpha {}

        interface HSV {
            h: number;
            s: number;
            v: number;
        }

        interface HSVA extends HSV {
            a: number;
        }
    }
```

## 常用静态方法

### `TinyColor.fromRatio(ratio?: ColorInputWithoutInstance): Instance`

使用相对值创建一个新的颜色实例

### `TinyColor.random(): Instance`

返回一个随机的颜色实例

### `TinyColor.equals(color1: ColorInput, color2: ColorInput):Boolean`

比较两个颜色是否相等，可以是不同接口格式的`ColorInput`

### `TinyColor.mix(color1: ColorInput, color2: ColorInput, amount?: number): Instance`

将两种颜色进行混合

### `TinyColor.readability(color1: ColorInput, color2: ColorInput): number`

使用数字表示两种颜色之间的对比度，越小表明颜色越接近

### `TinyColor.isReadable(foregroundColor: ColorInput, backgroudColor: ColorInput, wcag2?: WCAG2Options): boolean`

确定**前景色**和**背景色**的组合符合`WCAG2`的指导方针

### `TinyColor.mostReadable(baseColor: ColorInput, colorList: ColorInput[], args?: MostReadableArgs): Instance`

在`colorList`中为`baseColor`选择一个最有可读性的前景色或者背景色，返回该颜色的实例。
如果最好的颜色也不够可读，可能会返回黑色或者白色

## 常用实例方法

### `isDark(): Boolean`

### `isLight(): Boolean`

### `isValid(): Boolean`

判断该实例是否正确的被创建，使用错误的参数创建的`Instance`调用该方法会返回`false`

### `getOriginInput(): ColorInput`

返回用于创建该实例的`ColorInput`值

### `getFormat(): string`

返回用于创建该实例的格式

### `getAlpha(): number`

返回该颜色的 alpha 值

### `getBrightness(): number`

返回该颜色实例的亮度，值域为 0~255

### `getLuminance(): number`

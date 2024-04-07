# Three入门

## 引入`Three.js`

```js
import * as THREE from 'three'
```

## 创建场景
场景以树形结构存放场景中所有的三维物体
```js
const scene = new THREE.Scene()
```

## 创建物体

`Geometry`: 几何形状
`Material`: 材质
`Mesh`:  网格模型

```js
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({color:0x00ff00})
const cube = new THREE.Mesh(geometry, material) 
scene.add(cube)
```

## 创建摄像机
```js
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight, // aspect ratido
    0.1,
    1000
)
camera.position.z = 5
```

## 创建渲染器

```js
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElemnet)
```

## 循环渲染
使用`requestAnimationFrame`接口避免`js`引擎阻塞

```js
const animate = () => {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
}
animate()
```


## 摄像机
有两种摄像机
- `PerspectiveCamera`: 透视摄像机
- `OthorgraphicCamera`: 正交摄像机

### `PerspectiveCamera`
```js
THREE.PerspectiveCamera(
    fov, // 视角大小
    ratio, //长宽比例
    near, //最近平面
    far, //最远平面
)
```

**修改完相机的视角之后，调用updateMatrix()更新相机的变换矩阵**

### `lookAt()`
让相机看向空间中的某一个点



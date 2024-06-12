const bucket = new WeakMap()

let activeEffect

function track(target, key) {
    if (!activeEffect) return

    let depsMap = bucket.get(target)
    // 尚没有任何键和副作用函数存在依赖，创建对象到mapper映射
    if (!depsMap) {
        bucket.set(target, (depsMap = new Map()))
    }

    // 这个键值尚不存在任何依赖其的副作用函数
    let deps = depsMap.get(key)
    if (!deps) {
        depsMap.set(key, (deps = new Set()))
    }

    deps.add(activeEffect)
}

function trigger(target, key) {
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const deps = depsMap.get(key)
    deps && deps.forEach((effect) => effect())
}

const data = { ok: true, text: "hello world" }
let result = ""

const obj = new Proxy(data, {
    get(target, key) {
        track(target, key)
        return target[key]
    },
    set(target, key, newValue) {
        target[key] = newValue
        trigger(target, key)
        return true
    },
})

function effect(fn) {
    activeEffect = fn
    fn()
}

effect(() => {
    result = obj.ok ? obj.text : "not"
})

console.log(result)
console.log(bucket.get(data))

obj.ok = false

console.log(result)
console.log(bucket.get(data))

const deepCopy = (obj) => {
    const res = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof Object) {
                res[key] = deepCopy(obj[key])
            } else {
                res[key] = obj[key]
            }
        }
    }
    return res
}



const isEqual = (source, target) => {
    // 类型不相同，返回false
    if (typeof source !== typeof target)
        return false

    if (source === target)
        return true

    const sourceKeys = new Set(Object.keys(source))
    const targetKeys = new Set(Object.keys(target))

    // 长度不相等返回false
    if (sourceKeys.size !== targetKeys.size) 
        return false

    for (const key of sourceKeys){
        if (!targetKeys.has(key) || !isEqual(source[sourceKeys.get(key)], target[targetKeys.get(key)])){
            return false
        }
    }

    return true
}





// console.log(obj)

// 判断两个字面量的值是否相等
function isChanged(source, target){
    return source === target || !(source === source || target === target)
}

// console.log(isChanged(NaN, NaN))
// console.log(isChanged(NaN, 1))
// console.log(isChanged(1, 2))









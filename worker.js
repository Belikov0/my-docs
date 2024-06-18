
self.addEventListener('message', (e) => {
    try{
        if (!Array.isArray(e.data)){
            throw new Error('不是数组')
        }else{
            const [a, b] = e.data
            postMessage(a * b - 100)
        }
    }catch(e){
        postMessage(e)
    }
})


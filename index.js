function debounce(callback, delay=500){

    let timer = null

    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback.apply(this, args)
        }, delay)
    }

}

const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve()
    }, timeout)
    })

   const promiseA = () => {
    promiseSetTimeout(2000)

        .then(() => {
        console.log("★", new Date())
        return promiseSetTimeout(1000)
        })

        .then(() => {
        console.log("♦", new Date())
        return promiseSetTimeout(2000)
        })

        .then(() => {
        console.log("end", new Date())
        })
            
   }

   console.log("start", new Date())
   promiseA()
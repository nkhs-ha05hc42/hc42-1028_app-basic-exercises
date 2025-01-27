const promiseSetTimeout = (timeout) =>
    new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve()
    }, timeout)
    })

   const promiseA = () => {
    promiseSetTimeout(10000)

        .then(() => {
        console.log("★", new Date())
        return promiseSetTimeout(10000)
        })

        .then(() => {
        console.log("♦", new Date())
        })
   }

   console.log("start", new Date())
   promiseA()
   console.log("end", new Date())
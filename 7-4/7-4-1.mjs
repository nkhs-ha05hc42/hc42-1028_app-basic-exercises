const callbackA = () => {
    setTimeout(() => {
    console.log("★", new Date())
        setTimeout(() => {
        console.log("◇", new Date())
        },10000)
    },10000)
}

console.log("start", new Date())
callbackA()
console.log("end", new Date())
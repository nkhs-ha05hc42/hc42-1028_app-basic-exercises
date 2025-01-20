const PlusA = (a,b) => {
 console.log("PlusA", a + b)
}


const callbackA = (a,b, plusa) => {
    setTimeout(() => {
        plusa(a,b)
        setTimeout(() => {
        console.log("end", new Date())
        },1000)
    },2000)
}

console.log("start", new Date())
callbackA(5,5, PlusA)

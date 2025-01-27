const func1 = (num) =>
    new Promise((resolve) => {
        num = "test1"
    resolve(num)
    })
   

const func2 = (num) => {
    func1()
    .then((num) => func2(num))
    .then((result) => {
    console.log("New" + result)
    })
}



console.log("start", new Date())
func2()
console.log("end", new Date())
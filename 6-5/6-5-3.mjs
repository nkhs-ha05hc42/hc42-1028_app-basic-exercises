let sum = 0
let num = 0
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
    sum = sum + i
    }
    num++
    if(sum > 50){
    break
    }
}
console.log(num, sum)
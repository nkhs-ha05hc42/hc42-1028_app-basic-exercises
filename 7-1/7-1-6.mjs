const multiple = (num) => {
    if (num > 100) return 
    multiple(num * 2)
    console.log(num)
   }
   multiple(25)
   multiple(10)



const multiplier = {
        numbers : [6,10,20],
        multiplyBy : 3,
        multiply () {  
            return this.numbers.map((number) => number*this.multiplyBy)
        }
}

console.log(multiplier.multiply());

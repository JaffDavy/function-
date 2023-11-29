function minNumber(a, b) {
    if (a < b) {
      return "a is smaller"
    } else {
      return "b is smaller"
    }
}
console.log(Math.min(6, 9))


function maxNumber(a, b) {
    if (a < b) {
      return "b is greater"
    } else {
      return "a is greater"
    }
}
console.log(Math.max(10, 20))


function sum(a, b) {
  return a + b
}
console.log(sum(5, 5))

function pow(c, d) {
  let sum = 1;
  for (let i = 1; i <= d; i++) {
    sum *=c  
  }
  return (sum)
}
console.log(pow(4, 2))
import fs from "fs"

let input = fs.readFileSync("./input.txt", "utf-8").split("\n\n")
let max = 0
let myArray = []
input.map((element) => {
 let calories = element.split("\n")
  let sum = 0
  calories.forEach((item) => {
    let myNumber = parseInt(item)
    sum += myNumber
  })
  myArray.push(sum)
  if (sum > max) {
    max = sum
  }
})
myArray = myArray.sort(function (a,b) {return a - b})
myArray.pop()
myArray = myArray.reverse()
console.log(myArray[0] + myArray[1] + myArray[2])



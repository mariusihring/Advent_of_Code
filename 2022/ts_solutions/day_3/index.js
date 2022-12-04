import fs from 'fs'

const test_input = fs.readFileSync("./test_input.txt", "utf-8").split("\n")
const input = fs.readFileSync("./input.txt", "utf-8").split("\n")


let score = 0
for (const half of input) {
  if (half === "") continue
  const first_half = half.slice(0, half.length / 2)
  const second_half = half.slice(half.length / 2)



  const [sharedChar] = first_half.split("").filter(item => second_half.includes(item))
  if (sharedChar === sharedChar.toUpperCase()) {
    score += sharedChar.charCodeAt() - 38
  } else {

    score += sharedChar.charCodeAt() - 96
  }

}


console.log(score)

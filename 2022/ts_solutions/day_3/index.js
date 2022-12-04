import fs from 'fs'

const test_input = fs.readFileSync("./test_input.txt", "utf-8").split("\n")
const input = fs.readFileSync("./input.txt", "utf-8").split("\n")

const second = fs.readFileSync("./input.txt", "utf-8")

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


let sum = 0
second.match(/(?:.+\n?){3}/g).map((team) => {
  const [firstElv, secondElv, thirdElv] = team.split("\n")
  const allItems = [firstElv.split(""), secondElv.split(""), thirdElv.split("")]
  const [TheOneItem] = allItems.reduce((x, i) => x.filter(element => i.includes(element)))
  if (TheOneItem === TheOneItem.toUpperCase()) {
    sum += TheOneItem.charCodeAt() - 38
  } else {

    sum += TheOneItem.charCodeAt() - 96
  }
})

console.log(sum)

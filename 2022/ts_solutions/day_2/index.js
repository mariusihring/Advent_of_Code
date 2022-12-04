import fs from "fs"

const ENEMY_ROCK = { letter: "A", score: 0 }
const ENEMY_PAPER = { letter: "B", score: 0 }
const ENEMY_SCISSORS = { letter: "C", score: 0 }
const ROCK = { letter: "X", score: 1 }
const PAPER = { letter: "Y", score: 2 }
const SCISSORS = { letter: "Z", score: 3 }
const WIN = 6
const DRAW = 3
const LOSS = 0
const SHOULD_LOOSE = { letter: "X" }
const SHOULD_DRAW = { letter: "Y" }
const SHOULD_WIN = { letter: "Z" }

const input = fs.readFileSync("./input.txt", "utf-8").split("\n")
input.pop()
let score = 0
input.map((element) => {
  switch (element[0]) {
    case ENEMY_ROCK.letter: {
      switch (element[2]) {
        case ROCK.letter: {
          score += (ROCK.score + DRAW)
          break;
        }
        case SCISSORS.letter: {
          score += (SCISSORS.score + LOSS)
          break;
        }
        case PAPER.letter: {
          score += (PAPER.score + WIN)
          break;
        }
      }
      break;
    }
    case ENEMY_SCISSORS.letter: {
      switch (element[2]) {
        case ROCK.letter: {
          score += (ROCK.score + WIN)
          break;
        }
        case SCISSORS.letter: {
          score += (SCISSORS.score + DRAW)
          break;
        }
        case PAPER.letter: {
          score += (PAPER.score + LOSS)
          break;
        }
      }
      break;
    }
    case ENEMY_PAPER.letter: {
      switch (element[2]) {
        case ROCK.letter: {
          score += (ROCK.score + LOSS)
          break;
        }
        case SCISSORS.letter: {
          score += (SCISSORS.score + WIN)
          break;
        }
        case PAPER.letter: {
          score += (PAPER.score + DRAW)
          break;
        }
      }
      break;
    }
  }
})
console.log(score)
let second = 0
input.forEach((element) => {
  switch (element[0]) {
    case ENEMY_ROCK.letter: {
      switch (element[2]) {
        case SHOULD_WIN.letter: {
          second += (PAPER.score + WIN)
          break;
        }
        case SHOULD_LOOSE.letter: {
          second += (SCISSORS.score + LOSS)

          break;
        }
        case SHOULD_DRAW.letter: {
          second += (ROCK.score + DRAW)
          break;
        }


      }
      break
    }
    case ENEMY_PAPER.letter: {
      switch (element[2]) {
        case SHOULD_WIN.letter: {
          second += (SCISSORS.score + WIN)

          break;
        }
        case SHOULD_LOOSE.letter: {
          second += (ROCK.score + LOSS)
          break;
        }
        case SHOULD_DRAW.letter: {
          second += (PAPER.score + DRAW)

          break;
        }


      }
      break
    }
    case ENEMY_SCISSORS.letter: {
      switch (element[2]) {
        case SHOULD_WIN.letter: {
          second += (ROCK.score + WIN)

          break;
        }
        case SHOULD_LOOSE.letter: {
          second += (PAPER.score + LOSS)

          break;
        }
        case SHOULD_DRAW.letter: {
          second += (SCISSORS.score + DRAW)

          break;
        }


      }
    }
      break
  }

})

console.log(second)

'use strict'

const reduceClues = ({clues, word}) => {
  const letter = getNextLetter(clues)
  const newClues = getNewClues(clues, letter)
  return {
    word: word + letter,
    clues: newClues
  }
}

const getNewClues = (clues, letter) => clues.map(c =>
  c.includes(letter) ? c.slice(1) : c
)

const getNextLetter = (clues) => {
  const firstLetters = clues.map(c => c[0]).flat()
  const tails = clues.map(c => c.slice(1)).flat()
  const letter = firstLetters.find(l => l && !tails.includes(l))
  return letter
}

module.exports = reduceClues

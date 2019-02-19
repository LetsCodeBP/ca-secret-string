'use strict'

const reduceClues = ({clues, word}) => {
  const letter = getNextLetter(clues)
  const newClues = getNewClues(clues, letter)
  return {
    word: word + letter,
    clues: newClues
  }
}

const getNewClues = (clues, letter) => clues.map(({offset, triplet}) => ({
  triplet,
  offset: triplet.includes(letter) ? offset + 1 : offset
}))

const getNextLetter = (clues) => {
  const firstLetters = clues.map(c => c.triplet[c.offset]).flat()
  const tails = clues.map(c => c.triplet.slice(c.offset + 1)).flat()
  const letter = firstLetters.find(l => l && !tails.includes(l))
  return letter
}

module.exports = reduceClues

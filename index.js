'use strict'

const reduceClues = require('./reduce-clues');

const recoverSecret = triplets => {
  const clues = triplets.map(t => ({offset: 0, triplet: t}))
  return recurseSecret({clues, word: ''}).word
}

const recurseSecret = ({clues, word}) => {
  return clues.every(c => c.offset === 3) ?
    {clues, word} :
    recurseSecret(reduceClues({clues, word}))
}

module.exports = recoverSecret

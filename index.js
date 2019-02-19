'use strict'

const reduceClues = require('./reduce-clues');

const recoverSecret = triplets => {
  return recurseSecret({clues: triplets, word: ''}).word
}

const recurseSecret = ({clues, word}) => {
  return clues.every(c => !c.length) ?
    {clues, word} :
    recurseSecret(reduceClues({clues, word}))
}

module.exports = recoverSecret

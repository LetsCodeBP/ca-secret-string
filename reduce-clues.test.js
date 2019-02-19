'use strict'

import test from 'ava'

import reduceClues from './reduce-clues'

test('reduce first letter from single clue', t => {
  const clues = [
    {offset: 0, triplet: ['a','b','c']}
  ]
  const word = ''
  t.deepEqual(reduceClues({clues, word}), {
    word: 'a',
    clues: [{offset: 1, triplet: ['a', 'b', 'c']}]
  })
})

test('reduce second letter from single clue', t => {
  const clues = [
    {offset: 1, triplet: ['a','b','c']}
  ]
  const word = 'a'
  t.deepEqual(reduceClues({clues, word}), {
    word: 'ab',
    clues: [{offset: 2, triplet: ['a', 'b', 'c']}]
  })
})

test('reduce first letter from first clue', t => {
  const clues = [
    {offset: 0, triplet: ['a','b','c']},
    {offset: 0, triplet: ['b','c','d']}
  ]
  const word = ''
  t.deepEqual(reduceClues({clues, word}), {
    word: 'a',
    clues: [
      {offset: 1, triplet: ['a', 'b', 'c']},
      {offset: 0, triplet: ['b', 'c', 'd']}
    ]
  })
})

test('reduce first letter from second clue', t => {
  const clues = [
    {offset: 0, triplet: ['b','c','d']},
    {offset: 0, triplet: ['a','b','c']}
  ]
  const word = ''
  t.deepEqual(reduceClues({clues, word}), {
    word: 'a',
    clues: [
      {offset: 0, triplet: ['b', 'c', 'd']},
      {offset: 1, triplet: ['a', 'b', 'c']}
    ]
  })
})

test('reduce second letter from second clue', t => {
  const clues = [
    {offset: 0, triplet: ['b','c','d']},
    {offset: 1, triplet: ['a','b','c']}
  ]
  const word = 'a'
  t.deepEqual(reduceClues({clues, word}), {
    word: 'ab',
    clues: [
      {offset: 1, triplet: ['b', 'c', 'd']},
      {offset: 2, triplet: ['a', 'b', 'c']}
    ]
  })
})

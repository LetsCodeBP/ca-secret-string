'use strict'

import test from 'ava'

import reduceClues from './reduce-clues'

test('reduce first letter from single clue', t => {
  const clues = [
    ['a','b','c']
  ]
  const word = ''
  t.deepEqual(reduceClues({clues, word}), {
    word: 'a',
    clues: [
      ['b', 'c']
    ]
  })
})

test('reduce second letter from single clue', t => {
  const clues = [
    ['b','c']
  ]
  const word = 'a'
  t.deepEqual(reduceClues({clues, word}), {
    word: 'ab',
    clues: [['c']]
  })
})

test('reduce first letter from first clue', t => {
  const clues = [
    ['a','b','c'],
    ['b','c','d']
  ]
  const word = ''
  t.deepEqual(reduceClues({clues, word}), {
    word: 'a',
    clues: [
      ['b', 'c'],
      ['b', 'c', 'd']
    ]
  })
})

test('reduce first letter from second clue', t => {
  const clues = [
    ['b','c','d'],
    ['a','b','c']
  ]
  const word = ''
  t.deepEqual(reduceClues({clues, word}), {
    word: 'a',
    clues: [
      ['b', 'c', 'd'],
      ['b', 'c']
    ]
  })
})

test('reduce second letter from second clue', t => {
  const clues = [
    ['b','c','d'],
    ['b','c']
  ]
  const word = 'a'
  t.deepEqual(reduceClues({clues, word}), {
    word: 'ab',
    clues: [
      ['c', 'd'],
      ['c']
    ]
  })
})

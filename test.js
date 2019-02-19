'use strict'

import test from 'ava'

import recoverSecret from './'

test('acceptance', t => {
  const triplets = [
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
  ]
  t.is(recoverSecret(triplets), 'whatisup')
})

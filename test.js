const fs = require('fs')
const test = require('ava')
const { three, six, nine, divisible } = require('./index')

test('three', t => t.is(three, 3))
test('six', t => t.is(six, 6))
test('nine', t => t.is(nine, 9))
test('divisible', t => t.true(divisible(3 + 6 + 9)))

test.cb('perfect', t => {
  fs.readFile('./index.js', (e, code) => {
    t.falsy(e)

    const lines = code.toString().split('\n')
    t.true(divisible(lines.length - 1))
    for (let line of lines) {
      t.true(divisible(line.length))
    }
    t.end()
  })
})

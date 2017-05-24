/**
 * Tests dependencies.
 */

const test = require('tape')
const transform = require('..')


test('transform object into string', assert => {
  assert.plan(1)
  const obj = {
    name: 'hello'
  }
  assert.equal(typeof transform(obj), 'string')
})

test('transform object into cypher properties', assert => {
  assert.plan(1)
  const props = transform({
    name: 'hello'
  })
  assert.equal(props, '{name:"hello"}')
})

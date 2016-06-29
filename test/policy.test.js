'use strict'

const assert = require('assert')
const Policy = require('../')

describe('Trails Policy', () => {
  class FooPolicy extends Policy {
    testPolicy () {
    }
  }

  describe('#constructor', () => {
    it('.app should be accessible but not enumerable', () => {
      const foo = new FooPolicy(1)
      const keys = Object.keys(foo)

      assert.equal(foo.app, 1)
      assert.equal(keys.indexOf('app'), -1)
    })
  })
})


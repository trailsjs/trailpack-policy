'use strict'

const Policy = require('trails-policy')

/**
 * Trails Policy Class.
 */
module.exports = class TrailpackPolicy extends Policy {
  constructor(app) {
    super(app)
    this.isUnified = true
  }
}

'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"http://localhost:8080"',
  BASE_API: '"http://39.105.6.161:8080"'
})

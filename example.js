'use strict'

const spinner = require('.')('Spinning')

setTimeout(() =>
    spinner.update('Still spinning')
, 1000)

setTimeout(() =>
    Math.random() < 0.5
    ? spinner.success('Success')
    : spinner.fail(new Error('Fail'))
, 2000)

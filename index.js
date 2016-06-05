'use strict'

const spinner = require('cli-spinners').dots.frames
const next = require('circ-iter')(spinner)

const { cyan, green, red } = require('chalk')

const log = require('log-update')
const once = require('once')
const wrap = require('./wrap')

module.exports = msg => {

    const updatePrefix = () => '\n  ' + cyan(next()) + ' '
    const successPrefix = '\n  ' + green('✔') + ' '
    const failPrefix = '\n  ' + red('✖') + ' '

    const start = setInterval(() => log(updatePrefix() + wrap(msg)), 80)
    const end = once (msg => { clearInterval(start); log(msg) })

    this.update = newMsg => msg = newMsg
    this.success = msg => end(successPrefix + wrap(msg))
    this.fail = msg => msg instanceof Error
        ? end(failPrefix + msg.stack.toString() + '\n')
        : end(failPrefix + wrap(msg))

    return this
}

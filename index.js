'use strict'

const spinner = require('cli-spinners').dots.frames
const next = require('circ-iter')(spinner)

const { cyan, green, red } = require('chalk')

const log = require('log-update')
const once = require('once')
const wrap = require('./wrap')

module.exports = message => {

    const updatePrefix = () => '\n  ' + cyan(next()) + ' '
    const successPrefix = '\n  ' + green('✔') + ' '
    const failPrefix = '\n  ' + red('✖') + ' '

    const start = setInterval(() => log(updatePrefix() + wrap({ message })), 80)
    const end = once (message => { clearInterval(start); log(message) })

    this.update = newMessage => message = newMessage
    this.success = message => end(successPrefix + wrap({ message }))
    this.fail = message => message instanceof Error
        ? end(failPrefix + message.stack.toString() + '\n')
        : end(failPrefix + wrap({ message }))

    return this
}

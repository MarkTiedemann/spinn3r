'use strict'

const wordWrap = require('word-wrap')

const blanks = n => new Array(n + 1).join(' ')

module.exports = ({ message = '', indentLeft = 4, indentRight = 4, indentFirstLine = false } = {}) => {

    const lines = wordWrap(message, {
        width: process.stdout.columns - indentLeft - indentRight,
        indent: blanks(indentLeft),
        trim: true
    })

    return indentFirstLine ? lines : lines.slice(indentLeft)
}

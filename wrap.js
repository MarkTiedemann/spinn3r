'use strict'

const wordWrap = require('word-wrap')

module.exports = ({ message = '', indentLeft = 4, indentRight = 4, indentFirstLine = false } = {}) => {

    const lines = wordWrap(message, {
        width: process.stdout.columns - indentLeft - indentRight,
        indent: ' '.repeat(indentLeft),
        trim: true
    })

    return indentFirstLine ? lines : lines.slice(indentLeft)
}

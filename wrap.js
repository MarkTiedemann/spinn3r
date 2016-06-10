'use strict'

const blanks = n => new Array(n + 1).join(' ')
const chunk = (string, length) => String(string).match(new RegExp(`.{1,${length}}`, 'g'))

module.exports = ({ message, indentLeft = 4, indentRight = 4, indentFirstLine = false }) => {
    const lines = chunk(message, process.stdout.columns - indentLeft - indentRight)
        .map(line => blanks(indentLeft) + line + '\n').join('')
    return indentFirstLine ? lines : lines.slice(indentLeft)
}

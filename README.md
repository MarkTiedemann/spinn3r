
# spinn3r

**Simple, beautiful spinner.**

## Installation

```
npm install spinn3r
```

## Quickstart

```js
const spinner = require('spinn3r')('Spinning')

setTimeout(() =>
    spinner.update('Still spinning')
, 1000)

setTimeout(() =>
    Math.random() < 0.5
    ? spinner.success('Success')
    : spinner.fail(new Error('Fail'))
, 2000)
```

- **If success:**

![](https://raw.githubusercontent.com/MarkTiedemann/spinn3r/master/media/success.gif)

- **If fail:**

![](https://raw.githubusercontent.com/MarkTiedemann/spinn3r/master/media/fail.gif)

## API

### `spinner = require('spinn3r')(initialMessage)`

**\> Creates a spinner with the specified message.**

- The spinner automatically starts spinning in an interval of 80 ms.
- All spinner messages have an indentation of 4 whitespaces left and right.
- The initial message is prefixed with blue dots as a spinner.

### `spinner.update(newMessage)`

**\> Updates the spinner with the specified message.**

- The updated message is prefixed with blue dots as a spinner.

### `spinner.success(finalMessage)`

**\> Stops the spinner with the specified success message.**

- The success message is prefixed with a green tick mark.

### `spinner.fail(finalMessage|error)`

**\> Stops the spinner with the specified fail message.**

- If an error is supplied, its stacktrace will be printed.
- The error message is prefixed with a red cross.

## FAQ

**Why are there no options?**

- This module is deliberately opinionated. If you are looking for a beautiful spinner with options, please use [ora](https://github.com/sindresorhus/ora).

**Does this spinner handle the Windows Command Prompt well?**

- No.

**Will this spinner gracefully not do anything if run in a CI environment?**

- No.

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).

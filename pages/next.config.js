const withCss = requuire('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withCss(withSass())
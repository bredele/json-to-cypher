

/**
 * Transform Object into cypher properties.
 *
 * Example:
 *
 *  transform({
 *    name: 'hello'
 *  })
 *  // => '{name:"hello"}'
 *
 * @param {Object} obj
 * @return {String}
 * @api public
 */

module.exports = function (obj) {
  let result = '{'
  for(var key in obj) {
    result += `${key}:"${obj[key]}",`
  }
  return (result.slice(0, -1) + '}')
}

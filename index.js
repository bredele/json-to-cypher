

/**
 *
 */

module.exports = function (obj) {
  let result = '{'
  for(var key in obj) {
    result += `${key}:"${obj[key]}",`
  }
  return (result.slice(0, -1) + '}')
}

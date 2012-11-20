/**
 * Module dependencies
 */
var colors = require('./colors')

/**
 * Get color object.
 * @param name {String}
 * @return {Object} Color object
 * @api public
 */

module.exports.get = function(name) {
  name = name || ''
  name = name.trim()
  return colors.filter(function(color){
    return color.name === name
  }).pop()
}

/**
 * Get color value for a certain name.
 * @param name {String}
 * @return {String} Hex color value
 * @api public
 */

module.exports.getValue = function(name) {
  return module.exports.get(name).value
}

/**
 * All colors.
 *
 * @api public
 */

module.exports.all = colors

var test = require('tape')

var toHex = require('./index.js')

test('maps VGA color names to HEX values', function(t) {
  t.plan(2)
  t.equal(toHex('red'), '#FF0000')
  t.equal(toHex('blue'), '#0000FF')
})

test('accepts case insensitive VGA color names and maps to HEX values', function (t) {
  t.plan(2)
  t.equal(toHex('ReD'), '#FF0000')
  t.equal(toHex('BLue'), '#0000FF')
})

test('maps CSS color names to HEX values', function(t) {
  t.plan(2)
  t.equal(toHex('lightsalmon'), '#FFA07A')
  t.equal(toHex('mediumvioletred'), '#C71585')
})

test('accepts case insensitive CSS color names and maps to HEX values', function(t) {
  t.plan(2)
  t.equal(toHex('LightSalmon'), '#FFA07A')
  t.equal(toHex('MediUmVioletRed'), '#C71585')
})

test('meta data about a color', function(t) {
  t.plan(1)
  t.deepEqual(toHex.get('red'), {
    name: "red",
    css: true,
    value: "#FF0000",
    vga: true
  })
})

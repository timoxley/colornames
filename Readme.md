# colors

  Map color names to HEX color values.

## Installation

    $ component install timoxley/colornames

## API

### colornames(name)
Get HEX code for a color name, or `undefined` if unknown.

### .get(name)
All known data about color, including whether valid VGA or CSS color
name.

### .get.vga(name)
HEX code for a color name, only if the color is a valid VGA color
name.

### .get.css(name)
HEX code for a color name, only if the color is a valid CSS color
name.

###.all()
Get all color names data.

## Examples

### VGA color names
```js
colornames('red') // => "#FF0000"
colornames('blue') // => "#0000FF"
```

### CSS color names
```js
colornames('lightsalmon') // => "#FFA07A"
colornames('mediumvioletred') // => "#C71585"
```

### Get meta data about a color
```js
colornames.get('red')
// =>
{
  name: "red",
  css: true,
  value: "#FF0000",
  vga: true
}
```
## License

  MIT

## Complete Color Map

![example-color-table-](https://f.cloud.github.com/assets/43438/643981/f57948a0-d381-11e2-99fd-197c44065564.png)

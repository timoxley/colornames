# colors

  Map color names to HEX color values.

## Installation

    $ component install timoxley/colors

## API

### colors(name)
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
colors('red') // => "#FF0000"
colors('blue') // => "#0000FF"
```

### CSS color names
```js
colors('lightsalmon') // => "#FFA07A"
colors('mediumvioletred') // => "#C71585"
```

### Get meta data about a color
```js
colors.get('red')
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
  
![example-color-table-](https://f.cloud.github.com/assets/43438/643981/f57948a0-d381-11e2-99fd-197c44065564.png)

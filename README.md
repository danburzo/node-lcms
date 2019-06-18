# node-lcms

A little wrapper over [LittleCMS](https://github.com/mm2/Little-CMS) utilities.

## Installation

You need to have LittleCMS installed. You can build it from source by following these steps (which should work on Unix-based systems, including macOS):

```bash
git clone git@github.com:mm2/Little-CMS.git
cd Little-CMS
./configure
make
make check
make install
```

You can now use `node-lcms` in your project by installing it from npm into your project:

```bash
# using npm
npm install node-lcms

# using yarn
yarn add node-lcms
```

## API reference

### `convert(options = {})` → `function(color_arr)`

This is a wrapper over the Little CMS's `transicc` utility, which converts colors based on ICC profiles.

```js
let { convert } = require('node-lcms');

let conv = convert({
	profile_out: require.resolve('color-profiles/pso-coated-v3.icc')
});

console.log(conv([255, 0, 0]));
```

`intent`:

| Value | Description                                  |
| ----- | -------------------------------------------- |
| `0`   | Perceptual                                   |
| `1`   | Relative colorimetric                        |
| `2`   | Saturation                                   |
| `3`   | Absolute colorimetric                        |
| `10`  | Perceptual preserving black ink              |
| `11`  | Relative colorimetric preserving black ink   |
| `12`  | Saturation preserving black ink              |
| `13`  | Perceptual preserving black plane            |
| `14`  | Relative colorimetric preserving black plane |
| `15`  | Saturation preserving black plane            |

Built-in profiles:

| Profile    | Description                                     |
| ---------- | ----------------------------------------------- |
| `*Lab2`    | D50-based v2 CIEL*a*b                           |
| `*Lab4`    | D50-based v4 CIEL*a*b                           |
| `*Lab`     | D50-based v4 CIEL*a*b                           |
| `*XYZ`     | CIE XYZ (PCS)                                   |
| `*sRGB`    | sRGB color space                                |
| `*Gray22`  | Monochrome of Gamma 2.2                         |
| `*Gray30`  | Monochrome of Gamma 3.0                         |
| `*null`    | Monochrome black for all input                  |
| `*Lin2222` | CMYK linearization of gamma 2.2 on each channel |

## Acknowledgements

This project is indebted to James Pederson's [node-transicc](https://github.com/jpederson/node-transicc) for instructions on how to install LittleCMS from source and how to interface with it in Node.js.

## See also

-   [color-profiles](https://github.com/danburzo/color-profiles)
-   [rust-lcms2](https://github.com/kornelski/rust-lcms2)

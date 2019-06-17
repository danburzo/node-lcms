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

## Available profiles

## API reference

### `convert(in_profile, out_profile, options)`

This is a wrapper over the Little CMS's `transicc` utility, which converts colors based on ICC profiles.

```js
let { converter } = require('node-lcms');

let conv = converter('profile', opts);
conv('red').then(res => {
	console.log(res);
});
```

`intent`:

| Value | Description                                  |
| ----- | -------------------------------------------- |
| 0     | Perceptual                                   |
| 1     | Relative colorimetric                        |
| 2     | Saturation                                   |
| 3     | Absolute colorimetric                        |
| 10    | Perceptual preserving black ink              |
| 11    | Relative colorimetric preserving black ink   |
| 12    | Saturation preserving black ink              |
| 13    | Perceptual preserving black plane            |
| 14    | Relative colorimetric preserving black plane |
| 15    | Saturation preserving black plane            |

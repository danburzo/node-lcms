# node-lcms

A little wrapper over [LittleCMS](https://github.com/mm2/Little-CMS) utilities.

## Installation

You need to have LittleCMS installed. On Unix-based systems (including macOS), you can build it from source by following these steps:

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

### `converter()`

This is a wrapper over the `transicc` utility, which converts colors based on ICC profiles.

```js
let { converter } = require('node-lcms');

let conv = converter('profile', opts);
conv('red').then(res => {
	console.log(res);
});
```

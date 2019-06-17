let convert = require('../util/convert');

module.exports = profile => {
	let conv = convert(profile, '*sRGB');
	return color => {
		let arr = getModeDefinition(color.mode)
			.channels // exclude alpha
			// TODO should we premultiply?
			.filter(ch => ch !== 'alpha');
		let converted = conv(arr);
		let res = {
			mode: 'rgb',
			r: converted[0] / 255,
			g: converted[1] / 255,
			b: converted[2] / 255
		};

		if (color.alpha !== undefined) {
			res.alpha = color.alpha;
		}

		return res;
	};
};

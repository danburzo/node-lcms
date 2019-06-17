import convert from '../util/convert';
import { getModeDefinition } from 'culori';

export default profile => {
	let conv = convert('*sRGB', profile);
	return color => {
		let arr = getModeDefinition(color.mode)
			.channels // exclude alpha
			// TODO should we premultiply?
			.filter(ch => ch !== 'alpha')
			.map(ch => color[ch] * 255);
		let converted = conv(arr);
		console.log(converted);
		let res = {
			mode: `cmyk/${profile}`,
			c: converted[0],
			m: converted[1],
			y: converted[2],
			k: converted[3]
		};

		if (color.alpha !== undefined) {
			res.alpha = color.alpha;
		}

		return res;
	};
};

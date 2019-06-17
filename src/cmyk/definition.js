import { interpolateLinear, interpolateAlpha } from 'culori';

import convertRgbToCmyk from './convertRgbToCmyk';
import convertCmykToRgb from './convertCmykToRgb';

export default profile => ({
	mode: `cmyk/${profile}`,
	channels: ['c', 'm', 'y', 'k', 'alpha'],
	ranges: {
		c: [0, 100],
		m: [0, 100],
		y: [0, 100],
		k: [0, 100],
		alpha: [0, 1]
	},
	input: {
		rgb: convertRgbToCmyk(profile)
	},
	output: {
		rgb: convertCmykToRgb(profile)
	},
	interpolate: {
		// todo: culori assumes 4 channels (fourth being alpha)
		c: interpolateLinear(),
		m: interpolateLinear(),
		y: interpolateLinear(),
		k: interpolateLinear(),
		alpha: interpolateLinear(interpolateAlpha)
	}
});

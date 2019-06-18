import { spawnSync } from 'child_process';

const DEFAULT_OPTS = {
	// input profile
	profile_in: '*sRGB',

	// output profile
	profile_out: '*sRGB',

	bpc: false,
	bounded: false,
	rounded: false
};

/*
	Mappings from options to corresponding `transicc` flags
 */
const OPT_TO_FLAG = {
	profile_in: v => ['-i', v],
	profile_out: v => ['-o', v],
	intent: v => [`-t${v}`],
	bpc: v => [v ? '-b' : ''],
	bounded: v => [v ? '-s' : ''],
	rounded: v => [v ? '-q' : '']
};

const to_flag = ([k, v]) => OPT_TO_FLAG[k](v);

const MANDATORY_FLAGS = [
	'-n' // terse output, easier to parse
];

export default (opts = {}) => {
	let flags = MANDATORY_FLAGS.concat(
		...Object.entries({
			...DEFAULT_OPTS,
			...opts
		}).map(to_flag)
	).filter(f => f);

	return arr => {
		let input = `${arr.join('\n') + '\n'}`;
		return spawnSync('transicc', flags, { input })
			.stdout.toString()
			.trim()
			.split(' ')
			.map(parseFloat);
	};
};

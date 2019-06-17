import { spawnSync } from 'child_process';
import profilePath from './profile-path';

const parseCommandResult = res =>
	res
		.trim()
		.split(' ')
		.map(p => p.split('=')[1]);

export default (profile_in = '*sRGB', profile_out = '*sRGB', opts = {}) => {
	let in_path = profilePath(profile_in);
	let out_path = profilePath(profile_out);

	return arr =>
		parseCommandResult(
			spawnSync('transicc', ['-i', in_path, '-o', out_path], {
				input: `${arr.join('\n') + '\n'}`
			}).stdout.toString()
		);
};

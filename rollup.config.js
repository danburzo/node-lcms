import buble from 'rollup-plugin-buble';
import pkg from './package.json';

export default [
	{
		input: 'src/index.js',
		output: {
			file: pkg.main,
			format: 'cjs'
		},
		external: ['child_process'],
		plugins: [buble({ objectAssign: 'Object.assign' })]
	}
];

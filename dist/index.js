'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var child_process = require('child_process');

var DEFAULT_OPTS = {
	// input profile
	profile_in: '*sRGB',

	// output profile
	profile_out: '*sRGB'
};

/*
	Mappings from options to corresponding `transicc` flags
 */
var OPT_TO_FLAG = {
	profile_in: function(v) {
		return ['-i', v];
	},
	profile_out: function(v) {
		return ['-o', v];
	},
	intent: function(v) {
		return ['-t' + v];
	}
};

var to_flag = function(ref) {
	var k = ref[0];
	var v = ref[1];

	return OPT_TO_FLAG[k](v);
};

var MANDATORY_FLAGS = ['-n'];

function convert(opts) {
	if (opts === void 0) opts = {};

	var flags = MANDATORY_FLAGS.concat.apply(
		MANDATORY_FLAGS,
		Object.entries(Object.assign({}, DEFAULT_OPTS, opts)).map(to_flag)
	);

	return function(arr) {
		var input = '' + (arr.join('\n') + '\n');
		return child_process
			.spawnSync('transicc', flags, { input: input })
			.stdout.toString()
			.trim()
			.split(' ')
			.map(parseFloat);
	};
}

exports.convert = convert;

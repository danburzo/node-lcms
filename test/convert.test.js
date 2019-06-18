import tape from 'tape';
import { convert } from '../src/index';

tape('convert from sRGB to sRGB', t => {
	let conv = convert({ intent: 10 });
	t.deepEqual(conv([10, 10, 10]), [10, 10, 10]);
	t.deepEqual(conv([0, 0, 0]), [0, 0, 0]);
	t.deepEqual(conv([255, 210, 135]), [255, 210, 135]);
	t.end();
});

tape('convert with flags', t => {
	let conv = convert({ intent: 10, bpc: true, bounded: true, rounded: true });
	t.deepEqual(conv([10, 10, 10]), [10, 10, 10]);
	t.deepEqual(conv([0, 0, 0]), [0, 0, 0]);
	t.deepEqual(conv([255, 210, 135]), [255, 210, 135]);
	t.end();
});

import tape from 'tape';
import convertRgbToCmyk from '../src/cmyk/convertRgbToCmyk';
import { rgb } from 'culori';

let conv = convertRgbToCmyk('*sRGB');

tape('convert()', t => {
	t.equal(conv(rgb('red')), 'red');
	t.end();
});

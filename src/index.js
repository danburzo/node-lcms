import { defineMode } from 'culori';
import cmyk from './cmyk/definition';

const register = profile => {
	defineMode(cmyk(profile));
};

export { register };

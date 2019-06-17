import { join } from 'path';

export default path =>
	path.match(/^\*/) ? path : join(__dirname, '../profiles', `${path}.icc`);

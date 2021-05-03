import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {slice} from '../../src/index.js';

test('slice', (t) => {
	const x = (start, stop, step) => {
		const iterable = range(0, stop, 1);

		t.deepEqual(
			list(slice(iterable, start, stop, step)),
			list(range(start, stop, step)),
		);
	};

	x(0, 0, 1);
	x(0, 100, 1);
	x(0, 100, 2);
	x(0, 100, 3);
	x(50, 100, 1);
	x(50, 100, 2);
	x(50, 100, 3);
});

test('empty', (t) => {
	t.deepEqual(list(slice(range(50), 100, 1000, 1)), []);
});

import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';
import {count} from '@iterable-iterator/count';

import {tail} from '../../src/index.js';

test('tail', (t) => {
	t.deepEqual(list(tail(range(100), -37)), list(range(37, 100)));
	t.deepEqual(list(tail(range(100), 0)), list(range(0)));
	t.deepEqual(list(tail(range(100), 37)), list(range(100 - 37, 100)));

	t.deepEqual(list(tail(range(100), 1000)), list(range(100)));
});

test('construct tail of infinite generator', (t) => {
	tail(count(), 10);
	t.pass();
});

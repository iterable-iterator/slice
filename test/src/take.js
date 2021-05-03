import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {take} from '../../src/index.js';

test('take', (t) => {
	t.deepEqual(list(take(range(100), 37)), list(range(37)));
	t.deepEqual(list(take(range(100), 0)), list(range(0)));
	t.deepEqual(list(take(range(100), -37)), list(range(100 - 37)));

	t.deepEqual(list(take(range(100), 1000)), list(range(100)));
});

import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {trunc} from '../../src/index.js';

test('trunc', (t) => {
	t.deepEqual(list(trunc(range(100), -37)), list(range(37)));
	t.deepEqual(list(trunc(range(100), 0)), list(range(100)));
	t.deepEqual(list(trunc(range(100), 37)), list(range(100 - 37)));
	t.deepEqual(list(trunc(range(100), 100)), list(range(100 - 100)));
	t.deepEqual(list(trunc(range(100), 999)), list(range(0)));
});

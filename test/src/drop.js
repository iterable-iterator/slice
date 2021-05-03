import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {drop} from '../../src/index.js';

test('drop', (t) => {
	t.deepEqual(list(drop(range(100), 37)), list(range(37, 100)));
	t.deepEqual(list(drop(range(100), 0)), list(range(100)));
	t.deepEqual(list(drop(range(100), -37)), list(range(100 - 37, 100)));
});

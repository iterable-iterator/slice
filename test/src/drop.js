import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {drop} from '../../src/index.js';

const macro = (t, input, n, expected) => {
	t.deepEqual(list(drop(input, n)), list(expected));
};

macro.title = (title, input, n, expected) =>
	title ?? `drop(${input}, ${n}) is ${expected}`;

test(macro, range(100), 37, range(37, 100));
test(macro, range(100), 0, range(100));
test(macro, range(100), -37, range(100 - 37, 100));

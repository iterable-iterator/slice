import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {trunc} from '#module';

const macro = (t, input, n, expected) => {
	t.deepEqual(list(trunc(input, n)), list(expected));
};

macro.title = (title, input, n, expected) =>
	title ?? `trunc(${input}, ${n}) is ${expected}`;

test(macro, range(100), -37, range(37));
test(macro, range(100), 0, range(100));
test(macro, range(100), 37, range(100 - 37));
test(macro, range(100), 100, range(100 - 100));
test(macro, range(100), 999, range(0));

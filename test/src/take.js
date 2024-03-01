import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {take} from '#module';

const macro = (t, input, n, expected) => {
	t.deepEqual(list(take(input, n)), list(expected));
};

macro.title = (title, input, n, expected) =>
	title ?? `take(${input}, ${n}) is ${expected}`;

test(macro, range(100), 37, range(37));
test(macro, range(100), 0, range(0));
test(macro, range(100), -37, range(100 - 37));

test(macro, range(100), 1000, range(100));

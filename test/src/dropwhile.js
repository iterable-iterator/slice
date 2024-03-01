import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {lt} from './_fixtures.js';

import {dropwhile} from '#module';

const macro = (t, input, predicate, expected) => {
	t.deepEqual(list(dropwhile(predicate, input)), list(expected));
};

macro.title = (title, input, predicate, expected) =>
	title ?? `dropwhile(${predicate}, ${input}) is ${expected}`;

test(macro, range(0, 100, 1), lt(50), range(50, 100, 1));
test(macro, range(0, 100, 1), lt(100), range(0, 0, 1));
test(macro, range(0, 0, 1), lt(1), range(0, 0, 1));

import test from 'ava';

import {lt} from './_fixtures.js';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {takewhile} from '../../src/index.js';

const macro = (t, input, predicate, expected) => {
	t.deepEqual(list(takewhile(predicate, input)), list(expected));
};

macro.title = (title, input, predicate, expected) =>
	title ?? `takewhile(${predicate}, ${input}) is ${expected}`;

test(macro, range(0, 100, 1), lt(50), range(0, 50, 1));
test(macro, range(0, 100, 1), lt(100), range(0, 100, 1));
test(macro, range(0, 0, 1), lt(1), range(0, 0, 1));

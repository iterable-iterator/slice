import test from 'ava';

import {lt} from '@functional-abstraction/predicate';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {takewhile} from '../../src/index.js';

test('takewhile', (t) => {
	const x = function (iterable, predicate, expected) {
		t.deepEqual(list(takewhile(predicate, iterable)), expected);
	};

	x(list(range(0, 100, 1)), lt(50), list(range(0, 50, 1)));

	x(list(range(0, 100, 1)), lt(100), list(range(0, 100, 1)));

	x(list(range(0, 0, 1)), lt(1), list(range(0, 0, 1)));
});

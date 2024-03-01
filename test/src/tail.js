import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {count} from '@iterable-iterator/count';
import {tail} from '#module';

const macro = (t, input, n, expected) => {
	t.deepEqual(list(tail(input, n)), list(expected));
};

macro.title = (title, input, n, expected) =>
	title ?? `tail(${input}, ${n}) is ${expected}`;

test(macro, range(100), -37, range(37, 100));
test(macro, range(100), 0, range(0));
test(macro, range(100), 37, range(100 - 37, 100));

test(macro, range(100), 1000, range(100));

test('constructing tail of infinite generator does not loop', (t) => {
	tail(count(), 10);
	t.pass();
});

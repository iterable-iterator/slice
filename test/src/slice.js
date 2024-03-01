import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';

import {slice} from '#module';

const macro = (t, input, start, stop, step, expected) => {
	t.deepEqual(list(slice(input, start, stop, step)), list(expected));
};

macro.title = (title, input, start, stop, step, expected) =>
	title ?? `slice(${input}, ${start}, ${stop}, ${step}) is ${expected}`;

const sliceRange = (t, start, stop, step) => {
	const {input, expected} = sliceRange.args(start, stop, step);
	macro(t, input, start, stop, step, expected);
};

sliceRange.args = (start, stop, step) => ({
	input: range(0, stop, 1),
	expected: range(start, stop, step),
});

sliceRange.title = (title, start, stop, step) => {
	const {input, expected} = sliceRange.args(start, stop, step);
	return macro.title(title, input, start, stop, step, expected);
};

test(sliceRange, 0, 0, 1);
test(sliceRange, 0, 100, 1);
test(sliceRange, 0, 100, 2);
test(sliceRange, 0, 100, 3);
test(sliceRange, 50, 100, 1);
test(sliceRange, 50, 100, 2);
test(sliceRange, 50, 100, 3);

test(macro, range(50), 100, 1000, 1, range(0));

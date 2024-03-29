import assert from 'assert';

import {consume} from '@iterable-iterator/consume';
import {iter} from '@iterable-iterator/iter';

/**
 * Drops the first <code>n</code> values of the input iterable.
 *
 * @example
 * // returns [ 3 , 4 ]
 * list( _drop( range( 5 ) , 3 ) ) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {Number} n - The nonnegative number of values to drop.
 * @returns {IterableIterator} - The remaining values of the input iterable.
 */
export default function* _drop(iterable, n) {
	assert(Number.isInteger(n) && n >= 0);
	const iterator = iter(iterable);
	consume(iterator, n);
	yield* iterator;
}

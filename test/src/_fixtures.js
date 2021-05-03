import {lt as _lt} from '@functional-abstraction/predicate';

export const lt = (x) => {
	const _p = _lt(x);
	const p = (y) => _p(y);
	p.toString = () => `lt(${x})`;
	return p;
};

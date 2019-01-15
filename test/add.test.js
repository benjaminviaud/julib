const test = require('ava');
const add = require('.');

test('test add numbers', t => {
	t.is(add(6, 4), 10);
	t.is(add(6.5, 4.5), 11);
	t.is(add(6, -4), 2);
	t.is(add(6, -8), -2);
	t.is(add(6, ''), '6');
	t.is(add(6, undefined), NaN);
	t.is(add(6, null), 6);
	t.is(add(6, true), 7);
	t.is(add(6, false), 6);
	t.is(add(6, '4'), '64');
	t.is(add(6, {}), NaN);
	t.is(add(6, new Object()), NaN); // eslint-disable-line no-new-object
	t.is(add(6, new RegExp()), NaN);
	t.is(add(6, Object(2)), 8); // eslint-disable-line unicorn/new-for-builtins
	t.is(add(6, Object('2')), '62'); // eslint-disable-line unicorn/new-for-builtins
});

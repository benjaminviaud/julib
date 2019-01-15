const test = require('ava');
const isObj = require('.');

test('test isObj with string', t => {
	t.true(isObj({}));
	t.true(isObj(new Object())); // eslint-disable-line no-new-object
	t.true(isObj(new Date()));
	t.true(isObj(new RegExp()));
	t.true(isObj(Object.create(null)));
	t.true(isObj({foo: true}));
	t.true(isObj([]));
	t.true(isObj(['foo', 'bar']));
	t.true(isObj(() => {}));
	t.true(isObj(arguments)); // eslint-disable-line no-undef
	t.true(isObj(/./));
	t.true(isObj(Object(0))); // eslint-disable-line  unicorn/new-for-builtins
	t.true(isObj(Object('foo'))); // eslint-disable-line  unicorn/new-for-builtins
	t.true(isObj(Object(false))); // eslint-disable-line  unicorn/new-for-builtins
	t.false(isObj(null));
	t.false(isObj(undefined));
	t.false(isObj(NaN));
	t.false(isObj(''));
	t.false(isObj(0));
	t.false(isObj(false));
});

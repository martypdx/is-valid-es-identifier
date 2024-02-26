/**
 * Removed ES5 related tests
 * 
 * test
 * Copyright(c) 2017 Steve Westbrook
 * MIT Licensed
 */

import { assert, test } from 'vitest';
import { isValidESIdentifier } from './index.js';

var testGroup = (validator, name) => {

    test(`${name} should recognize a basic variable`, () => {
        assert.ok(validator('x'));
    });

    test(`${name} should allow strange characters`, () => {
        // Valid but not cool
        assert.ok(validator('π'));
    });

    test(`${name} should allow dollar signs and underscores`, () => {
        // Valid but not cool
        assert.ok(validator('$'));
        assert.ok(validator('_'));
        assert.ok(validator('$$'));
        assert.ok(validator('__'));
    });

    test(
        `${name} should reject invalid characters in the first position`,
        () => {
            assert.ok(!validator(' ab'));
        });

    test(
        `${name} should reject numbers in the first position`,
        () => {
            assert.ok(!validator('0ab'));
        });

    test(
        `${name} should reject invalid characters in non-first positions`,
        () => {
            assert.ok(!validator('a b'));
            assert.ok(!validator('ab]['));
        });

    test(`${name} should allow capitals`, () => {
        assert.ok(validator('X'));
    });

    test(`${name} should allow upper, lower, numbers`, () => {
        assert.ok(validator('xXY1'));
        assert.ok(validator('Xxy2'));
    });

    test(`${name} should not allow numbers in the first position`, () => {
        assert.ok(!validator('1abc'));
    });

    test(`${name} should allow for obscure valid symbols`, () => {
        assert.ok(validator('ᚢᚫᚱ'));
    });

    test(`${name} should allow for weird symbols`, () => {
        assert.ok(validator('$'));
        assert.ok(validator('_'));
        assert.ok(validator('a$'));
        assert.ok(validator('a_'));
        // assert.ok(validator('a\u200C'));
        // assert.ok(validator('a_\u200D'));
    });

    test(`${name} should fail with reserved words`, () => {
        // keywords
        assert.ok(!validator('break'));
        assert.ok(!validator('do'));
        assert.ok(!validator('in'));
        assert.ok(!validator('typeof'));
        assert.ok(!validator('case'));
        assert.ok(!validator('else'));
        assert.ok(!validator('instanceof'));
        assert.ok(!validator('var'));
        assert.ok(!validator('catch'));
        assert.ok(!validator('export'));
        assert.ok(!validator('new'));
        assert.ok(!validator('void'));
        assert.ok(!validator('class'));
        assert.ok(!validator('extends'));
        assert.ok(!validator('return'));
        assert.ok(!validator('while'));
        assert.ok(!validator('const'));
        assert.ok(!validator('finally'));
        assert.ok(!validator('super'));
        assert.ok(!validator('with'));
        assert.ok(!validator('continue'));
        assert.ok(!validator('for'));
        assert.ok(!validator('switch'));
        assert.ok(!validator('yield'));
        assert.ok(!validator('debugger'));
        assert.ok(!validator('function'));
        assert.ok(!validator('this'));
        assert.ok(!validator('default'));
        assert.ok(!validator('if'));
        assert.ok(!validator('throw'));
        assert.ok(!validator('delete'));
        assert.ok(!validator('import'));
        assert.ok(!validator('try'));
        assert.ok(!validator('implements'));
        assert.ok(!validator('package'));
        assert.ok(!validator('protected'));
        assert.ok(!validator('interface'));
        assert.ok(!validator('private'));
        assert.ok(!validator('public'));

        // literals
        assert.ok(!validator('null'));
        assert.ok(!validator('true'));
        assert.ok(!validator('false'));
    });

    test(`${name} should allow reserved words as part of a name`, () => {
        assert.ok(validator('var1'));
    });

    test(`${name} should allow old-style unicode escapes`, () => {
        assert.ok(validator('a\u0041'));
        assert.ok(validator('\u0041a'));
    });

};

testGroup(isValidESIdentifier, 'es2015 strict');


test('should fail using es2015 reserved words', () => {
    assert.ok(!isValidESIdentifier('enum'));
    assert.ok(!isValidESIdentifier('await'));
});

test('should allow es2015-style unicode escapes', () => {
    assert.ok(isValidESIdentifier('a\u{41}'));
    assert.ok(isValidESIdentifier('\u{41}a'));
});

test('should fail using strict-mode reserved words', () => {
    assert.ok(!isValidESIdentifier('arguments'));
    assert.ok(!isValidESIdentifier('eval'));
});

test('should not support some characters in ES6', () => {
    assert.ok(!isValidESIdentifier('\u2E2F'));
});

var content = '$';
for(let i = 0; i < 10; i++) {
    content += Math.floor(Math.random() * 9).toString();
}

test('should perform ok', () => {
    for(let i = 0; i < 1000000; i++) {
        assert.ok(isValidESIdentifier(content));
    }
});

var shortContent = '$';
for(let i = 0; i < 4; i++) {
    shortContent += String.fromCharCode(
        0x41 + Math.floor(Math.random() * 9).toString());
}

test('should perform ok with short variables', () => {
    for(let i = 0; i < 1000000; i++) {
        assert.ok(isValidESIdentifier(shortContent));
    }
});


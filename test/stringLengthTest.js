const functionClass = require('../functions');
const assert = require('assert');

describe('functions', function () {
    describe('#getStringLength()', function () {
        it('getStringLength Correct cadena', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.getStringLength('cadena'), 6);
        });
    });

    describe('#getStringLength()', function () {
        it('getStringLength Empty String', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.getStringLength(''), 0);
        });
    });

    describe('#getStringLength()', function () {
        it('getStringLength String numbers', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.getStringLength('123456'), 6);
        });
    });

    describe('#getStringLength()', function () {
        it('getStringLength no parameters', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.getStringLength(), undefined);
        });
    });

    describe('#getStringLength()', function () {
        it('getStringLength numbers', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.getStringLength(123), undefined);
        });
    });


    describe('#getStringLength()', function () {
        it('getStringLength two parameters', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.getStringLength('cadena', 'cadena'), 6);
        });
    });
});

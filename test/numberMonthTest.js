const functionClass = require('../functions');
const assert = require('assert');

describe('functions', function () {
    describe('#numberMonth()', function () {
        it('numberMonth Correct 1 Domingo', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.numberMonth(1), 'DOMINGO');
        });
    });

    describe('#numberMonth()', function () {
        it('numberMonth 2 Lunes', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.numberMonth(2), 'LUNES');
        });
    });

    describe('#numberMonth()', function () {
        it('numberMonth 8 Domingo', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.numberMonth(8), 'DOMINGO');
        });
    });

    describe('#numberMonth()', function () {
        it('numberMonth 0 undefined', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.numberMonth(0), undefined);
        });
    });

    describe('#numberMonth()', function () {
        it('numberMonth Negative Domingo', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.numberMonth(-1), 'DOMINGO');
        });
    });


    describe('#numberMonth()', function () {
        it('numberMonth String undefined', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.numberMonth('cadena'), undefined);
        });
    });
});

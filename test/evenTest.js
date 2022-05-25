const functionClass = require('../functions');
const assert = require('assert');

describe('functions', function () {
    describe('#isEven()', function () {
        it('isEven Correct 2', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.isEven(2), 'SI');
        });
    });

    describe('#isEven()', function () {
        it('isEven None 1', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.isEven(1), 'NO');
        });
    });

    describe('#isEven()', function () {
        it('isEven None Empty String', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.isEven(''), 'NO');
        });
    });

    describe('#isEven()', function () {
        it('isEven None String', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.isEven('asd'), 'NO');
        });
    });

    describe('#isEven()', function () {
        it('isEven None Negative Non', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.isEven(-1), 'NO');
        });
    });


    describe('#isEven()', function () {
        it('isEven None Negative Even', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.isEven(-2), 'SI');
        });
    });
});

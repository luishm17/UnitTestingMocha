const functionClass = require('../functions');
const assert = require('assert');

describe('functions', function () {
    describe('#isArrayEven()', function () {
        it('isArrayEven Correct [2,4,6,8,10]', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.isArrayEven([2,4,6,8,10]), 'SI');
        });
    });

    describe('#isArrayEven()', function () {
        it('isArrayEven None 1', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.isArrayEven([2,4,6,8,11]), 'NO');
        });
    });

    describe('#isArrayEven()', function () {
        it('isArrayEven None Empty String', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.isArrayEven([]), 'NO');
        });
    });

    describe('#isArrayEven()', function () {
        it('isArrayEven many non', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.isArrayEven([2,4,6,8,1,1,1,1,1]), 'NO');
        });
    });

    describe('#isArrayEven()', function () {
        it('isArrayEven None Negative Non', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.isArrayEven([2,4,6,8,-1,-1,1,1,1]), 'NO');
        });
    });


    describe('#isArrayEven()', function () {
        it('isArrayEven None Negative Even', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.isArrayEven([2,4,6,8,-10,-12]), 'SI');
        });
    });
});

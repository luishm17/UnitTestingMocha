const functionClass = require('../functions');
const assert = require('assert');

describe('functions', function () {

    describe('#sortArray()', function () {
        it('sortArray Correct Array', function () {
            let testingClass = new functionClass();
            let arrayUnsorted = [1,5,2,10,2];
            let arraySorted = [1,2,2,5,10];

            assert.deepEqual(testingClass.sortArray(arrayUnsorted), arraySorted);
        });
    });

    describe('#sortArray()', function () {
        it('sortArray Negative Numbers', function () {
            let testingClass = new functionClass();
            let arrayUnsorted = [1,5,2,10,2,-1,-10];
            let arraySorted = [-10,-1,1,2,2,5,10];
        
            assert.deepEqual(testingClass.sortArray(arrayUnsorted), arraySorted);
        });
    });

    describe('#sortArray()', function () {
        it('sortArray No Parameters', function () {
            let testingClass = new functionClass();        
            assert.deepEqual(testingClass.sortArray(), undefined);
        });
    });

    describe('#sortArray()', function () {
        it('sortArray Empty Array', function () {
            let testingClass = new functionClass();
            let arrayUnsorted = [];
            let arraySorted = [];

            let arrayResult = testingClass.sortArray(arrayUnsorted);
        
            assert.deepEqual(testingClass.sortArray(arrayUnsorted), arraySorted);
        });
    });

    describe('#sortArray()', function () {
        it('sortArray Strings No Sort', function () {
            let testingClass = new functionClass();
            let arrayUnsorted = ['C','A','F'];
            let arraySorted = ['C','A','F'];

            let arrayResult = testingClass.sortArray(arrayUnsorted);
        
            assert.deepEqual(testingClass.sortArray(arrayUnsorted), arraySorted);
        });
    });

    describe('#sortArray()', function () {
        it('sortArray Already Sorted No Change', function () {
            let testingClass = new functionClass();
            let arrayUnsorted = [1,2,3,4];
            let arraySorted = [1,2,3,4];
        
            assert.deepEqual(testingClass.sortArray(arrayUnsorted), arraySorted);
        });
    });
    
});

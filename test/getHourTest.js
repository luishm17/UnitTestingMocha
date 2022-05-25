const functionClass = require('../functions');
const assert = require('assert');

describe('functions', function () {
    describe('#getHour()', function () {
        it('getHour Correct 2', function () {
            let testingClass = new functionClass();
            let hour = testingClass.getHour();
            assert.equal(Number.isInteger(hour), true);
        });
    });

    describe('#getHour()', function () {
        it('getHour Correct 2', function () {
            let testingClass = new functionClass();
            dateTime = new Date();
            let hour = dateTime.getHours();
        
            assert.equal(testingClass.getHour(dateTime), hour);
        });
    });

    describe('#getHour()', function () {
        it('getHour Correct 2', function () {
            let testingClass = new functionClass();
            dateTime = new Date();
            dateTime.setHours(10);
        
            assert.equal(testingClass.getHour(dateTime), 10);
        });
    });

    describe('#getHour()', function () {
        it('getHour Correct 2', function () {
            let testingClass = new functionClass();
            dateTime = new Date();
            dateTime.setHours(20);
        
            assert.equal(testingClass.getHour(dateTime), 20);
        });
    });
    
});

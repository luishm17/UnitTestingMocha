const functionClass = require('../functions');
const assert = require('assert');

describe('functions', function () {
    describe('#upperCase()', function () {
        it('upperCase Only Letters', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.upperCase('abc'), 'ABC');
        });
    });

    describe('#upperCase()', function () {
        it('upperCase Letters and Numbers', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.upperCase('abc1234'), 'ABC1234');
        });
    });

    describe('#upperCase()', function () {
        it('upperCase Empty String', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.upperCase(''), '');
        });
    });

    describe('#upperCase()', function () {
        it('upperCase no Parameters', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.upperCase(), undefined);
        });
    });

    describe('#upperCase()', function () {
        it('upperCase Text with Spaces', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.upperCase('Mensaje con espAcios'), 'MENSAJE CON ESPACIOS');
        });
    });

    describe('#upperCase()', function () {
        it('upperCase Only Spaces', function () {
            let testingClass = new functionClass();
            assert.equal(testingClass.upperCase('  '), '  ');
        });
    });

    
});

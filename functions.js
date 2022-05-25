class FunctionClass {

    isEven(number) {

        if (!Number.isInteger(number)) {
            return 'NO'
        }

        if (number % 2 === 0) {
            return 'SI';
        }

        return 'NO'
    }

    isArrayEven(numberArray) {

        if(numberArray.length <= 0){
            return 'NO';
        }

        const result = numberArray.filter(num => num % 2 === 1);

        if (result.length <= 0) {
            return 'SI';
        } else {
            return 'NO';
        }

    }

    getStringLength(string) {

        if (string == undefined) {
            return undefined;
        }

        return string.length;
    }

    numberMonth(dayNumber) {
        const dayArray = ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];

        if (!Number.isInteger(dayNumber)) {
            return undefined;
        }

        dayNumber = Math.abs(dayNumber);

        return dayArray[(dayNumber - 1) % 7];
    }

    getHour(dateTime) {

        if(dateTime == undefined){
            dateTime = new Date();
        }
        
        return dateTime.getHours();
    }

    sortArray(numArray) {
        if(numArray == undefined){
            return undefined;
        }

        return numArray.sort((a, b) => a - b);
    }

    upperCase(stringLowerCase) {

        if(stringLowerCase == undefined){
            return undefined;
        }

        return stringLowerCase.toUpperCase();
    }

}

module.exports = FunctionClass;
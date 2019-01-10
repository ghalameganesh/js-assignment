// Reference https://tc39.github.io/ecma262/#sec-array.prototype.foreach
if (!Array.prototype.myForEach) {
    // callback is a function to execute on each iteration of array
    // this has input array on which myForEach is called
    Array.prototype.myForEach = function (callback) {
        let T;
        // Check array is null throw error before proceeding
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }

        let O = Object(this);
        // Initializing length Because of length calculation any addition while looping will be ignore
        let len = O.length;

        // Checkinng callback is function, throw a TypeError exception. 
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        // If context was supplied, let T be context; else let
        // T be undefined.
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // Using for loop iterate for each key in array and callback
        // for (i = 0; i < len; i++) {
        //     const keyValue = O[i];
        //     callback.call(T, keyValue, i, O);
        // }

        // Below Solution using while loop
        let k = 0;
        while (k < len) {
            let kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}

class TestMyForEach {
    testMyForEach() {
        [10, 20, 30].myForEach(function (value, index, arr) {
            console.log(`In callback function for value:${value}, index:${index}, array:${arr}`);
            document.write(`<br>In callback function for value:${value}, index:${index}, array:${arr}`);
        });
    }

    testAddingElementWhileLooping() {
        [10, 20, 30].myForEach((value, index, arr) => {
            if (value === 10) {
                // Pushing the 50 to array this will not be iterated as we calculate length before looping
                arr.push(50);
            }
            console.log(`Testing element addition while looping value:${value}, index:${index}, array:${arr}`);
            document.write(`<br>Testing element addition while looping value:${value}, index:${index}, array:${arr}`);
        });
    }

    testChangingArrElementValueBeforeIterating() {
        [10, 20, 30].myForEach(function (value, index, arr) {
            if (value === 10) {
                // Chaning element at index 2 before reaching to index will reflect in o/p
                arr[2] = 50;
            }
            console.log(`Chaning element before looping value:${value}, index:${index}, array:${arr}`);
            document.write(`<br>Chaning element before looping value:${value}, index:${index}, array:${arr}`);
        });
    }
}

export default TestMyForEach;
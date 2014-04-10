
function testFunction(arg1, arg2) {
    'use strict';

    var test = {
        one: 1,
        two: 2
    };

    var i = null;
    var arg2Length = arg2.length;
    var item = null;
    for (i = 0; i < arg2Length; i += 1) {
        item = arg2[i];
        test.three = item;
    }

    return document.someMethod(arg1, arg2, test);
}

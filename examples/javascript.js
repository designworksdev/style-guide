
function testFunction(arg1, arg2) {
    'use strict';

    var i    = null;
    var il   = null;
    var item = null;

    var test = {
        one  : 1,
        two  : 2
    };

    for (i = 0, il = arg2.length; i < il; i += 1) {
        item = arg2[i];
        console.log(item);
    }

    return document.someMethod(arg1, arg2, test);
}

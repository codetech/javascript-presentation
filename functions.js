/*
 * Literal
 */

var add = function (a, b) {
    return a + b;
};


/*
 * Invocation
 */

var sum = add(3, 4); // sum is 7


/*
 * Apply
 */

var array = [3, 4];
var sum = add.apply(null, array); // sum is 7


/*
 * Arguments
 */

var sum = function ( ) {
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};

sum(4, 8, 15, 16, 23, 42) // 108


/*
 * Recursion
 */

var hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        console.log('Move disc ' + disc +
                    ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
};
hanoi(3, 'Src', 'Aux', 'Dst');

// Output:

// Move disc 1 from Src to Dst
// Move disc 2 from Src to Aux
// Move disc 1 from Dst to Aux
// Move disc 3 from Src to Dst
// Move disc 1 from Aux to Src
// Move disc 2 from Aux to Dst
// Move disc 1 from Src to Dst


/*
 * Scope
 */

var foo = function ( ) {
    var a = 3;
    var b = 5;
    var bar = function ( ) {
        var b = 7;
        var c = 11;
        // At this point, a is 3, b is 7, and c is 11
        a += b + c;
        // At this point, a is 21, b is 7, and c is 11
    };
    // At this point, a is 3, b is 5, and c is not defined
    bar();
    // At this point, a is 21, b is 5
};


/*
 * Closure
 */

var myObject = function ( ) {
    var value = 0;
    return {
        increment: function (inc) {
            value += inc;
        },
        getValue: function ( ) {
            return value;
        }
    };
}();


var quo = function (status) {
    return {
        get_status: function ( ) {
            return status;
        }
    };
};

// Make an instance of quo.
var myQuo = quo("amazed");
myQuo.get_status() // => "amazed"


var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};
fade(document.body);


/*
 * Modules
 */

var serial_maker = function () {
    // Produce an object that produces unique strings. A
    // unique string is made up of two parts: a prefix
    // and a sequence number. The object comes with
    // methods for setting the prefix and sequence
    // number, and a gensym method that produces unique
    // strings.
    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p);
        },
        set_seq: function (s) {
            seq = s;
        },
        gensym: function () {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};
var seqer = serial_maker();
seqer.set_prefix = ('Q');
seqer.set_seq = (1000);
var unique = seqer.gensym(); // unique is "Q1000"


/*
 * Memoization
 */

var fibonacci = function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
for (var i = 0; i <= 10; i += 1) {
    console.log('// ' + i + ': ' + fibonacci(i));
}
// 0: 0
// 1: 1
// 2: 1
// 3: 2
// 4: 3
// 5: 5
// 6: 8
// 7: 13
// 8: 21
// 9: 34
// 10: 55

// fibonacci is called 453 times

var fibonacci = function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}();

// fibonacci is called 29 times

var memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };
    return shell;
};

var fibonacci = memoizer([0, 1], function (shell, n) {
    return shell(n - 1) + shell(n - 2);
});

var factorial = memoizer([1, 1], function (shell, n) {
    return n * shell(n - 1);
});

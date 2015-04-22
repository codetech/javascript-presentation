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

var sum = function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i += 1) {
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

var foo = function () {
    var a = 3;
    var b = 5;
    var bar = function () {
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

var myObject = function () {
    var value = 0;
    return {
        increment: function (inc) {
            value += inc;
        },
        getValue: function () {
            return value;
        }
    };
}();


var getAdder = function (addee) {
    return function (number) {
        return number + addee;
    };
};

var oneAdder = getAdder(1);
oneAdder(2) // 3
oneAdder(3) // 4

var twoAdder = getAdder(2);
twoAdder(2) // 4
twoAdder(3) // 5


/*
 * Modules
 */

var bankMaker = function (password) {
    var balance = 0;
    var deposit = function (amount) {
        balance += Math.abs(amount);
    };
    var withdraw = function (amount, inputPassword) {
        if (inputPassword === password) {
            balance -= Math.abs(amount);
        }
    };
    var getBalance = function () {
        return balance;
    };
    return {
        deposit: deposit,
        withdraw: withdraw,
        getBalance: getBalance
    };
};

var password = 'incorrect weasel charger unstapler';
var bank = bankMaker(password);
bank.deposit(100);
bank.getBalance() // 100
bank.withdraw(50, 'password123');
bank.getBalance() // 100
bank.withdraw(50, password);
bank.getBalance() // 50


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

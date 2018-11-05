class Calculator {

    sum(x, y) {
        return x + y;
    };

    minus(x, y) {
        return x - y;
    };

    multiple (x, y) {
        return x * y;
    };

    div (x, y) {
        return x / y;
    };

    pow (x) {
        return x * x;
    };
}

module.exports = Calculator;
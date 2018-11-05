const expect = require('chai').expect;
const calculator = require('../calculator');

describe('calculate', () => {
    it('should return sum equals 10', function () {

        //given
        let x = 2;
        let y = 8;

        //when
        let result = calculator.sum(x, y);

        //then
        expect(result).to.be.equal(10);
    });

    it('should return minus equals -2', () => {
        //given
        let x = 8;
        let y = 10;

        //when
        let result = calculator.minus(x, y);

        //then
        expect(result).to.be.equal(-2);
    });

    it('should return 40', () => {
        //given
        let x = 5;
        let y = 8;

        //when
        let result = calculator.multiple(x, y);

        //then
        expect(result).to.be.equal(40);
    });

    it('should return 9', () => {
        //given
        let x = 63;
        let y = 7;

        //when
        let result = calculator.div(x, y);

        //then
        expect(result).to.be.equal(9);
    });

    it('should return 25', () => {
        //given
        let x = 5;

        //when
        let result = calculator.pow(x);

        //then
        expect(result).to.be.equal(25);
    });
});
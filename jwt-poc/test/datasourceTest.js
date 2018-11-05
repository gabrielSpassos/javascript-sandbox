const expect = require('chai').expect;
const assert = require('chai').assert;
const datasource = require('../dao/datasource');

describe('isUserRegister', () => {
    it('should return true', function () {

        //given
        let login = 'Gabriel';
        let password = '123';

        //when
        console.log(datasource);
        let result = datasource.isUserRegistered(login, password);

        //then
        assert.isTrue(result)
    });
});
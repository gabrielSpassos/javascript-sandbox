const expect = require('chai').expect;
const assert = require('chai').assert;
const Datasource = require('../dao/datasource.js');

describe('isUserRegister', () => {
    // before
    const dao = new Datasource();

    it('should return true', async () => {
        //given
        let login = 'gabriel@gmail.com';
        let password = '123';

        //when
        const result = await dao.isUserRegistered(login, password);

        //then
        assert.isTrue(result)
    });

    it('should return false', async () => {
        //given
        let login = 'Nicolas';
        let password = '895';

        //when
        const result = await dao.isUserRegistered(login, password);

        //then
        assert.isFalse(result)
    });

    it('should return id 1', async () => {
        //given
        let login = 'gabriel@gmail.com';
        let password = '123';

        //when
        const result = await dao.getUserIdByLoginAndPassword(login, password);

        //then
        expect(result).to.be.equal(1);
    });

});
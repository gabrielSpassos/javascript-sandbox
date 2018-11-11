const q = require('q');

const database = [
    {
        id: 1,
        login: "gabriel@gmail.com",
        password: "123",
		cpf: "000.000.000-00",
		age: 21,
		name: "Gabriel",
		description: "Nice Guy"
    },
    {
        id: 2,
        login: "rafael@gmail.com",
        password: "456",
		cpf: "000.000.000-00",
		age: 60,
		name: "Rafael",
		description: "Bad Guy"
    }
];

class Datasource {

    isUserRegistered(login, password) {
        const deferred = q.defer();
        let isRegistered = false;

        database.forEach((user) => {
            if(user.login === login && user.password === password) {
                isRegistered = true;
                return isRegistered;
            }
        });
        deferred.resolve(isRegistered);
        return deferred.promise;
    };

    getUserIdByLoginAndPassword(login, password) {
        const deferred = q.defer();

        database.forEach((user) => {
            if(user.login === login && user.password === password) {
                deferred.resolve(user.id);
                return user.id;
            }
        });
        return deferred.promise;
    };

    getUserById(id) {
        const deferred = q.defer();

        database.forEach((user) => {
            if(user.id === id) {
                deferred.resolve(user);
                return user;
            }
        });

        return deferred.promise;
    };
}

module.exports = Datasource;






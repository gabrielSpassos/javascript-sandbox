const q = require('q');

module.exports = function() {

    const database = [
        {
            id: 1,
            login: "Gabriel",
            password: "123"
        },
        {
            id: 2,
            login: "Rafael",
            password: "456"
        }
    ];

    this.getUserIdByLoginAndPassword = function(login, password) {
        const deferred = q.defer();

        database.forEach((user) => {
            if(user.login === login && user.password === password) {
                deferred.resolve(user.id);
                return user.id;
            }
        });
        return deferred.promise;
    };

    return this;
};





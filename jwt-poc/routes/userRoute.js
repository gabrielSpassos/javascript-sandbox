const Datasource = require('../dao/datasource.js');

module.exports = function (app) {

    app.get('/users', (req, res) => {
        const tokenService = app.security.tokenService;
        const datasource = new Datasource();

        tokenService.verifyToken(req, res)
            .then((userId) => {
                return datasource.getUserById(userId);
            }).then((user) => {
                return res.status(200).send(user);
            })
    });
};
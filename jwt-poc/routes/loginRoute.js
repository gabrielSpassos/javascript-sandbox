const jwt = require('jsonwebtoken');

module.exports = function (app) {

    app.get('/login', (req, res) => {
       const datasource = app.dao.datasource;

        const login = req.query.login;
        const pass = req.query.pass;

        datasource.getUserIdByLoginAndPassword(login, pass)
            .then((userId) => {
                console.log('ID', userId);
                res.render('login', {
                    userId: userId
                });
            });
    });

    app.post('/login', (req, res) => {
        const datasource = app.dao.datasource;

        const login = req.body.login;
        const pass = req.body.pass;

        datasource.isUserRegistered(login, pass)
            .then((isRegistred) => {
                console.log('Result', isRegistred);
                if(isRegistred) {
                    datasource.getUserIdByLoginAndPassword(login, pass)
                        .then((userId) => {
                            let token = jwt.sign({userId}, process.env.SECRET, {
                                expiresIn: 300
                            });
                            console.log('ID', userId);
                            res.status(200).send(
                                {auth: true, token: token}
                            );
                        });
                } else {
                    res.status(500).send({auth: false, message: "Login Inválido"});
                }
            });
    });
};
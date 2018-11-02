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
};
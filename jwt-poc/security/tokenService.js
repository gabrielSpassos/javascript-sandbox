const jwt = require('jsonwebtoken');
const q = require('q');

module.exports = function() {

    this.verifyToken = (req, res) => {
        const deferred = q.defer();
        let token = req.headers['x-access-token'];

        if(!token) {
            deferred.resolve(res);
            return res.status(401).send({auth: false, message: "Não foi informado token de acesso"});
        }

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err) {
                console.log('erro', err);
                deferred.resolve(res);
                return res.status(500).send({auth: false, message: "Falha ao autenticar token"})
            }
            deferred.resolve(decoded.userId);
            return decoded.userId;
        });

        return deferred.promise;

    };

    return this;
};
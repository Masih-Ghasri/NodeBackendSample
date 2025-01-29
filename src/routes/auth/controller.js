const controllers = require('./../controller');

module.exports = new (class extends controllers {
    async register(req, res){
        res.send('register');
    }

    async login(req, res){
        res.send('login');
    }
})();
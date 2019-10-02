const Usuario = require('../models/Usuario');

module.exports = {
    async store(req, res) {
        const { email } = req.body;
        const usuario = await Usuario.create({ email });
        return res.json(usuario);
    }
};
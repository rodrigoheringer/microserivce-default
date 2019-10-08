const package = require('../../package');
const router = require('express').Router();
const asyncHolder = require('../util/error-handler').asyncHolder;

router.get('/', asyncHolder(async (req, res) => {
    const { version, name, description } = package;
    res.json({
        version, name, description
    });
}));

module.exports = router;
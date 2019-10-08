const Router = require('express').Router;
const asyncHolder = require('../util/error-handler').asyncHolder;

function createDefaultApi({ package }) {
    const router = Router();
    router.get('/', asyncHolder(async (req, res) => {
        const { version, name, description } = package;
        res.json({
            version, name, description
        });
    }));
    return router;    
}

module.exports = { createDefaultApi };

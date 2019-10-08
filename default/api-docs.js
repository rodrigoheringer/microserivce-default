const package = require('../../package.json');
const { name, version, description } = package;
module.exports = (server) => {
    const expressSwagger = require('express-swagger-generator')(server);
    let options = {
        swaggerDefinition: {
            info: {
                description,
                title: name,
                version
            },
            basePath: `/${name}/v${package.version.split('.')[0]}`,
            produces: [
                "application/json"
            ],
            schemes: ['http']
        },
        basedir: __dirname, //app absolute path
        files: ['../api/**/route.js'] //Path to the API handle folder
    };
    expressSwagger(options);
};
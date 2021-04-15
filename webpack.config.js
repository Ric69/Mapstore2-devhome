const path = require("path");

const themeEntries = require('./MapStore2/build/themes.js').themeEntries;
const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;
const ModuleFederationPlugin = require('./MapStore2/build/moduleFederation').plugin;

module.exports = require('./MapStore2/build/buildConfig')(
    {
        'devcnr': path.join(__dirname, "js", "app"),
        'devcnr-embedded': path.join(__dirname, "js", "embedded"),
        'devcnr-api': path.join(__dirname, "MapStore2", "web", "client", "product", "api"),
        'geostory-embedded': path.join(__dirname, "js", "geostoryEmbedded"),
        "dashboard-embedded": path.join(__dirname, "js", "dashboardEmbedded")
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    [extractThemesPlugin, ModuleFederationPlugin],
    false,
    "dist/",
    '.devcnr',
    [],
    {
        "@mapstore": path.resolve(__dirname, "MapStore2", "web", "client"),
        "@js": path.resolve(__dirname, "js")
    }, {
        '/rest/geostore': {
            target: 'http://localhost:8080/dev-home',
            secure: false,
            headers: {
                host: '127.0.0.1:8080',
            },
        },
        '/pdf': {
            target: 'http://localhost:8080/geoserver',
            secure: false,
            headers: {
                host: '127.0.0.1:8080',
            },
        },
        '/mapstore/pdf': {
            target: 'http://localhost:8080/geoserver',
            secure: false,
            headers: {
                host: '127.0.0.1:8080',
            },
        },
        '/proxy': {
            target: 'http://localhost:8080/dev-home',
            secure: false,
            headers: {
                host: '127.0.0.1:8080',
            },
        },
        '/docs': {
            target: 'http://localhost:8081',
            pathRewrite: { '/docs': '/mapstore/docs' },
        },
    }
);

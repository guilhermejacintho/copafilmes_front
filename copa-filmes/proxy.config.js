const proxy = [
    {
        context: '/api/filmes/',
        target: 'http://copafilmes.azurewebsites.net/',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
    },
    {
        context: '/api/copa/',
        target: 'http://localhost:5000/',
        secure: false,
        logLevel: 'debug'
    }
];

module.exports = proxy;
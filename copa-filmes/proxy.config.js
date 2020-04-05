const proxy = [
    {
        context: '/api',
        target: 'http://copafilmes.azurewebsites.net/',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug'
    }
];

module.exports = proxy;
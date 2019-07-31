const factorConfig = require('./src/configs/12-factor-config');
console.log('+++++++++',factorConfig.desiredPort);

function initialize() {
    const ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
    const app = require('./src/app');
    const port = parseInt(factorConfig.desiredPort, 10);
    app.listen(port, ip);
    console.log('nodejs server running on http://%s:%s', ip, port);
}

initialize();

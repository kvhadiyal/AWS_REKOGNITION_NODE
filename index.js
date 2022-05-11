const http = require('http');
require('dotenv').config();
const port = +(process.env.PORT) || 8100;
const server = http.createServer(port);
const awsUtils = require('./aws-utils');
server.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
    awsUtils.runLabelDetectionAndGetResults();
});







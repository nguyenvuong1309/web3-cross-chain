const path = require('path');
const rootPath = path.resolve(__dirname, '../..');
global.rootRequire = (name) => require(`${rootPath}/examples-web/${name}`);

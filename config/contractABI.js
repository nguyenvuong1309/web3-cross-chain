const path = require('path');
console.log('🚀 ~ contractABI:', __dirname);
const buildPath = path.resolve(
    __dirname,
    '../examples-web/artifacts/contracts/sendMessageSameChain/sendMessageSameChain.sol',
    `${'SingleChainMessage'}.json`,
);
export default buildPath;

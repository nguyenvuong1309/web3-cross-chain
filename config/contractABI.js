const path = require("path");
const buildPath = path.resolve(
  __dirname,
  "../examples-web/artifacts/contracts/sendMessageSameChain/sendMessageSameChain.sol",
  `${"SingleChainMessage"}.json`
);
export default buildPath;

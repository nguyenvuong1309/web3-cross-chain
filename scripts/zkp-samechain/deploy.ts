import { deploy_tokenA_2_fantom } from "./depoy_tokenA_2_fantom";
import { deploy_tokenB_2_fantom } from "./depoy_tokenB_2_fantom";
import { deploy_tokenBridge_2_fantom } from "./depoy_tokenBridge_2_fantom";
import { deploy_bridge } from "./deploy_bridge";



async function  main(){
    await deploy_tokenA_2_fantom();
    await deploy_tokenB_2_fantom();
    await deploy_tokenBridge_2_fantom();
    await deploy_bridge();
}

main();
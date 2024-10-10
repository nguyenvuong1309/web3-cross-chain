import { deploy_tokenA_2_fantom } from "./deploy_tokenA_2_fantom";
import { deploy_tokenB_2_moonbeam } from "./deploy_tokenB_2_moonbeam";
import { deploy_bridgeA_2_fantom,deploy_bridgeA_2_kava } from "./deploy_bridgeA";
import { deploy_bridgeB_2_kava,deploy_bridgeB_2_moonbeam } from "./deploy_bridgeB";
import { deploy_storage_2_kava } from "./deploy_storage_2_kava";

export async function deploy_all_contracts(){
    await deploy_tokenA_2_fantom();
    await deploy_tokenB_2_moonbeam();

    await deploy_bridgeA_2_fantom();
    await deploy_bridgeA_2_kava();

    await deploy_storage_2_kava();

    await deploy_bridgeB_2_kava();
    await deploy_bridgeB_2_moonbeam();
}

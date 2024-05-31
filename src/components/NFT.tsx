import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

type Props = {
    nft: any;
};

export default function NFTComponent({ nft }: Props) {


    return (
        <Flex direction={"column"} backgroundColor={"#EEE"} justifyContent={"center"} padding={"2.5"} borderRadius={"6px"} borderColor={"lightgray"} borderWidth={1}>
            <Box borderRadius={"4px"} overflow={"hidden"}>
                <Text>NFT</Text>
            </Box>
            <Text fontSize={"small"} color={"darkgray"}>Token ID #{nft.metadata.id}</Text>
            <Text fontWeight={"bold"}>{nft.metadata.name}</Text>
        </Flex>
    )
};
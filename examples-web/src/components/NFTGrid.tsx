
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import React from "react";
import NFT from "./NFT";
import Link from "next/link";


type Props = {
    isLoading: boolean;
    data: any[] | undefined;
    overrideOnclickBehavior?: (nft: any) => void;
    emptyText?: string;
};

export default function NFTGrid({
    isLoading,
    data,
    overrideOnclickBehavior,
    emptyText = "No NFTs found",
}: Props) {
    return (
        <SimpleGrid columns={4} spacing={6} w={"100%"} padding={2.5} my={5}>
            {isLoading ? (
                [...Array(20)].map((_, index) => (
                    <Skeleton key={index} height={"312px"} width={"100%"} />
                ))
            ) : data && data.length > 0 ? (
                data.map((nft) => 
                    !overrideOnclickBehavior ? (
                      
                        <NFT nft={nft} />
                    ) : (
                        <div
                            key={nft.metadata.id}
                            onClick={() => overrideOnclickBehavior(nft)}
                        >
                            <NFT nft={nft} />
                        </div>
                    ))
            ) : (
                <Text>{emptyText}</Text>
            )}
        </SimpleGrid>
        
    )
};
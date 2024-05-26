import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "components/ThemeToggle";
import { useState } from "react";
import { ethers } from "ethers";
import { Button } from "@chakra-ui/react";
import { truncatedAddress } from "helpers";
import { NFTGlobalContext } from "context/NFTcontext";

export const Navbar = () => {
  const [logo, setLogo] = React.useState("/assets/axelar_logo.svg");
  const [account, setAccount] = useState<string>("");

  const { signer, connectWallet } = NFTGlobalContext();
  const connectMetaMaskWallet = async () => {
    if (signer) {
      const address = await signer.getAddress();
      setAccount(address);
      return;
    }
    await connectWallet();
    const address = await signer.getAddress();
    setAccount(address);
  };

  useEffect(() => {
    const setAddress = async () => {
      if (signer) {
        const address = await signer.getAddress();
        setAccount(address);
      }
    };
    setAddress();
  }, []);

  return (
    <header className="navbar bg-base-200 shadow-sm px-16">
      <Image width={128} height={32} src={logo} alt="axelar" />
      <nav className="menu menu-horizontal ml-4 flex-1">
        <ul>
          <li>
            <Link href="/">
              <a className="text-lg">Examples</a>
            </Link>
          </li>
        </ul>
      </nav>
      <ThemeToggle
        onThemeChange={(theme: string) => {
          if (theme === "business") {
            setLogo("/assets/axelar_logo_white.svg");
          } else {
            setLogo("/assets/axelar_logo.svg");
          }
        }}
      />
      <Button
        onClick={connectMetaMaskWallet}
        width={"150px"}
        height={"50px"}
        backgroundColor={"Highlight"}
      >
        {account ? `${truncatedAddress(account)}` : "Connect to MetaMask"}
      </Button>
    </header>
  );
};

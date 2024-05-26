import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { NFTContractInstanceProvider } from "context/NFTcontext";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <NFTContractInstanceProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NFTContractInstanceProvider>
  );
}

export default MyApp;

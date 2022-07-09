import "../styles/globals.css";
import type { AppProps } from "next/app";
import Modal from "react-modal";
import MainLayout from "../components/layout/MainLayout";

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;

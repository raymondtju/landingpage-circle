import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Brand from "@/components/Brand";
import Section from "@/components/Section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Circle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} pb-10`}>
        <Header />
        <Brand />
        <Section />
      </main>
    </>
  );
}

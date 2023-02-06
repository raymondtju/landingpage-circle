import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-white bg-background">
        <Main />
        <NextScript />
        {/* <Script
          src="./node_modules/flowbite/dist/flowbite.min.js"
          strategy="beforeInteractive"
        ></Script> */}
        {/* <Script
          src="/node_modules/flowbite/dist/flowbite.min.js"
          strategy="beforeInteractive"
        /> */}

        {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></Script> */}
      </body>
    </Html>
  );
}

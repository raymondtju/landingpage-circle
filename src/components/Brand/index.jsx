import React from "react";
import Image from "next/image";

import BrandLogo from "/public/images/brand-logo.png";
import Layout from "@/components/Layout";

export default function Brand() {
  return (
    <Layout>
      <div className="mt-[116px]">
        <div className="lg:w-5/12 md:7/12 mx-auto">
          <h1 className="text-lg text-center">
            {`Providing power to the world's best product teams. From
            next-generation startups to established businesses`}
          </h1>
        </div>
        <Image src={BrandLogo} alt="brand-logo" className="mx-auto mt-[56px]" />
      </div>
    </Layout>
  );
}

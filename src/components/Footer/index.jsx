import React from "react";
import Layout from "../Layout";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-[150px] p-4 sm:p-6 lg:mt-[300px]">
      <Layout>
        <div className="flex justify-end">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
              <ul className="text-textSecond">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Resource</h2>
              <ul className="text-textSecond">
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Forum
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="text-textSecond">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="justify-end mt-16 sm:flex sm:items-center">
          <span className="text-sm sm:text-center">
            © 2023{" "}
            <a href="" className="hover:underline">
              Circle™
            </a>
            . All Rights Reserved. Build by
            <Link
              className="font-bold text-textSecond"
              href={"https://github.com/raymondtju"}
            >
              {" @Ferropayo"}
            </Link>
          </span>
        </div>
      </Layout>
    </footer>
  );
}

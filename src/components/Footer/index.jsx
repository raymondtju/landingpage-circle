import React from "react";
import Layout from "../Layout";

export default function Footer() {
  return (
    <footer className="p-4 sm:p-6 mt-[300px]">
      <Layout>
        <div className="flex justify-end">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
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
        <div className="sm:flex sm:items-center justify-end mt-16">
          <span className="text-sm sm:text-center">
            © 2023{" "}
            <a href="" className="hover:underline">
              Circle™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </Layout>
    </footer>
  );
}

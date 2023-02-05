import React from "react";
import Layout from "../Layout";

export default function Footer() {
  return (
    <footer class="p-4 sm:p-6 mt-[300px]">
      <Layout>
        <div class="flex justify-end">
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase">Company</h2>
              <ul class="text-textSecond">
                <li class="mb-4">
                  <a href="" class="hover:underline">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="" class="hover:underline">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase">Resource</h2>
              <ul class="text-textSecond">
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="" class="hover:underline">
                    Forum
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul class="text-textSecond">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="sm:flex sm:items-center justify-end mt-16">
          <span class="text-sm sm:text-center">
            © 2023{" "}
            <a href="" class="hover:underline">
              Circle™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </Layout>
    </footer>
  );
}

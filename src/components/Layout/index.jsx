import React from "react";

export default function Layout({ children }) {
  return (
    <div className="mx-auto w-[88%] max-w-[1440px]">{children}</div>
    // <div className="max-w-[1440px] m-auto">
    //   <div className="">{children}</div>
    // </div>
  );
}

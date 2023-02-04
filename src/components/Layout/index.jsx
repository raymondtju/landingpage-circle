import React from "react";

export default function Layout({ children }) {
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="mx-[80px]">{children}</div>
    </div>
    // <div className="max-w-[1440px] mx-[80px] justify-center">{children}</div>
  );
}

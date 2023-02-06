import React from "react";

export default function Layout({ children }) {
  return (
    <div className="max-w-[1440px] w-[88%] mx-auto">
      {children}
    </div>
    // <div className="max-w-[1440px] m-auto">
    //   <div className="">{children}</div>
    // </div>
    
  );
}

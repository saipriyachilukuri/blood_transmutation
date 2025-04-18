// src/components/Layout.tsx

import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

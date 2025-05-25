import React, { ReactNode } from "react";
import Navbar from "../components/Frontend/Navbar";
import MegaMenu from "../components/Frontend/MegaMenu";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="bg-white left-0 right-0  py-4 fixed top-20 w-full z-50  border-t border-gray-400/30 ">
        <div className="container mx-auto">
          <MegaMenu />
        </div>
      </div>
      <div className=" mt-[160px]">{children}</div>
    </div>
  );
}

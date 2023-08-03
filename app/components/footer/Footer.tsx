"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  return pathname === "/play" ? null : (
    <footer className="text-white bg-[#22A699] mt-4 sm:mt-8 absolute b-0 w-full">
      <div className="p-4 flex justify-end gap-6">
        <p>©kaji-isaki</p>
        <a href="https://icons8.com">
          <p>Icons by Icons8</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

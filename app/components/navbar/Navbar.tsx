"use client";

import UserMenu from "./UserMenu";
import Logo from "./Logo";
import { LiaCrownSolid } from "react-icons/lia";
import { BsBook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return pathname === "/play" ? null : (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <nav className="px-2 sm:px-6 py-4 border-b-[1px] flex justify-between items-center">
        <Logo />
        <div className="flex flex-row sm:gap-2">
          <UserMenu
            title="ランキング"
            address="/ranking"
            Icon={LiaCrownSolid}
          />
          <UserMenu title="遊び方" address="/rules" Icon={BsBook} />
          <UserMenu
            title="お問い合わせ"
            address="/contact"
            Icon={AiOutlineMail}
          />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

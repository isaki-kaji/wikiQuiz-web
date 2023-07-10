"use client";

import UserMenu from "./UserMenu";
import Logo from "./Logo";
import { LiaCrownSolid } from "react-icons/lia";
import { BsBook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="px-6 py-4 border-b-[1px] flex flex-row justify-between items-center">
        <Logo />
        <div className="flex flex-row gap-2">
          <UserMenu
            title="ランキング"
            address="/ranking"
            Icon={LiaCrownSolid}
          />
          <UserMenu title="遊び方" address="/rule" Icon={BsBook} />
          <UserMenu
            title="お問い合わせ"
            address="/contact"
            Icon={AiOutlineMail}
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;

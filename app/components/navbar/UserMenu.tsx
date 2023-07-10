"use client";
import Link from "next/link";
import { IconType } from "react-icons";

type UserMenuProps = {
  children?: React.ReactNode;
  title: string;
  Icon: IconType;
  address: string;
};

const UserMenu: React.FC<UserMenuProps> = ({ title, Icon, address }) => {
  return (
    <Link href={address}>
      <div className="flex flex-row gap-1 items-center px-4 py-1.5 link link-underline link-underline-black">
        <Icon />
        <span className="hidden sm:block">{title}</span>
      </div>
    </Link>
  );
};
export default UserMenu;

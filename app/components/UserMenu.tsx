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
      <div className="group flex flex-row gap-1 items-center px-4 py-2 transition hover:border-b-[1px]">
        <Icon />
        <span>{title}</span>
      </div>
    </Link>
  );
};
export default UserMenu;

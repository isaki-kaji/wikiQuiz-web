"use client";

import { useRouter } from "next/navigation";
import { BiWorld } from "react-icons/bi";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import Link from "next/link";

const Logo: React.FC = () => {
  //   const getDocument = async () => {
  //     const docRef = doc(db, "中日ドラゴンズ", "山井大介");
  //     const docSnap = await getDoc(docRef);
  //     const getObj = docSnap.data() || {};
  //     console.log(getObj.title);
  //   };

  const router = useRouter();
  return (
    <Link href={"/"}>
      <div className="sm:flex sm:flex-row sm:items-center group cursor-pointer">
        <h1 className="sm:hidden hover:opacity-75 mx-1 select-none">Home</h1>
        <BiWorld
          color="#22A699"
          size={"40px"}
          className="hidden sm:block group-hover:opacity-75"
        />
        <h1 className="hidden sm:block text-base sm:text-lg md:text-xl font-semibold group-hover:opacity-75 select-none">
          これ何のWiki ?
        </h1>
      </div>
    </Link>
  );
};

export default Logo;

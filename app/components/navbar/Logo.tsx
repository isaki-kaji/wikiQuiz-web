"use client";

import { useRouter } from "next/navigation";
import { IconContext } from "react-icons";
import { BiWorld } from "react-icons/bi";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "@/app/firebase";

const Logo: React.FC = () => {
  const getDocument = async () => {
    const docRef = doc(db, "中日ドラゴンズ", "山井大介");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data);
  };

  const router = useRouter();
  return (
    <IconContext.Provider value={{ color: "#22A699", size: "40px" }}>
      <div
        className="flex flex-row items-center group cursor-pointer"
        onClick={getDocument}
      >
        <BiWorld className="hidden sm:block group-hover:opacity-75" />
        <h1 className="text-lg md:text-xl font-semibold group-hover:opacity-75">
          これ何のWiki ?
        </h1>
      </div>
    </IconContext.Provider>
  );
};

export default Logo;

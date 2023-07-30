import React, { useEffect, useState } from "react";
import { AiOutlineCrown } from "react-icons/ai";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import StandbyModal from "./StandbyModal";

type CategoryCardProps = {
  category: string;
};

type King = {
  name: string;
  score: number;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [king, setKing] = useState<King>({ name: "", score: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const getDocument = async () => {
    const docRef = doc(db, "King", category);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setKing(docSnap.data() as King);
    }
  };

  useEffect(() => {
    getDocument();
  }, []);

  return (
    <div
      className="w-[90%] flex flex-col border-b border-slate-200 py-2 group cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      <h4 className="text-sm sm:text-lg py-4 select-none">{category}</h4>
      <div className="group-hover:hidden">
        <div className="flex flex-between sm:px-2">
          <AiOutlineCrown className="object-contain font-lg" />
          {/* usernameに文字数制限をつける */}
          <p className="max-sm:text-xs">name: {king.name || "挑戦者求む"}</p>
          <p className="max-sm:text-xs">score: {king.score}</p>
        </div>
      </div>
      <div className="hidden group-hover:flex w-full justify-center bg-[#F2BE22] z-20">
        <h4 className="mx-auto max-sm:text-xs">挑戦する</h4>
      </div>
      <StandbyModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
};

export default CategoryCard;

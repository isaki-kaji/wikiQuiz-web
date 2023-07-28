import React, { useEffect, useState } from "react";
import { AiOutlineCrown } from "react-icons/ai";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";

type CategoryCardProps = {
  category: string;
};

type King = {
  name: string;
  score: number;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  const [king, setKing] = useState<King>({ name: "挑戦者求む", score: 0 });

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
    <div className="w-[90%] flex flex-col border-b border-slate-200 pb-2 group cursor-pointer">
      <h4 className="text-base sm:text-lg py-2 group-hover:text-[#F2BE22] select-none">
        {category}
      </h4>
      <div>
        <div className="flex flex-between px-2">
          <AiOutlineCrown />
          <p>name: {king.name}</p>
          <p>score: {king.score}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

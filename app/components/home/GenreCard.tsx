"use client";
import { GenreCardProps } from "@/app/genre-list";

const CategoryCard: React.FC<GenreCardProps> = ({ title, Icon }) => {
  return (
    <div
      className="border-[1px] rounded-lg cursor-pointer transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30"
      onClick={() => {}}
    >
      <div className="flex flex-col gap-2 h-full justify-center items-center px-2 py-4 sm:px-6 sm:py-16">
        <div className="w-[120px] sm:w-[180px] md:w-[250px] flex justify-center">
          <h2 className="text:xl sm:text-4xl select-none">{title}</h2>
        </div>
        <div>
          <Icon color="#22A699" size={"80px"} />
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;

import { CategoryCardProps } from "@/app/category-list";

const CategoryCard: React.FC<CategoryCardProps> = ({ title, Icon }) => {
  return (
    <div className="w-5/6 h-1/3 sm:h-[250px] sm:w-[250px] border-[1px] rounded-lg cursor-pointer transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
      <div className="flex flex-col gap-2 h-full justify-center items-center">
        <h2 className="text-2xl">{title}</h2>
        <div>
          <Icon color="#22A699" size={"80px"} />
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;

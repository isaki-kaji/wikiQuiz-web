import { categoryList } from "./category-list";
import CategoryCard from "./components/home/CategoryCard";

export default function Home() {
  return (
    <div className="pt-[61px] sm:pt-[73px] h-full px-4">
      <div className="py-4 sm:py-6 flex flex-wrap gap-5 justify-center items-center">
        {categoryList.map((category) => {
          return (
            <div id={category.title}>
              <CategoryCard
                title={category.title}
                Icon={category.Icon}
              ></CategoryCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

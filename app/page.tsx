import { categoryList } from "./category-list";
import CategoryCard from "./components/home/CategoryCard";

export default function Home() {
  return (
    <div className="pt-[61px] sm:pt-[73px] h-full">
      <div className="py-2 sm:py-4 flex sm:grid flex-col gap-2 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:place-content-center">
        {categoryList.map((category) => {
          return (
            <CategoryCard
              title={category.title}
              Icon={category.Icon}
            ></CategoryCard>
          );
        })}
      </div>
    </div>
  );
}

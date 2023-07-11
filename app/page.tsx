import CategoryCard from "./components/home/CategoryCard";
import { CiBaseball } from "react-icons/ci";

export default function Home() {
  return (
    <div className="pt-[61px] sm:pt-[73px]">
      <div className="flex flex-col items-center h-screen py-6">
        <CategoryCard title="プロ野球" Icon={CiBaseball} />
      </div>
    </div>
  );
}

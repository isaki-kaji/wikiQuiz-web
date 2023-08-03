import Hero from "./components/home/Hero";
import GenreCardsBox from "./components/home/GenreCardsBox";

export default function Home() {
  //overflow-hiddenは、要素の外側にはみ出した部分を非表示にする
  return (
    <main className="overflow-hidden">
      <Hero />
      <GenreCardsBox />
    </main>
  );
}

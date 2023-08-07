import { Suspense } from "react";

import QuizTextCard from "../components/play/QuizTextCard";
import Loading from "../Loading";
import InputInterface from "../components/play/InputInterface";

const PlayPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative h-screen bg-gray-100">
        <QuizTextCard />
        <InputInterface />
      </div>
    </Suspense>
  );
};

export default PlayPage;

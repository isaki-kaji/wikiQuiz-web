import { Suspense } from "react";

import QuizTextCard from "../components/play/QuizTextCard";
import Loading from "../Loading";
import AnswerBar from "../components/play/AnswerBar";

const PlayPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative h-screen bg-gray-100">
        <QuizTextCard />
        <AnswerBar />
      </div>
    </Suspense>
  );
};

export default PlayPage;

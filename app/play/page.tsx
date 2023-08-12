import { Suspense } from "react";

import QuizTextCard from "../components/play/QuizTextCard";
import Loading from "../Loading";
import AnswerBar from "../components/play/AnswerBar";
import BackHomeButton from "../components/play/BackHomeButton";
import ScoreText from "../components/play/ScoreText";

const PlayPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="relative h-screen bg-gray-100">
        <BackHomeButton />
        <ScoreText />
        <QuizTextCard />
        <AnswerBar />
      </div>
    </Suspense>
  );
};

export default PlayPage;

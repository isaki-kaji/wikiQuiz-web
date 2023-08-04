import { create } from "zustand";

type QuizStore = {
  quizTexts: string[];
  quizIndex: number;
  quizTextIndex: number;
  setQuizTexts: (quizTexts: string[]) => void;
  incrementQuizIndex: () => void;
  incrementQuizTextIndex: () => void;
};

export const useQuizStore = create<QuizStore>((set) => ({
  quizTexts: [],
  quizIndex: 0,
  quizTextIndex: 0,
  setQuizTexts: (quizTexts) => set({ quizTexts }),
  incrementQuizIndex: () =>
    set((state) => ({ quizIndex: state.quizIndex + 1 })),
  incrementQuizTextIndex: () =>
    set((state) => ({ quizTextIndex: state.quizTextIndex + 1 })),
}));
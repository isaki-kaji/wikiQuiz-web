import { create } from "zustand";

type GivenQuiz = {
  quizTitle: string;
  quizUrl: string;
};

type quizResultStore = {
  quizScore: number;
  givenQuizTitles: GivenQuiz[];
  incrementQuizScore: () => void;
  setGivenQuizTitles: (givenQuizTitles: GivenQuiz[]) => void;
  resetQuizResult: () => void;
};

export const useQuizResultStore = create<quizResultStore>((set) => ({
  quizScore: 0,
  givenQuizTitles: [],
  incrementQuizScore: () =>
    set((state) => ({ quizScore: state.quizScore + 1 })),
  setGivenQuizTitles: (givenQuizTitles) => set({ givenQuizTitles }),
  resetQuizResult: () => set(initialState),
}));

const initialState = {
  quizScore: 0,
  givenQuizTitles: [],
};

import { create } from "zustand";

type QuizInfoStore = {
  genre: string;
  category: string;
  titleList: string[];
  shuffledTitleList: string[];
  setGenre: (genre: string) => void;
  setCategory: (category: string) => void;
  setTitleList: (titleList: string[]) => void;
  setShuffledTitleList: (shuffledTitleList: string[]) => void;
};

export const useQuizInfoStore = create<QuizInfoStore>((set) => ({
  genre: "",
  category: "",
  titleList: [],
  shuffledTitleList: [],
  setGenre: (genre) => set({ genre }),
  setCategory: (category) => set({ category }),
  setTitleList: (titleList) => set({ titleList }),
  setShuffledTitleList: (shuffledTitleList) => set({ shuffledTitleList }),
}));

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

type GivenQuiz = {
  quizTitle: string;
  quizUrl: string;
};

type quizResultStore = {
  quizScore: number;
  givenQuizTitles: GivenQuiz[];
  incrementQuizScore: () => void;
  setGivenQuizTitles: (givenQuizTitles: GivenQuiz[]) => void;
};

export const useQuizResultStore = create<quizResultStore>((set) => ({
  quizScore: 0,
  givenQuizTitles: [],
  incrementQuizScore: () =>
    set((state) => ({ quizScore: state.quizScore + 1 })),
  setGivenQuizTitles: (givenQuizTitles) => set({ givenQuizTitles }),
}));

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

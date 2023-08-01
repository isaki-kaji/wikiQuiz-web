import { create } from "zustand";

type QuizInfoStore = {
  genre: string;
  category: string;
  setGenre: (genre: string) => void;
  setCategory: (category: string) => void;
};

export const useQuizInfoStore = create<QuizInfoStore>((set) => ({
  genre: "",
  category: "",
  setGenre: (genre) => set({ genre }),
  setCategory: (category) => set({ category }),
}));

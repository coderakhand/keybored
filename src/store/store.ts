import { create } from "zustand";

type category = "time" | "words" | "quote" | "custom";
type range = number;

interface textStoreType {
  feedPunctuation: boolean;
  feedNumber: boolean;
  selectedCategory: category;
  selectedRange: range;
  setSelectedCategory: (val: category) => void;
  setSelectedRange: (val: range) => void;
  toggleFeedPunctuation: () => void;
  toggleFeedNumber: () => void;
}

export const useTextStore = create<textStoreType>((set) => ({
  feedPunctuation: false,
  feedNumber: false,
  selectedCategory: "time",
  selectedRange: 15,
  setSelectedCategory: (newSelectedCategory: category) =>
    set({ selectedCategory: newSelectedCategory }),
  setSelectedRange: (newSelectedRange: range) =>
    set({ selectedRange: newSelectedRange }),
  toggleFeedPunctuation: () =>
    set((state) => ({ feedPunctuation: !state.feedPunctuation })),
  toggleFeedNumber: () => set((state) => ({ feedNumber: !state.feedNumber })),
}));
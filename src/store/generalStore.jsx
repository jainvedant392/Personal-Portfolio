import { create } from "zustand";

export const useGeneralStore = create((set) => ({
    activeSection: '',
    setActiveSection: (sectionId) => set({ activeSection: sectionId}),
}));

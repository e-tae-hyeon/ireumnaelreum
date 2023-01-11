import create from "zustand";

type State = {
  isVisible: boolean;
  open: () => void;
  close: () => void;
};

const useAuthStore = create<State>()((set) => ({
  isVisible: false,
  open: () => set((state) => ({ ...state, isVisible: true })),
  close: () => set((state) => ({ ...state, isVisible: false })),
}));

export default useAuthStore;

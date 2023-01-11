import create from "zustand";
import { DialogType } from "components/@base/Dialog";

type State = {
  config: DialogType | null;
  setConfig: (by: DialogType) => void;

  isVisible: boolean;
  openDialog: () => void;
  closeDialog: () => void;
};

const useDialogStore = create<State>()((set) => ({
  config: null,
  setConfig: (by) => set((state) => ({ ...state, config: by })),

  isVisible: false,
  openDialog: () => set((state) => ({ ...state, isVisible: true })),
  closeDialog: () => set((state) => ({ ...state, isVisible: false })),
}));

export default useDialogStore;

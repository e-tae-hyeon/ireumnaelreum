import create from "zustand";

type State = {
  form: {
    title: string;
    body: string;
  };
  changeForm: (by: { name: string; value: string }) => void;
  clearForm: () => void;
};

const useWriteStore = create<State>()((set) => ({
  form: {
    title: "",
    body: "",
  },
  changeForm: (by) =>
    set((state) => ({
      ...state,
      form: { ...state.form, [by.name]: by.value },
    })),
  clearForm: () =>
    set((state) => ({ ...state, form: { title: "", body: "" } })),
}));

export default useWriteStore;

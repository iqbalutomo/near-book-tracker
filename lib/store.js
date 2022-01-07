import create from 'zustand';

const useStore = create((set) => ({
  modal: false,
  setModal: (state) => set(() => ({ modal: state })),
  secondModal: false,
  setSecondModal: (state) => set(() => ({ secondModal: state })),
}));

export default useStore;

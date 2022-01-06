import create from 'zustand';

const useStore = create((set) => ({
  modal: false,
  setModal: (state) => set(() => ({ modal: state })),
}));

export default useStore;

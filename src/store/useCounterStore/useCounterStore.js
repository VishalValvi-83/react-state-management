import { create } from "zustand";

const useCounterStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    reset: () => set({ count: 0 }),
    image: "",
    setImage: (image) => set({ image }),
}));

export const usePersonStore = create((set) => ({
    firstName: '',
    lastName: '',
    updateLastName: (firstName, lastName) => {
        console.log(firstName, lastName)
        set(() => ({ lastName: lastName, firstName: firstName }))
        sessionStorage.setItem('personal info ', JSON.stringify({ firstName, lastName }))
    },
}))

export default useCounterStore;

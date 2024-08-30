import { create } from "zustand";

const authStore = create((set) => ({
  isAuth: false,
  user: {},
  signIn: (user) => {
    set({
      isAuth: true,
      user: { ...user },
    });
  },
  signOut: () => {
    set({
      isAuth: false,
      user: {},
    });
  },
}));

export { authStore };

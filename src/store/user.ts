import { create } from "zustand";

type UserType = {
  name: string;
  email: string;
};

type State = {
  users: UserType[];
  addUser: (user: UserType) => void;
};

const useUserStore = create<State>((set) => ({
  users: [
    {
      name: "Ronald Alves",
      email: "alvesronald@email.com",
    },
  ],
  addUser: (user: UserType) => {
    set((state) => ({ users: [...state.users, user] }));
  },
}));

export default useUserStore;

import { atom } from "recoil"

export const countAtom = atom({
    key: "countAtom",  // must be unique
    default: 0
});
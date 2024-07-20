import { atom,selector } from "recoil"

export const countAtom = atom({
    key: "countAtom",  // must be unique
    default: 0
});

export const evenSelector = selector({
    key: "oddSelector",
    get: ({get}) => {
        // we write the logic that whenever above countAtom changes run the below logic
        const count = get(countAtom);
        return (!count % 2);
    }
});
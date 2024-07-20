import { atom,selector } from "recoil"

export const countAtom = atom({
    key: "countAtom",  // must be unique
    default: 0
});

export const oddSelector = selector({
    key: "oddSelector",
    get: ({get}) => {
        // we write the logic that whenever above countAtom changes run the below logic
        const count = get(countAtom);
        if (count %2 != 0){
            return true
        }
    }
});
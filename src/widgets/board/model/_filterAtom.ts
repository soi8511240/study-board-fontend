import { atom } from 'jotai';
import {listsRequestDTO} from "@/widgets/board";

export const listsFilterAtom = atom<listsRequestDTO>({
    categoryId: "",
    keyword: "",
    fromDt: "",
    toDt: "",
    currentPage: 1
})

export const setFilterAtom = atom(
    null,
    (_get, set, val:listsRequestDTO) =>
        set(listsFilterAtom, {...listsFilterAtom,...val})
)

export const getFilterAtom = atom(
    (get) => get(listsFilterAtom)
)


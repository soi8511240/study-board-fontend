import { atom } from 'jotai';
import {BoardListsFilter} from "@/entities/board";

export const listsFilterAtom = atom<BoardListsFilter>({
    categoryId: "",
    keyword: "",
    fromDt: "",
    toDt: "",
    currentPage: '1'
})

export const setFilterAtom = atom(
    null,
    (_get, set, val:BoardListsFilter) =>
        set(listsFilterAtom, {...listsFilterAtom,...val})
)

export const getFilterAtom = atom(
    (get) => get(listsFilterAtom)
)


'use client'

import React from "react";
import { listsRequestDTO, listsBoardVO, listsResponseVO} from '@/entities/board';
import { ListUi, FilterUi, PagingUi, useListsFetch, useListsFilter } from '@/widgets/board';

export default function Page() {

    const {boardLists, totalCnt} = useListsFetch() as listsResponseVO;
    const {filterValue, handleFilterValueChange, handleSubmit}:{
        filterValue: listsRequestDTO,
        handleSubmit: (obj: listsRequestDTO) => void
        handleFilterValueChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    } = useListsFilter();

    return (
        <>
            <FilterUi
                filter={filterValue}
                handleInputChanger={handleFilterValueChange}
                handleSubmit={handleSubmit}
            />
            <ListUi
                boardLists={boardLists}
                totalCnt={totalCnt}
            />
            <PagingUi
                filter={filterValue}
                handleSubmit={handleSubmit}
                totalCnt={totalCnt}
                boardLists={boardLists as listsBoardVO[]}
            />
        </>
    );
}
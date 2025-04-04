'use client'

import React from 'react';
import { FilterUi } from '@/widgets/board/ui/FilterUi';
import { ListUi } from '@/widgets/board/ui/ListUi';
import { PagingUi } from '@/widgets/board/ui/PagingUi';
import { type BoardListsResponse, type BoardListsFilter } from '@/entities/board';
import {Categories} from "@/entities/codes";
import {useCustomSearchParams} from "@/shared/lib";

type Props = {
    initialData: BoardListsResponse;
    initialFilter: BoardListsFilter;
    categories: Categories[];
};

export function ListsView({ initialData, initialFilter, categories }: Props) {
    const {navigateWithParams} = useCustomSearchParams();

    // filter change event
    const handleFilterChange = (param:BoardListsFilter) => {
        navigateWithParams({
            ...param,
            currentPage: '1'
        })
    }

    // paging click event
    const handlePageChange = (page:number) => {
        navigateWithParams({
            ...initialFilter,
            currentPage: page.toString()
        })
    }

    return (
        <>
            <FilterUi
                filter={initialFilter}
                categories={categories}
                onFilterChange={handleFilterChange}
            />

            <ListUi
                boardLists={initialData.boardLists}
                totalCnt={initialData.totalCnt}
            />

            <PagingUi
                currentPage={initialFilter.currentPage}
                totalCnt={initialData.totalCnt}
                onPageChange={handlePageChange}
            />
        </>
    );
}
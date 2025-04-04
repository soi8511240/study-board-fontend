'use server'

import React, {Suspense} from "react";
import {boardListsApi, type BoardListsFilter} from "@/entities/board";
import {ListsView} from "@/features/board/ListsView";
import {boardCategoryApi} from "@/entities/codes";


interface PageProps {
    searchParams: Promise<BoardListsFilter>;
}

const filterInit:BoardListsFilter = {
    categoryId: '',
    keyword: '',
    fromDt: '',
    toDt: '',
    currentPage: '1'
}

export default async function Page({ searchParams }:PageProps) {
    const resolvedSearchParams = await searchParams;

    const filter  = {
        ...filterInit,
        ...resolvedSearchParams
    }

    const boardLists = await boardListsApi(filter);
    const boardCategories = await boardCategoryApi();

    return (
        <div className="board-page">
            <h1>게시판</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <ListsView
                    initialData={boardLists}
                    initialFilter={filter}
                    categories={boardCategories}
                />
            </Suspense>
        </div>
    );
}
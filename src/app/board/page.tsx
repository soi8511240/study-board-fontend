'use server'

import React, {Suspense} from "react";
import {boardListsApi, type BoardListsFilter} from "@/entities/board";
import {ListsView} from "@/features/board/ListsView";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import {boardCategoryApi} from "@/entities/codes";

const filterInit:BoardListsFilter = {
    categoryId: '',
    keyword: '',
    fromDt: '',
    toDt: '',
    currentPage: '1'
}

interface PageProps {
    searchParams: BoardListsFilter;
}

export default async function Page({ searchParams }:PageProps) {
    // 필터 초기값 설정 중
    const filter = {
        ...filterInit,
        ...await searchParams
    };
    // const filter = Object.assign({}, filterInit, searchParams);

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
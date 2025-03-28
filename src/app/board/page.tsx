'use server'

import React, {Suspense} from "react";
import { FilterUi, ListUi, PagingUi } from '@/widgets/board';
import { boardListsApi, type BoardListsFilter } from "@/entities/board";
import { boardCategoryApi } from "@/entities/codes";
import Loading from "@/app/Loading";

const filterInit:BoardListsFilter = {
    categoryId: '',
    keyword: '',
    fromDt: '',
    toDt: '',
    currentPage: '1'
}

type Props = {
    searchParams: BoardListsFilter
}

export default async function Page({ searchParams }:Props) {
    // 필터 초기값 설정 중
    const param = await searchParams;
    const filter = {
        ...filterInit,
        ...param
    };

    const boardListsPromise = boardListsApi(filter);
    const boardCategoriesPromise = boardCategoryApi();

    return (
        <>
            <Suspense fallback={<Loading />}>
                <FilterUi
                    categoryPromise={boardCategoriesPromise}
                    filterInit={filter}
                />
                <ListUi responsePromise={boardListsPromise}/>
                <PagingUi
                    responsePromise={boardListsPromise}
                    filterInit={filter}
                />
            </Suspense>
        </>
    );
}
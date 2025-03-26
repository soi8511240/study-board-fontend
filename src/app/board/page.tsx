'use server'

import React, {Suspense} from "react";
import { FilterUi, ListUi, PagingUi } from '@/widgets/board';
import { boardListsApi, type BoardListsFilter } from "@/entities/board";

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

    // 보드가져오는 API 호출
    const boardListsPromise = boardListsApi(filter);

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <FilterUi filterInit={filter}/>
                <ListUi responsePromise={boardListsPromise}/>
                <PagingUi
                    responsePromise={boardListsPromise}
                    filterInit={filter}
                />
            </Suspense>
        </>
    );
}
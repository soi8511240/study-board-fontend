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

interface PageProps {
    searchParams: BoardListsFilter;
}

export default async function Page({ searchParams }:PageProps) {
    // 필터 초기값 설정 중
    const filter = {
        ...filterInit,
        ...searchParams
    };

    const boardListsPromise = boardListsApi(filter);
    const boardCategoriesPromise = boardCategoryApi();
    /*
    Todo:
    * */
    // const pagingNeedsData= boardListsPromise.then(res => res.totalCnt);

    return (
        <>
            <Suspense fallback={<Loading />}>
                <FilterUi
                    categoryPromise={boardCategoriesPromise}
                    filterInit={filter}
                />
                <ListUi responsePromise={boardListsPromise}/>
                {/*Todo pagingUi 는 listUI로 이동하며 전체데이터말고 필요한데이터만 찝어서 props로 전달시킴.*/}
                <PagingUi
                    responsePromise={boardListsPromise}
                    filterInit={filter}
                />
            </Suspense>
        </>
    );
}
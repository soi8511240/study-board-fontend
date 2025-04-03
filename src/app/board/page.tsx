'use server'

import React, {Suspense} from "react";
import { boardListsApi, type BoardListsFilter } from "@/entities/board";
import { boardCategoryApi } from "@/entities/codes";
import {ListsData} from "@/features/board/ListsView";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";

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

    const boardLists = await boardListsApi(filter);
    const boardCategories = await boardCategoryApi();
    /*
    Todo:
    * */
    // const pagingNeedsData = boardListsPromise.then(res => res.totalCnt);

    return (
        <div className="board-page">
            <h1>게시판</h1>
            <ErrorBoundary errorComponent={ () => <div>Error</div>}>
                <Suspense fallback={<div>Loading...</div>}>
                    <ListsData
                        initialData={boardLists}
                        initialFilter={filter}
                        categories={boardCategories}
                    />
                </Suspense>
            </ErrorBoundary>
        </div>
        // <>
        //     <Suspense fallback={<Loading />}>
        //         <FilterUi
        //             categoryPromise={boardCategoriesPromise}
        //             filterInit={filter}
        //         />
        //         <ListUi
        //             responsePromise={boardListsPromise}
        //             filterInit={filter}
        //         />
        //         {/*Todo pagingUi 는 listUI로 이동하며 전체데이터말고 필요한데이터만 찝어서 props로 전달시킴.*/}
        //         <PagingUi
        //             responsePromise={boardListsPromise}
        //             filterInit={filter}
        //         />
        //     </Suspense>
        // </>
    );
}

// /app/board/page.tsx
// import { ListsData } from '@/features/board/ListsView';
// import { type BoardListsFilter } from '@/entities/board';
// import {FETCH_COUNT} from "@/shared/constants/Constants";
//
// // 이 함수는 서버에서 실행됩니다
// async function getBoardData(filter: BoardListsFilter) {
//     // 서버 API 호출 또는 데이터베이스 직접 접근
//     const response = await fetch(`/api/board?${new URLSearchParams(filter)}`);
//     return response.json();
// }
//
// interface PageProps {
//     searchParams: { [key: string]: string | string[] | undefined };
// }
//
// export default async function BoardPage({ searchParams }: PageProps) {
//
//     const filter: BoardListsFilter = {
//         currentPage: searchParams.currentPage || '1',
//         pageSize: FETCH_COUNT,
//     };
//
//     // 서버에서 데이터 가져오기
//     const boardData = await getBoardData(filter);
//
//     return (
//
//     );
// }
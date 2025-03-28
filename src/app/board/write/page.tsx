'use server'

import React, {Suspense} from 'react';
import {BoardWriteUi} from '@/features/board/write/';
import {boardCategoryApi} from "@/entities/codes";
import Loading from "@/app/Loading";

export default async function Page() {
    const boardCategoriesPromise = boardCategoryApi();
    return (
        <Suspense fallback={<Loading />}>
            <BoardWriteUi
                categoryPromise={boardCategoriesPromise}
            />
        </Suspense>
    )
}
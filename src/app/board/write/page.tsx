import React from 'react';
import {boardWriteApi, BoardWriteUi} from '@/features/board/write/';
import {boardCategoryApi} from "@/entities/codes";

export default function Page() {
    const boardCategoriesPromise = boardCategoryApi();
    return (
        <BoardWriteUi
            submitAction={boardWriteApi}
            categoryPromise={boardCategoriesPromise}
        />
    )
}
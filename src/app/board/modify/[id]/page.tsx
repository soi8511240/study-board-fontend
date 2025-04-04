import {BoardModifyUi} from "@/features/board/write";
import React, {Suspense} from "react";
import {boardDetailApi} from "@/entities/board";
import {boardCategoryApi} from "@/entities/codes";

type Params = {
    params: Promise<{
        id: string;
    }>
};

export default async function Page({ params }:Params) {
    const { id } = await params;
    const detail = await boardDetailApi({id});
    const boardCategories = await boardCategoryApi();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {/* params.id를 정상적으로 처리 */}
            <BoardModifyUi
                detail={detail}
                categories={boardCategories}
            />
        </Suspense>
    );
}

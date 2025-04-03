'use server'

// import { BoardDataView } from './BoardDataView.client';
import { type BoardListsResponse, type BoardListsFilter } from '@/entities/board';
import {Categories} from "@/entities/codes";
import {ListsView} from "@/features/board/ListsView/ListsView.client";

type Props = {
    initialData: BoardListsResponse;
    initialFilter: BoardListsFilter;
    category: Categories;
};

export function ListsData({ initialData, initialFilter }: Props) {
    // 서버 컴포넌트에서는 클라이언트 상태를 사용할 수 없지만,
    // 데이터와 prop을 클라이언트 컴포넌트로 전달할 수 있습니다.
    return (
        <ListsView

            initialData={initialData}
            initialFilter={initialFilter}
        />
    );
}
'use client'

// /features/board/board-data-view/BoardDataView.tsx
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FilterUi } from '@/widgets/board/ui/FilterUi';
import { ListUi } from '@/widgets/board/ui/ListUi';
import { PagingUi } from '@/widgets/board/ui/PagingUi';
import { type BoardListsResponse, type BoardListsFilter } from '@/entities/board';

type Props = {
    initialData: BoardListsResponse;
    initialFilter: BoardListsFilter;
};

export function ListsView({ initialData, initialFilter }: Props) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [data, setData] = useState<BoardListsResponse>(initialData);
    const [filter, setFilter] = useState<BoardListsFilter>(initialFilter);

    // 필터 변경 시 URL 업데이트 및 라우터 푸시
    const handleFilterChange = (newFilter: BoardListsFilter) => {
        const params = new URLSearchParams();
        Object.entries(newFilter).forEach(([key, value]) => {
            if (value) params.set(key, String(value));
        });

        router.push(`?${params.toString()}`);
        // 여기서 새로운 페이지가 로드되므로,
        // 서버에서 새 데이터를 가져오게 됩니다
    };

    return (
        <div className="board-data-view">
            <FilterUi
                filterValue={filter}
                onFilterChange={handleFilterChange}
            />

            <ListUi
                boardLists={data.boardLists}
                totalCnt={data.totalCnt}
            />

            <PagingUi
                currentPage={filter.currentPage}
                totalPages={Math.ceil(data.totalCnt / filter.pageSize)}
                onPageChange={(page) => handleFilterChange({...filter, currentPage: page})}
            />
        </div>
    );
}
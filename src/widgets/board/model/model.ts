export type listsBoardVO = {
    id: number;
    title: string;
    writer: string;
    createdAt: string;
    updatedAt: string;
    viewCnt: number;
    categoryName: string;
    attachYn: string;
}

export type listsResponseVO = {
    totalCnt: number;
    boardLists?: listsBoardVO[];
    filter?: listsRequestDTO;
}

export type listsRequestDTO = {
    categoryId?: string ;
    keyword?: string ;
    fromDt?: string ;
    toDt?: string ;
    currentPage?: number;
}

export type detailResponseVO = {
    id: number;
    title: string;
    writer: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    viewCnt: number;
    categoryName: string;
    attachYn: string;
}

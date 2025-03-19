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

// export type detailResponseVO = {
//     id: number;
//     title: string;
//     writer: string;
//     content: string;
//     createdAt: string;
//     updatedAt: string;
//     viewCnt: number;
//     categoryName: string;
//     attachYn: string;
// }
export type BoardDto = {
    id?: number;
    title: string;
    writer: string;
    password: string;
    rePassword: string;
    content: string;
    categoryName: string;
    categoryCode?: string;
    createdAt?: string;
    updatedAt?: string;
    viewCnt?: number;
    attachYn?: string;
    attachFiles?: File[] | null;
    attachFile1?: FileList|null;
    attachFile2?: FileList|null;
    attachFile3?: FileList|null;
}
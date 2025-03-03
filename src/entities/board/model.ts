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
    pageCnt: number;
    lists: listsBoardVO[];
}

// Todo: backend와 frontend 입장이 달라서 response와 request를 바꿔야하는가?
export type listsRequestDTO = {
    categoryId: string ;
    keyword: string ;
    fromDt: string ;
    toDt: string ;
    currentPage : number;
}
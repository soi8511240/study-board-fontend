export type BoardListsResponse = {
  totalCnt: number;
  boardLists?: BoardDto[];
  filter?: BoardListsFilter;
};

export type BoardListsFilter = {
  categoryId?: string;
  keyword?: string;
  fromDt?: string;
  toDt?: string;
  currentPage?: string;
};

export type BoardDto = {
  id?: number;
  title: string;
  writer: string;
  password?: string;
  rePassword?: string;
  content?: string;
  categoryName: string;
  categoryCode?: string;
  createdAt?: string;
  updatedAt?: string;
  viewCnt?: number;
  attachYn?: string;
  attachFiles?: File[] | null;
  attachFile1?: FileList | null;
  attachFile2?: FileList | null;
  attachFile3?: FileList | null;
};

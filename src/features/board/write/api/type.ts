export type BoardDto = {
    id?: number;
    title: string;
    writer: string;
    password: string;
    rePassword: string;
    content: string;
    categoryName: string;
    createdAt?: string;
    updatedAt?: string;
    viewCnt?: number;
    attachYn?: string;
}
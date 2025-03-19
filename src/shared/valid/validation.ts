import {BoardDto} from "@/entities/board";

type Props<T> = {
    id: string;
    data: T
}

type Response = {
    result: boolean;
    message: string;
}

export const validation = <T>({id, data}:Props<T>):Response=>{

    const response:Response = {
        result: false,
        message: ''
    }

    if (id === 'boardWrite'){
        return validBoardWrite(data as BoardDto,response);
    }

    return response;
}

const validBoardWrite = (data:BoardDto, response:Response) =>{

    const {title, password, rePassword, content} = data;
    if (!title || title.length < 1) { // title이 undefined, null, 빈 문자열이라면
        response.message = '제목을 입력해주세요';
        response.result = false;
    } else if (!password) { // password가 undefined, null, 빈 문자열이라면
        response.message = '비밀번호를 입력해주세요';
        response.result = false;
    } else if (password.length < 1) { // 이미 null/undefined 체크
        response.message = '비밀번호를 입력해주세요';
        response.result = false;
    } else if (password !== rePassword) { // rePassword와 불일치
        response.message = '비밀번호가 다릅니다. 확인해주세요.';
        response.result = false;
    } else if (password.length < 8) { // 비밀번호 최소 길이 조건
        response.message = '비밀번호를 8자 이상 입력해주세요';
        response.result = false;
    } else if (!content || content.length < 1) { // content 검증
        response.message = '내용을 입력해주세요';
        response.result = false;
    } else {
        response.message = '정상';
        response.result = true;
    }


    return response;
}
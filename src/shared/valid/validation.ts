import {type BoardDto} from "@/features/board/write";


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


    if (title === '' || title.length < 1){
        response.message = '제목을 입력해주세요';
        response.result = false;
    }else if (password === null) {
        response.message = '비밀번호를 입력해주세요';
        response.result = false;
    }else if (password.length < 1){
        response.message = '비밀번호를 입력해주세요';
        response.result = false;
    }else if (password !== rePassword){
        response.message = '비밀번호가 다릅니다. 확인해주세요.';
        response.result = false;
    }else if (password.length < 8){
        response.message = '비밀번호를 8자 이상 입력해주세요';
        response.result = false;
    }else if (content.length < 1){
        response.message = '내용을 입력해주세요';
        response.result = false;
    }else{
        response.message = '정상';
        response.result = true;
    }

    return response;
}
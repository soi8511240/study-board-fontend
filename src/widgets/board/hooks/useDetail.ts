import {boardDetailApi} from "@/entities/board";
// import {useEffect, useState} from "react";
// import {useParams} from "next/navigation";
// import {BoardDto} from "@/entities/board";

export function useDetail(id:string) {

    // const params:Params = useParams();

    // const [detail, setDetail] = useState<BoardDto>();

    // const fetchData = ()=>{
    //     try {
    //         return boardDetailApi({id: id});
    //     } catch (error) {
    //         console.error('Failed to fetch list:', error);
    //         return Promise.reject(error);
    //     }
    // }
    return boardDetailApi({id: id});

    // useEffect(() => {
    //     fetchData()
    //         .then((res) => {
    //             console.log('#############useEffect ', res)
    //             return setDetail(res as BoardDto);
    //         })
    //         .catch((error) => {
    //             console.error("Failed to resolve promise:", error);
    //         });
    // }, []);
    //
    // return { detail };
}
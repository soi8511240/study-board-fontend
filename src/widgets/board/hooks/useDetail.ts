import {boardDetailApi} from "@/entities/board";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {BoardDto} from "@/entities/board";

type Params = {
    id:string
}

export function useDetail() {

    const params:Params = useParams();

    const [detail, setDetail] = useState<BoardDto>();

    const fetchData = ()=>{
        try {
            return boardDetailApi({id: params.id});
        } catch (error) {
            console.error('Failed to fetch list:', error);
            return Promise.reject(error);
        }
    }

    useEffect(() => {
        fetchData()
            .then((res) => {
                return setDetail(res as BoardDto);
            })
            .catch((error) => {
                console.error("Failed to resolve promise:", error);
            });
    }, [params]);

    return { detail };
}
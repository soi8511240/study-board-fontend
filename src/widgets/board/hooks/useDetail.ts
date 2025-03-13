import {boardDetailApi} from "@/entities/board";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import {detailResponseVO} from "@/entities/board";

export function useDetail() {

    const params:{id:string} = useParams();

    const [detailResponse, setDetailResponse] = useState<detailResponseVO | undefined>();

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
                return setDetailResponse(res as detailResponseVO);
            })
            .catch((error) => {
                console.error("Failed to resolve promise:", error);
            });
    }, [params]);

    return { detailResponse };
}
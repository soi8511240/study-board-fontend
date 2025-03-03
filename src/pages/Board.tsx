'use client'

import React, { useState, useEffect } from "react";
import { BoardApi } from '@/shared/apis/BoardApi';

export default function Board() {
    useEffect(() => {
        getData();
        // 3번째 실행
        console.log("컴포넌트가 렌더링 또는 업데이트 되었습니다.");
        return () => {
            // 4번째 실행
            console.log("컴포넌트가 언마운트되기 전에 호출됩니다.");
        };
    }, []);

    const boardApi = new BoardApi();

    const [board, setBoard] = useState([]);

    const getData = async ()=> {
        const {data} = await boardApi.list();
        setBoard(data);
    }

    return (
        <div></div>
    );
}


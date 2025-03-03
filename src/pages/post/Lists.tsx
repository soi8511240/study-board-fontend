'use client'

import React, { useState, useEffect } from "react";
import { BoardApi } from '@/shared/apis/BoardApi';
import {listsResponseVO} from "@/entities/board/model";

export default function Lists() {
    const boardApi = new BoardApi();

    const [board, setBoard] = useState<listsResponseVO>({lists: [], pageCnt: 0});

    const getData = async ()=> {
        const {data} = await boardApi.list();
        setBoard(data);
    }

    useEffect(() => {
        getData();
        // 3번째 실행
        console.log("컴포넌트가 렌더링 또는 업데이트 되었습니다.");
        return () => {
            // 4번째 실행
            console.log("컴포넌트가 언마운트되기 전에 호출됩니다.");
        };
    }, []);

    return (
        <div>
            {board.lists.map(item=>
                <li key={item.id}>
                    {item.id}
                    {item.title}
                    {item.categoryName}
                    {item.createdAt}
                    {item.updatedAt}
                </li>
            )}
        </div>
    );
}


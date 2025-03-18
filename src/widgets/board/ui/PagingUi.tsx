'use client'

import React, {useEffect, useState} from 'react';
import {listsRequestDTO} from "@/entities/board";
import Link from "next/link";
import {useListsFetch, useListsFilter} from "@/widgets/board";

const FETCH_CNT = 10;

export const PagingUi = () =>
{
    const {boardLists, totalCnt} = useListsFetch();
    const {filterValue, handleSubmit} = useListsFilter();

    const [pageCnt, setPageCnt] = useState<number>(0);

    const handlePagingClick = (value:number = 1 )=>{
        handleSubmit({currentPage:value} as listsRequestDTO);
    }

    useEffect(() => {
        setPageCnt(Math.ceil(totalCnt / FETCH_CNT));
    },[boardLists])


    return (

        <div className="btns-foot">
            <div className="left"></div>
            <div className="paging-area">
                <button className="first">&lt;&lt;</button>
                <button className="prev">&lt;</button>
                <ul className="paging">
                    {
                        pageCnt > 0 &&
                        Array.from({length: pageCnt}, (v, i) => i + 1).map((item, index) => (
                            <li key={index} onClick={()=>handlePagingClick(index+1)}>
                                <button className={index+1 === filterValue.currentPage? 'active' : '' }>{index+1}</button>
                            </li>
                        ))
                    }
                </ul>
                <button className="next">&gt;</button>
                <button className="last">&gt;&gt;</button>
            </div>
            <div className="right">
                <Link
                    href="/board/write"
                    className='btn primary'
                >
                    글 쓰기
                </Link>
            </div>
        </div>
    );
}
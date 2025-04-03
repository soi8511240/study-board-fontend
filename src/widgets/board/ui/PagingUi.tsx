'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {FETCH_COUNT} from "@/shared/constants/Constants";

const calcPageCnt = (totalCnt:number)=>{
    return Math.ceil(totalCnt / FETCH_COUNT)
}

type Props = {
    currentPage: string | undefined,
    onPageChange: (page:number)=>void,
    totalCnt: number,
}

export const PagingUi = ({currentPage, onPageChange, totalCnt}:Props) =>
{
    const numCurrentPage = Number(currentPage);

    const [pageCnt,setPageCnt] = useState<number>(()=>calcPageCnt(totalCnt));
    useEffect(()=>{
        setPageCnt(calcPageCnt(totalCnt))
    },[totalCnt])
    const pagination = {
        pageCnt: calcPageCnt(totalCnt),
        currentPage: numCurrentPage,
        firstPage: 1,
        prevPage: Math.max(1, numCurrentPage - 1),
        lastPage: pageCnt,
        nextPage: Math.min(pageCnt, numCurrentPage + 1),
    }

    const handlePagingClick = ({type, pagingIndex}:{type:string,pagingIndex?:number})=>{
        let nextPage:number = pagingIndex || 1;
        switch (type) {
            case 'first':
                if (pagination.firstPage === numCurrentPage) return;
                nextPage = pagination.firstPage;
                break;
            case 'prev':
                if (pagination.firstPage === numCurrentPage) return;
                nextPage = pagination.prevPage;
                break;
            case 'next':
                if (pagination.nextPage === numCurrentPage) return;
                nextPage = pagination.nextPage;
                break;
            case 'last':
                if (pagination.lastPage === numCurrentPage) return;
                nextPage = pagination.lastPage;
                break;
            case 'page':
                if (pagingIndex === numCurrentPage) return;
                nextPage = pagingIndex as number;
                break;
        }
        onPageChange(nextPage);
    }

    const isCurrent= (value:number) => {
        return value === pagination.currentPage;
    }

    return (

        <div className="btns-foot">
            <div className="left"></div>
            <div className="paging-area">
                <button className="first" onClick={()=>handlePagingClick({type:'first'})}>&lt;&lt;</button>
                <button className="prev" onClick={()=>handlePagingClick({type:'prev'})}>&lt;</button>
                <ul className="paging">
                    {
                        Array.from({length: pageCnt}, (v, i) => i + 1).map((pagingIndex) => (
                            <li key={pagingIndex} onClick={()=>handlePagingClick({type:'page',pagingIndex})}>
                                <button className={isCurrent(pagingIndex)?'active':''}>{pagingIndex}</button>
                            </li>
                        ))
                    }
                </ul>
                <button className="next" onClick={()=>handlePagingClick({type:'next'})}>&gt;</button>
                <button className="last" onClick={()=>handlePagingClick({type:'last'})}>&gt;&gt;</button>
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
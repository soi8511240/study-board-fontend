'use client'

import React, {use, useState} from 'react';
import {type BoardListsFilter, BoardListsResponse} from "@/entities/board";
import Link from "next/link";
import {useListsFilter} from "@/widgets/board";
import {useCustomSearchParams} from "@/shared/lib";

const FETCH_CNT = 10; // 페이징 처리될 갯수
const calcPageCnt = (totalCnt:number)=>{
    return Math.ceil(totalCnt / FETCH_CNT)
}

type Props = {
    responsePromise: Promise<BoardListsResponse>,
    filterInit: BoardListsFilter
}

export const PagingUi = ({responsePromise, filterInit}:Props) =>
{
    /* 동기(filterInit)와 비동기(responsePromise) 사이에서 시점차이로 인한 버그발생.
     Strict mode인 개발모드에서 2번쨰 호출할때 값이 이전어딘가에서 꺼내어져서 사용함.(값이 롤백됨)
     새로고침을 하면 제자리를 찾는것을 보면, 리액트 cache 어딘가에서 꺼내어지는것으로 추측됨. */
    const {currentPage} = filterInit;
    const numCurrentPage = Number(currentPage);

    // use훅으로 Promise받아옴.
    const response = use(responsePromise);
    const {totalCnt} = response;

    // 파라미터 셋팅함수
    const {setSearchParams} = useCustomSearchParams();

    // paging onSubmit 이벤트 핸들러
    const onSubmit = (param:BoardListsFilter) => {
        setSearchParams(param)
    }

    const {filterValue} = useListsFilter(filterInit, onSubmit);
    const [pageCnt] = useState<number>(()=>calcPageCnt(totalCnt));

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
        onSubmit({
            ...filterValue,
            ['currentPage']: nextPage.toString()
        })
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
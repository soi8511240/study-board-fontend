'use client'

import React from 'react';
import {useListsFilter} from "@/widgets/board";
import type {BoardListsFilter} from "@/entities/board";
import {useCustomSearchParams} from "@/shared/lib";

type Props = {
    filterInit: BoardListsFilter
}

export function FilterUi ({filterInit}: Props) {

    // onSubmit 에서 처리할 파라미터 셋팅함수 가져옴.
    const {setSearchParams} = useCustomSearchParams();

    // onSubmit 이벤트 핸들러 : 필터값을 searchParam에 반영함
    const onSubmit = (param:BoardListsFilter) => {
        setSearchParams({
            ...param,
            currentPage: '1'
        })
    }

    /**
     * 필터 초기값과 onSubmit 함수를 파라미터로 전달하고,
     * 화면을 구성하는데 필요한 이벤트 핸들러와 필터 값을 가져옴.
     */
    const {filterValue, handleFilterValueChange, handleSubmit} = useListsFilter(filterInit, onSubmit);

     return (
        <div className="searchbar">
            <span>등록일</span>
            <div className="area-datepicker">
                <input type="text" className="input-datepicker" name="fromDt" id="fromDt" value={filterValue.fromDt} onChange={handleFilterValueChange}/>
                <input type="text" className="input-datepicker" name="toDt" id="toDt" value={filterValue.toDt} onChange={handleFilterValueChange}/>
            </div>
            <select className="select" name="categoryId" id="categorySelect" value={filterValue.categoryId} onChange={handleFilterValueChange}>
                <option value="">전체</option>
            </select>
            <input type="text" id="keyword" name="keyword" placeholder="검색어를 입력해 주세요. (제목 + 작성자 + 내용)"
                   value={filterValue.keyword}
                   onKeyDown={(e)=>{if(e.key === 'Enter') handleSubmit()}}
                   onChange={handleFilterValueChange}
            />
            <button id="sr-button" className="btn-sr" type="button" onClick={()=>{handleSubmit()}}>검색</button>
            <input type="hidden" id="currentPage" name="currentPage" value="1"/>
        </div>
    );
}
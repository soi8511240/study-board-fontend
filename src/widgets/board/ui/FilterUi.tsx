'use client'

import React from 'react';
import {useListsFilter} from "@/widgets/board";

export const FilterUi:React.FC = () => {

    const {filterValue, handleFilterValueChange, handleSubmit} = useListsFilter();

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
                   onChange={handleFilterValueChange}
            />
            <button id="sr-button" className="btn-sr" type="button" onClick={()=>{handleSubmit()}}>검색</button>
            <input type="hidden" id="currentPage" name="currentPage" value="1"/>
        </div>
    );
}
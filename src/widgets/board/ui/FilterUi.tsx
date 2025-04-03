'use client'

import React from 'react';
import {useListsFilter} from "@/widgets/board";
import {type BoardListsFilter} from "@/entities/board";
import {type Categories} from "@/entities/codes";

type Props = {
    filter: BoardListsFilter,
    categories: Categories[],
    onFilterChange: (param:BoardListsFilter)=>void;
}

export function FilterUi ({filter, categories, onFilterChange}: Props) {

    const {filterValue, handleFilterValueChange, handleSubmit} =
        useListsFilter(filter, onFilterChange);

     return (
        <div className="searchbar">
            <span>등록일</span>
            <div className="area-datepicker">
                <input type="text" className="input-datepicker" name="fromDt" id="fromDt" value={filterValue.fromDt} onChange={handleFilterValueChange}/>
                <input type="text" className="input-datepicker" name="toDt" id="toDt" value={filterValue.toDt} onChange={handleFilterValueChange}/>
            </div>
            <select className="select" name="categoryId" id="categorySelect" value={filterValue.categoryId} onChange={handleFilterValueChange}>
                <option value="">전체</option>
                {categories && categories.map(({id,name})=> (
                    <option key={id} value={id}>{name}</option>
                ))}
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
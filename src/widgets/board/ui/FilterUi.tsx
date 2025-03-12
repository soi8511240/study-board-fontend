'use client'

import React from 'react';
import {listsRequestDTO} from '@/widgets/board';

type FilterUiProps = {
    filter: listsRequestDTO,
    handleInputChanger: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    handleSubmit: (obj: listsRequestDTO) => void
}

export const FilterUi:React.FC<FilterUiProps> = ({filter, handleSubmit, handleInputChanger}) => {

    const handleEventSubmit = ()=>{
         handleSubmit({...filter,currentPage:1});
     }

     return (
        <div className="searchbar">
            <span>등록일</span>
            <div className="area-datepicker">
                <input type="text" className="input-datepicker" name="fromDt" id="fromDt" value={filter.fromDt} onChange={handleInputChanger}/>
                <input type="text" className="input-datepicker" name="toDt" id="toDt" value={filter.toDt} onChange={handleInputChanger}/>
            </div>
            <select className="select" name="categoryId" id="categorySelect" value={filter.categoryId} onChange={handleInputChanger}>
                <option value="">전체</option>
            </select>
            <input type="text" id="keyword" name="keyword" placeholder="검색어를 입력해 주세요. (제목 + 작성자 + 내용)"
                   value={filter.keyword}
                   onChange={handleInputChanger}
            />
            <button id="sr-button" className="btn-sr" type="button" onClick={()=>{handleEventSubmit()}}>검색</button>
            <input type="hidden" id="currentPage" name="currentPage" value="1"/>
        </div>
    );
}
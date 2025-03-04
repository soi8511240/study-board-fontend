'use client'

import React from 'react';

import {listsBoardVO} from "@/entities";
import Link from "next/link";

export default function List({ totalCnt, list }:{totalCnt: number, list: listsBoardVO[]}) {

    return (
        <>

            <div className="table-top">총 {totalCnt}건</div>

            <table className="table-list">
                <colgroup>
                    <col style={{width: '15%'}} />
                    <col style={{width: '33%'}} />
                    <col style={{width: '10%'}} />
                    <col style={{width: '10%'}} />
                    <col style={{width: '16%'}} />
                    <col style={{width: '16%'}} />
                </colgroup>
                <thead>
                <tr>
                    <th>카테고리</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    <th>등록 일시</th>
                    <th>수정 일시</th>
                </tr>
                </thead>
                <tbody>
                {
                    (!list || list.length === 0 )
                    ?<tr><td colSpan={6} style={{height:"200px"}}>데이터가 없습니다.</td></tr>
                        : null
                }

                    {
                        list.map((item: listsBoardVO) => (
                            <tr key={item.id}>
                                <td>{item.categoryName}</td>
                                <td><Link href={`/post/${item.id}`}>{item.title},{item.attachYn}</Link>
                                    {item.attachYn === 'Y'? <span className="ico attach"></span>:null}
                                </td>
                                <td>{item.writer}</td>
                                <td>{item.viewCnt}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.updatedAt}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}
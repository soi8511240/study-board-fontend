'use server'

import React from 'react';

import {boardListsApi, listsBoardVO,
    // type listsResponseVO
} from '@/entities/board';

import Link from "next/link";
// import {useListsFetch} from "@/widgets/board";
import { headers } from 'next/headers'

export async function ListUi(){
    const headerList = await headers()
    const filter = headerList.get('x-path-type') || undefined;

    const result = await boardListsApi({filter});

    const {boardLists, totalCnt} = result;
    // return (
    //     <ul>
    //         {data.map((item:boardDTO) => (
    //             <li key={item.id}>{item.name}</li>
    //         ))}
    //     </ul>
    // );


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
                    (!boardLists || boardLists.length === 0 )
                        ?<tr><td colSpan={6} style={{height:"200px"}}>데이터가 없습니다.</td></tr>
                        : null
                }

                {boardLists &&
                    boardLists.map((item: listsBoardVO) => (
                        <tr key={item.id}>
                            <td>{item.categoryName}</td>
                            <td><Link href={`/board/${item.id}`}>{item.title},{item.attachYn}</Link>
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
export default ListUi;

'use client'

import React, {useEffect} from 'react';

import { useAppSelector, useAppDispatch } from '@/app/hooks';

import {ListApi, listsBoardVO, getAllBoard} from '../index';

import Link from "next/link";

export default function BoardList() {
    const {boardLists, totalCnt} = useAppSelector((state) => state.board)
    const dispatch = useAppDispatch();

    const api = new ListApi();
    const fetchData = async () => {
        try {
            const data = await api.lists();
            dispatch(getAllBoard(data));
        } catch (error) {
            console.error('Failed to fetch list:', error);
        }
    };

    useEffect( () => {
        fetchData();
        console.log('boardLists', boardLists)
    }, []);

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

                {
                    boardLists.map((item: listsBoardVO) => (
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
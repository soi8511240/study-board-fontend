'use client'

import React, {startTransition, use} from 'react';

import css from './BoardWriteUi.module.css';
import {type BoardDto} from "@/entities/board";
import {type Categories} from "@/entities/codes";
import {boardWriteApi} from "@/features/board/write";

type Props = {
    detailPromise:Promise<BoardDto>;
    categoryPromise:Promise<Categories[]>;
}

export const BoardModifyUi = ({detailPromise, categoryPromise}:Props)=>{
    const detail = use(detailPromise);
    const categories = use(categoryPromise);

    // const {writeData, handleValueChange, handleSubmit, goBackPage} = useBoardWrite(api, detail);
    // const {register, handleSubmit} = useForm();

    return (
        <>
            <table className="table-horizontal">
                <colgroup>
                    <col className={css.w15p}/>
                    <col className={css.w30p}/>
                    <col className={css.w15p}/>
                    <col className={css.w30p}/>
                </colgroup>
                <tbody>
                <tr>
                    <th><label className="ess">category</label></th>
                    <td colSpan={3}>
                        {categories && (
                            <select className="select" name="categoryCode">
                                {categories.map(({id, name}) => (
                                    <option key={id} value={id} selected={id === detail.categoryCode}>
                                        { name}
                                    </option>
                                ))}
                            </select>
                        )}
                    </td>
                </tr>
                <tr>
                    <th><label className="ess">작성자</label></th>
                    {/*<td colSpan={3}><input type="text" name="writer" value={detail.writer} onChange={handleValueChange} required /></td>*/}
                </tr>
                {/*<tr>*/}
                {/*    <th><label className="ess">Password</label></th>*/}
                {/*    <td colSpan={3}>*/}
                {/*        <div style={{*/}
                {/*            display:'flex',*/}
                {/*            gap:'10px'*/}
                {/*        }}>*/}
                {/*            <input type="password" name="password" value={detail.password} onChange={handleValueChange} />*/}
                {/*            <input type="password" name="rePassword" value={detail.rePassword} onChange={handleValueChange} />*/}
                {/*        </div>*/}
                {/*    </td>*/}
                {/*</tr>*/}
                <tr>
                    <th><label className="ess">제목</label></th>
                    {/*<td colSpan={3}><input type="text" value={detail.title} onChange={handleValueChange} name="title" /></td>*/}
                </tr>
                <tr>
                    <th><label className="ess">Content</label></th>
                    {/*<td colSpan={3}><textarea name="content" value={detail.content} className="textarea" onChange={handleValueChange} /></td>*/}
                </tr>
                <tr>
                    <th>File</th>
                    <td colSpan={3}>
                        <ul>
                            <li><input type="file" className="file" name="attachFiles1" multiple/></li>
                            <li><input type="file" className="file" name="attachFiles2" multiple/></li>
                            <li><input type="file" className="file" name="attachFiles3" multiple/></li>
                        </ul>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="btns-foot">
                <div className="left"></div>
                <div className="center">
                    {/*<button type="button" className="btn btn-default primary"*/}
                    {/*        onClick={handleSubmit}*/}
                    {/*>저장</button>*/}
                    {/*<button type="button" className="btn btn-default"*/}
                    {/*        onClick={goBackPage}*/}
                    {/*>취소</button>*/}
                </div>
                <div className="right"></div>
            </div>
        </>
    )
}
'use client'

import React, {use, useActionState, useTransition} from 'react';

import css from './BoardWriteUi.module.css';
import {Categories} from "@/entities/codes";
// import {BoardDto} from "@/entities/board";

type Props = {
    categoryPromise:Promise<Categories[]>;
    submitAction:()=>string;
}

export const BoardWriteUi = ({categoryPromise, submitAction}:Props)=>{

    const categories = use(categoryPromise);

    const [state, action] = useActionState(submitAction, null, 'n/a');

    // const submitAction = async (writeData:BoardDto) => {
    //     startTransition(async () => {
    //         // const {error} = await boardWriteApi(writeData);
    //         // if (error) {
    //         //     setError(error);
    //         // } else {
    //         //     setName('');
    //         // }
    //         const {} = await boardWriteApi(writeData);
    //     })
    // }


    // const {writeData, handleValueChange, handleSubmit} = useBoardWrite(onSubmit);

    return (
            <form action={submitAction}>
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
                                        <option key={id} value={id}>
                                            { name}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <th><label className="ess">작성자</label></th>
                        <td colSpan={3}><input type="text" name="writer" /></td>
                    </tr>
                    <tr>
                        <th><label className="ess">Password</label></th>
                        <td colSpan={3}>
                            <div style={{
                                display:'flex',
                                gap:'10px'
                            }}>
                                <input type="password" name="password" />
                                <input type="password" name="rePassword" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th><label className="ess">제목</label></th>
                        <td colSpan={3}><input type="text" name="title" /></td>
                    </tr>
                    <tr>
                        <th><label className="ess">Content</label></th>
                        <td colSpan={3}><textarea name="content" className="textarea" /></td>
                    </tr>
                    <tr>
                        <th>File</th>
                        <td colSpan={3}>
                            {/*Todo 배열로*/}
                            <input type="file" className="file" name="attachFile1" accept="image/*,application/pdf"/>
                            <input type="file" className="file" name="attachFile2" accept="image/*,application/pdf"/>
                            <input type="file" className="file" name="attachFile3" accept="image/*,application/pdf"/>
                            {/*<InputFile name={'attachFile1'} onChange={handleValueChange} multiple={true}/>*/}
                            {/*<InputFile name={'attachFile2'} onChange={handleValueChange}/>*/}
                            {/*<InputFile name={'attachFile3'} onChange={handleValueChange}/>*/}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="btns-foot">
                    <div className="left"></div>
                    <div className="center">
                        <button type="submit" className="btn btn-default primary"
                                disabled={isPending}
                        >저장</button>
                        {/*<button type="button" className="btn btn-default"*/}
                        {/*        onClick={}*/}
                        {/*>취소</button>*/}
                    </div>
                    <div className="right"></div>
                </div>
            </form>
    )
}
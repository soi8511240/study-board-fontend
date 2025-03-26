'use client'

import React, {use} from 'react';

import css from './BoardWriteUi.module.css';
import {useBoardWrite} from "@/features/board/write";
import {Categories} from "@/entities/codes";

type Props = {
    categoryPromise:Promise<Categories[]>
}

export const BoardWriteUi = ({categoryPromise}:Props)=>{

    // const {callModal} = useModal();
    //
    // const displayMessage = (message:string)=>{
    //     callModal({ message });
    //     callModal({ type: 'Custom', title:'alert', message, component: <ModalIsPassCheck /> });
    // }
    const category = use(categoryPromise);

    // const {category} = useCategory();
    const {writeData, handleValueChange, handleSubmit, goBackPage} = useBoardWrite(displayMessage);

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
                        {category && (
                            <select className="select" name="categoryCode" value={writeData.categoryCode} onChange={handleValueChange}>
                                {category.map(({id, name}) => (
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
                    <td colSpan={3}><input type="text" name="writer" value={writeData.writer} onChange={handleValueChange} required /></td>
                </tr>
                <tr>
                    <th><label className="ess">Password</label></th>
                    <td colSpan={3}>
                        <div style={{
                            display:'flex',
                            gap:'10px'
                        }}>
                            <input type="password" name="password" value={writeData.password} onChange={handleValueChange} />
                            <input type="password" name="rePassword" value={writeData.rePassword} onChange={handleValueChange} />
                        </div>
                    </td>
                </tr>
                <tr>
                    <th><label className="ess">제목</label></th>
                    <td colSpan={3}><input type="text" value={writeData.title} onChange={handleValueChange} name="title" /></td>
                </tr>
                <tr>
                    <th><label className="ess">Content</label></th>
                    <td colSpan={3}><textarea name="content" value={writeData.content} className="textarea" onChange={handleValueChange} /></td>
                </tr>
                <tr>
                    <th>File</th>
                    <td colSpan={3}>
                        {/*Todo 배열로*/}
                        <input type="file" className="file" name="attachFile1" accept="image/*,application/pdf" onChange={handleValueChange}/>
                        <input type="file" className="file" name="attachFile2" accept="image/*,application/pdf" onChange={handleValueChange}/>
                        <input type="file" className="file" name="attachFile3" accept="image/*,application/pdf" onChange={handleValueChange}/>
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
                    <button type="button" className="btn btn-default primary"
                            onClick={handleSubmit}
                    >저장</button>
                    <button type="button" className="btn btn-default"
                            onClick={goBackPage}
                    >취소</button>
                </div>
                <div className="right"></div>
            </div>
        </>
    )
}
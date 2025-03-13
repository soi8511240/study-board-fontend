'use client'

import React, {useState} from 'react';

import css from './BoardWriteUi.module.css';
import {useWrite} from "@/features/board/write";
import {Alert} from '@/shared/ui/';

export const BoardWriteUi = ()=>{

    const [alertOpen, setAlertOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');


    const displayMessage = (message:string)=>{
        setAlertMessage(message)
        setAlertOpen(true);
        // alert(message)
    }

    const handleModal = ()=>{
        setAlertOpen(!alertOpen);
    }
    const {writeData, handleValueChange, handleSubmit, goBackPage} = useWrite(displayMessage);

    return (
        <>

            <Alert
                title={''}
                message={alertMessage}
                open={alertOpen}
                handler={handleModal}
            />
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
                        {/*<select className="select" name="categoryCode">*/}
                        {/*    <option value="${item.id}">${item.name ?? ''}</option>*/}
                        {/*</select>*/}
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
                {/*<tr>*/}
                {/*    <th>File</th>*/}
                {/*    <td colSpan={3}><input type="file" className="file" name="attachFiles" multiple/></td>*/}
                {/*</tr>*/}
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
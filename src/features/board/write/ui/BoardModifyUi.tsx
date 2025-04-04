'use client'

import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import css from './BoardWriteUi.module.css';
import {type BoardDto} from "@/entities/board";
import {type Categories} from "@/entities/codes";
import {boardWriteApi} from '@/features/board/write';
import {useRouter} from "next/navigation";

type Props = {
    detail:BoardDto;
    categories:Categories[];
}

type RemoveAttachFile = {storedFileName:string;orderBy:string}[]

type FileInfo = {
    originalFileName?: string;
    storedFileName?: string;
    fileUri?: string;
    orderBy?: string;
}

interface UpdateRequestDTO {
    id: string;
    title: string;
    writer: string;
    password?: string;
    rePassword?: string;
    content?: string;
    categoryCode?: string;
    createdAt?: string;
    updatedAt?: string;
    viewCnt?: number;
    attachYn?: string;
    files?:FileInfo[] | null;
    attachFiles?: File[] | null;
    removeAttachFiles?: RemoveAttachFile;
}

// todo: next app-router 장점 추가 - 초기데이터 처리하는 부분이 부담이 덜어짐.
export const BoardModifyUi = ({detail, categories}:Props)=>{
    const {id} = detail;

    const { register, handleSubmit } = useForm<UpdateRequestDTO>({
            defaultValues: {
                ...detail,
                id: id!.toString(),
                removeAttachFiles: []
            }
        }
    );

    const [detailFiles, setDetailFiles] = React.useState<FileInfo[] | null>(()=>{
        if (detail.files !== undefined && detail.files !== null ) return detail.files
        return [];
    });
    const [removeAttachFiles, setRemoveAttachFiles] = React.useState<RemoveAttachFile>([]);
    const handleAttachRemove = (storedFileName:string, orderBy:string)=>{
        setRemoveAttachFiles([
            ...removeAttachFiles,
            {storedFileName, orderBy}
        ])
        setDetailFiles((prev) => {
            if (!prev) return null;
            return prev.filter(file => {
                return 'storedFileName' in file && file.storedFileName !== storedFileName;
            });
        });
    }

    const onSubmit: SubmitHandler<UpdateRequestDTO> = async (data:UpdateRequestDTO) => {
        const formData = new FormData();

        formData.append('id', id!.toString());

        // 일반 텍스트 필드 추가
        Object.entries(data).forEach(([key, value]) => {
            if (key !== 'attachFiles') {
                formData.append(key, value as string);
            }
        });

        // 파일 첨부 처리
        if (data.attachFiles && data.attachFiles.length > 0) {
            data.attachFiles.forEach((file) => {
                formData.append('attachFiles', file);
            });
        }

        // API 호출
        // console.log('########################### formData', formData, data)
        return boardWriteApi(formData).then(res=>{
            goDetailPage(res.data as string);
        });
    };

    const router= useRouter();
    const goBackPage = () => {
        router.back();
    }

    const goDetailPage = (id:string) => {
        router.push(`/board/${id}`);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                            <select
                                {...register("categoryCode")}
                                className="select"
                            >
                                {categories.map(({id, name}) => (
                                    <option key={id} value={id}>
                                        {name}
                                    </option>
                                ))}
                            </select>
                        )}
                    </td>
                </tr>
                <tr>
                    <th><label className="ess">작성자</label></th>
                    <td colSpan={3}><input {...register("writer", { required: true, maxLength: 20 })}/></td>
                </tr>
                <tr>
                    <th><label className="ess">Password</label></th>
                    <td colSpan={3}>
                        <div style={{
                            display:'flex',
                            gap:'10px'
                        }}>
                            <input type="password" name="password"/>
                            <input type="password" name="rePassword"/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th><label className="ess">제목</label></th>
                    <td colSpan={3}><input type="text" {...register("title", { required: true, maxLength: 20 })} /></td>
                </tr>
                <tr>
                    <th><label className="ess">Content</label></th>
                    <td colSpan={3}><textarea className="textarea" {...register("content", { required: true })} /></td>
                </tr>
                <tr>
                    <th>AttachFiles</th>
                    <td colSpan={3}>
                        {detail.attachYn === 'Y' && (
                            <ul className="attach-list">
                                {detailFiles &&
                                    detailFiles.map(({storedFileName, originalFileName, orderBy}, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={'/api/boards/download/' + (storedFileName as string)}>{originalFileName}</a>
                                                <button type={'button'} className="ico remove" onClick={()=>{handleAttachRemove(storedFileName!,orderBy!)}}>삭제</button>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        )}
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="btns-foot">
                <div className="left"></div>
                <div className="center">
                    <button type="submit" className="btn btn-default primary"
                    >저장</button>
                    <button type="button" className="btn btn-default"
                            onClick={goBackPage}
                    >취소</button>
                </div>
                <div className="right"></div>
            </div>
        </form>
    )
}
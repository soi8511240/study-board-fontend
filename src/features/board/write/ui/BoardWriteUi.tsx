'use client'

import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import css from './BoardWriteUi.module.css';
import {Categories} from "@/entities/codes";
import {boardWriteApi} from "@/features/board/write";
import {useRouter} from "next/navigation";
import {FormFileUploader} from "@/shared/inputs/";

type Props = {
    categories: Categories[]
}

interface InsertRequestDTO {
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
    attachFiles?: File[] | null;
}

export function BoardWriteUi ({categories}: Props){

    const { register, handleSubmit, control } = useForm<InsertRequestDTO>()

    const onSubmit: SubmitHandler<InsertRequestDTO> = async (data:InsertRequestDTO) => {
        const formData = new FormData();

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


    const router = useRouter();
    const goListPage = () => {
        router.push('/board');
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
                        <td colSpan={3}><input {...register("writer", { required: true, maxLength: 20 })} /></td>
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
                        <td colSpan={3}><input type="text" {...register("title", { required: true, maxLength: 20 })} /></td>
                    </tr>
                    <tr>
                        <th><label className="ess">Content</label></th>
                        <td colSpan={3}><textarea className="textarea" {...register("content", { required: true })}/></td>
                    </tr>
                    <tr>
                        <th>File</th>
                        <td colSpan={3}>
                            <FormFileUploader
                                name="attachFiles"
                                control={control}
                                maxFiles={3}
                                label="첨부 파일"
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="btns-foot">
                    <div className="left"></div>
                    <div className="center">
                        <button
                            type="submit"
                            className="btn btn-default primary"
                        >저장</button>
                        <button type="button" className="btn btn-default"
                                onClick={goListPage}
                        >취소</button>
                    </div>
                    <div className="right"></div>
                </div>
            </form>
    )
}
'use client'

import React from 'react';
import {type detailResponseVO} from '@/entities/board';

type Props = {
    detail: detailResponseVO | undefined;
}

export const DetailUi:React.FC<Props> = ({ detail })=> {
    return (
        <>
            {detail && (
                <table className="table-horizontal">
                    <tbody>
                    <tr>
                        <th>ID</th>
                        <td> {detail.id} </td>
                    </tr>
                    <tr>
                        <th>Category</th>
                        <td> {detail.categoryName} </td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td> {detail.title} </td>
                    </tr>
                    <tr>
                        <th>Content</th>
                        <td> {detail.content} </td>
                    </tr>
                    <tr>
                        <th>Writer</th>
                        <td> {detail.writer} </td>
                    </tr>
                    <tr>
                        <th>Count</th>
                        <td> {detail.viewCnt} </td>
                    </tr>
                    <tr>
                        <th>AttachFiles</th>
                        <td>
                            {
                                detail.attachYn === 'Y' && (
                                    <div>첨부파일있음</div>
                                )
                            }
                        </td>
                    </tr>
                    <tr>
                        <th>CreateDate</th>
                        <td> {detail.createdAt} </td>
                    </tr>
                    <tr>
                        <th>UpdateDate</th>
                        <td> {detail.updatedAt} </td>
                    </tr>
                    </tbody>
                </table>
            )}

        </>
    );
};
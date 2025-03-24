
import React, {use} from 'react';
// import {useRouter} from "next/navigation";
// import {useDetail} from "@/widgets/board";
import {boardDetailApi} from "@/entities/board";

type Props = {
    id: string
}

export function DetailUi({id}:Props) {
    const detail = use(boardDetailApi({id: id}));

    // const router = useRouter();

    const goBackPage = ()=>{
        // router.push('/board');
    }

    const goModifyPage = (id:number)=>{
        console.log('id', id);
        // router.push(`/board/modify/${id}`);
    }

    return (
        <>
            id:{id}
            {detail && (
                <>
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
                                {detail.attachYn === 'Y' && (
                                    <ul>
                                        {/*{detail.attachFiles &&*/}
                                        {/*    detail.attachFiles.map((item, index) => (*/}
                                        {/*    <li key={index}>*/}
                                        {/*        <a href={item.fileUrl}>{item.originalFileName}</a>*/}
                                        {/*    </li>*/}
                                        {/*))}*/}
                                    </ul>
                                )}
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
                    <div className="btns-foot">
                        {/*<div className="left">*/}
                        {/*    <button type="button" className="btn btn-default"*/}
                        {/*    onClick={()=>{goModifyPage(detail.id as number)}}*/}
                        {/*>수정</button>*/}
                        {/*</div>*/}
                        {/*    <div className="center">*/}

                        {/*    </div>*/}
                        {/*<div className="right">*/}
                        {/*    <button type="button" className="btn btn-default"*/}
                        {/*            onClick={goBackPage}*/}
                        {/*    >목록</button>*/}
                        {/*</div>*/}
                    </div>
                </>
            )}

        </>
    );
};
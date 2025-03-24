'use server';

import React, {Suspense} from "react";
import {DetailUi} from "@/widgets/board";
type Params = {
    params: {
        id: string
    }
}

export default async function Page({ params }:Params) {
    const { id } = await params;

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {/* params.id를 정상적으로 처리 */}
            <DetailUi id={id} />
        </Suspense>
    );
}
//
// export default async function Page({params}: { params: { id: string } }) {
//
//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             {/*{params.id}*/}
//             <DetailUi id={params.id}/>
//         </Suspense>
//     );
// }


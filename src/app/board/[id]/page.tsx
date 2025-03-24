// 'use client'
'use server';

import React, {Suspense} from "react";
import {DetailUi} from "@/widgets/board";
// import {DetailUi} from "@/widgets/board";
type Params = {
    params: {
        id: string
    }
}

export default async function Page({ params }:Params) {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            {/*{params.id}*/}
            <DetailUi id={params.id}/>
        </Suspense>
    );
}


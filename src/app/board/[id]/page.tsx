'use client'

import React from "react";
import {useDetail, DetailUi} from "@/widgets/board";

export default function Page() {
    const { detailResponse } = useDetail();

    return (
        <>
            <DetailUi detail={detailResponse}/>
        </>
    );
}


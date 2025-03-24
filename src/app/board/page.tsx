// 'use client'
'use server';

import React from "react";
// import { ListUi, FilterUi, PagingUi } from '@/widgets/board';
import { headers } from 'next/headers';

export default async function Page() {

    const headersList = headers();
    const headerPathname = headersList.get('x-pathname') || "";
    return (
        <>
            {headerPathname}
            {/*<FilterUi />*/}
            {/*<ListUi />*/}
            {/*<PagingUi />*/}
        </>
    );
}
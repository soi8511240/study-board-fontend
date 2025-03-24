'use server';

import React, {Suspense} from "react";
import {
    ListUi,
    // FilterUi,
    // PagingUi
} from '@/widgets/board';

export default async function Page() {

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                {/*<FilterUi />*/}
                <ListUi />
                {/*<PagingUi />*/}
            </Suspense>
        </>
    );
}
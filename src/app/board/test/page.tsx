'use client'

import {api} from '@/widgets/board';

export default function Page() {
    api.detailById({id:'123'})
    return (
        <h1>test</h1>
        )

}
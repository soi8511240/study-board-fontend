"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

type NewParamsType = { [key: string]: string }

export const useCustomSearchParams = () => {
    const router = useRouter()
    const pathname = usePathname()
    const _searchParams = useSearchParams()
    const searchParams = new URLSearchParams(_searchParams.toString())

    const setNewParams = (newParams: NewParamsType) => {
        for (const [key, value] of Object.entries(newParams)) {
            if (value) searchParams.set(key, value)
            else searchParams.delete(key)
        }
        return searchParams.toString()
    }

    const setSearchParams = (newParams: NewParamsType) => {
        /* Todo: 화면이동은 하지말자. or 의미가 명확히 이름을 정하자. */
        return router.push(`${pathname}?${setNewParams(newParams)}`)
    }

    return { searchParams: Object.fromEntries(searchParams), setSearchParams }
}


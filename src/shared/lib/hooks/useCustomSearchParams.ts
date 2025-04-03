"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

type SearchParamValues = { [key: string]: string }

export const useCustomSearchParams = () => {
    const router = useRouter()
    const pathname = usePathname()
    const _searchParams = useSearchParams()
    const searchParams = new URLSearchParams(_searchParams.toString())

    const currentParams = Object.fromEntries(searchParams)

    const mergeQueryParams = (newParams: SearchParamValues) => {
        for (const [key, value] of Object.entries(newParams)) {
            if (value) searchParams.set(key, value)
            else searchParams.delete(key)
        }
        return searchParams.toString()
    }

    // 현재 파라미터 가져오기 함수 추가
    const getParam = (key: string) => currentParams[key] || ''

    // 페이지 이동을 수행하는 함수
    const navigateWithParams = (newParams: SearchParamValues) => {
        return router.push(`${pathname}?${mergeQueryParams(newParams)}`)
    }

    // 파라미터만 업데이트하는 함수 (페이지 이동 없음)
    const updateQueryParams = (params: SearchParamValues) => {
        const queryString = mergeQueryParams(params)
        // 여기서는 히스토리 변경만 합니다 (router.replace 사용)
        router.replace(`${pathname}?${queryString}`)
    }

    return {
        currentParams,   // 현재 쿼리 파라미터
        getParam,        // 단일 파라미터 조회
        navigateWithParams, // 새 페이지로 이동
        updateQueryParams   // 현재 페이지 URL만 업데이트
    }
}


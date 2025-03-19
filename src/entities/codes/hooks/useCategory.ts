import {useAppDispatch, useAppSelector} from "@/app/store/hooks";

import { useEffect } from 'react';
import {fetchCategories} from "@/entities/codes/";

export const useCategory = () => {

    const {category} = useAppSelector((state) => state.codes)
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log('##########', category)

        dispatch(fetchCategories())
        console.log('##########', category)
    }, [dispatch]);
    // const dispatch = useAppDispatch();


    return {category}
}
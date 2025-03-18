import { configureStore } from '@reduxjs/toolkit'
import {reducer as boardReducer} from "@/widgets/board/";
import {reducer as codeReducer} from "@/entities/codes/";
import {modalReducer} from "@/shared/ui/";

export const makeStore = () => {
    return configureStore({
        reducer: {
            board: boardReducer,
            codes: codeReducer,
            modal: modalReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false, // 직렬화 검사를 비활성화
            }),
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
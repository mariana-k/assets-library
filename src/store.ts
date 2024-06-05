import { configureStore } from '@reduxjs/toolkit'
import assetsReducer from '@/features/assets/assetsSlice'
import { api } from '@/services/api'
export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        assets: assetsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

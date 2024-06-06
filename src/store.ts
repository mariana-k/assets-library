import { configureStore } from '@reduxjs/toolkit'
import assetsReducer from '@/features/assets/assetsSlice'
import userReducer from '@/features/user/userSlice'
import { api } from '@/services/api'
export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        assets: assetsReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

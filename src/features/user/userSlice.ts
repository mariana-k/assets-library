import { createSlice } from '@reduxjs/toolkit'
import { TUserState } from '@/features/user/User.types'
import { USER } from '@/features/user/User.mocks'

const initialState = USER

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        requestAsset: (state, action) => {
            state.availableAssets.push(action.payload.assetId)
        },
        addAssetToFavorites: (state, action) => {
            state.favoriteAssets.push(action.payload.assetId)
        },
    },
})

export const selectUser = (state: TUserState) => state.user
export const { requestAsset, addAssetToFavorites } = userSlice.actions
export default userSlice.reducer

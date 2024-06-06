import { createSlice } from '@reduxjs/toolkit'
import { TAssets } from '@/features/assets/Assets.types'
import { ASSETS } from '@/features/assets/Assets.mocks'

const initialState = ASSETS

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {},
})

export const selectAllAssets = (state: TAssets) => state.assets

export default assetsSlice.reducer

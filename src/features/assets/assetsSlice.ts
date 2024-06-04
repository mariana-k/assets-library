import { createSlice } from '@reduxjs/toolkit'
import { TAssets } from './Assets.types'

const initialState = [
    {
        id: '1',
        title: 'Title 1',
        content: 'Content 1',
        type: 'Featured',
        image: 'https://placehold.co/150',
    },
    {
        id: '2',
        title: 'Title 2',
        content: 'Content 2',
        type: 'KPI',
        image: 'https://placehold.co/150',
    },
]

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {},
})

export const selectAllAssets = (state: TAssets) => state.assets

export default assetsSlice.reducer

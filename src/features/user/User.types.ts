import { TAsset } from '../assets/Assets.types'

export type TUser = {
    id: string
    availableAssets: string[]
    favoriteAssets: number[]
}
export type TUserState = {
    user: TUser
}

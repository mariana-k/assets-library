import { TAsset } from '../assets/Assets.types'

export type TUser = {
    id: string
    availableAssets: string[]
    favoriteAssets: string[]
}
export type TUserState = {
    user: TUser
}

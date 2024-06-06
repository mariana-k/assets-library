export type TAsset = {
    id: string
    title: string
    content: string
    type: string
    image: string
    date: string
    isTrending: boolean
}
export type TAssetsState = {
    assets: TAsset[]
}
export type TAssetType = {
    id: string
    title: string
    subtitle: string
}

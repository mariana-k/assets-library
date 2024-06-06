export type TAsset = {
    id: string
    title: string
    content: string
    type: string
    image: string
    isTrending?: boolean
    date?: string
}
export type TAssetsState = {
    assets: TAsset[]
}
export type TAssetType = {
    id: string
    title: string
    subtitle: string
}

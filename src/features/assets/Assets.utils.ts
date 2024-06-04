import { TAsset } from '@/features/assets/Assets.types'

export const filterAssetsBySearchTerm = (
    assets: TAsset[],
    searchTerm: string
): TAsset[] => {
    return assets.filter((asset: TAsset) => {
        return asset.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
}
export const filterAssetsByType = (
    assets: TAsset[],
    type: string
): TAsset[] => {
    return assets.filter((asset: TAsset) => {
        return asset.type === type
    })
}

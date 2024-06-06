import { TAsset } from '@/features/assets/Assets.types'

export const filterAssets = (
    assets: TAsset[],
    searchTerm: string,
    assetType?: string
): TAsset[] => {
    return assets.filter((asset: TAsset) => {
        const searchFilter = asset.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        if (assetType !== undefined) {
            return searchFilter && asset.type === assetType
        }

        return
    })
}
export const filterAssetsByIsTrending = (
    assets: TAsset[],
    searchTerm: string
): TAsset[] => {
    return assets.filter((asset: TAsset) => {
        const searchFilter = asset.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        return searchFilter && asset.isTrending === true
        return
    })
}

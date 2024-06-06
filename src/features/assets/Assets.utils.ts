import { TAsset } from '@/features/assets/Assets.types'

export const filterAssets = (
    assets: TAsset[],
    searchTerm: string
): TAsset[] => {
    return assets.filter((asset: TAsset) => {
        return asset.title.toLowerCase().includes(searchTerm.toLowerCase())
    })
}

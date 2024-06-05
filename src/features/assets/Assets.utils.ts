import { TAsset } from '@/features/assets/Assets.types'

export const filterAssets = (
    assets: TAsset[],
    type: string,
    searchTerm: string
): TAsset[] => {
    return assets.filter((asset: TAsset) => {
        return (
            asset.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            asset.type === type
        )
    })
}

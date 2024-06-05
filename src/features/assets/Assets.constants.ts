import { TAssetType } from './Assets.types'

export const makeAssetTypesStrings = (
    t: (string: string) => string
): TAssetType[] => {
    return [
        {
            title: t('asset-type-featured'),
            subtitle: t('asset-type-featured-subtilte'),
        },
        { title: t('asset-type-kpi'), subtitle: t('asset-type-kpi-subtilte') },
        {
            title: t('asset-type-layouts'),
            subtitle: t('asset-type-layouts-subtilte'),
        },
        {
            title: t('asset-type-storyboards'),
            subtitle: t('asset-type-fstoryboards-subtilte'),
        },
    ]
}

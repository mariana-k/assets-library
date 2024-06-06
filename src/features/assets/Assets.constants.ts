import { TAssetType } from './Assets.types'

export const makeAssetTypesStrings = (
    t: (string: string) => string
): TAssetType[] => {
    return [
        {
            id: 'featured',
            title: t('asset-type-featured'),
            subtitle: t('asset-type-featured-subtilte'),
        },
        {
            id: 'kpi',
            title: t('asset-type-kpi'),
            subtitle: t('asset-type-kpi-subtilte'),
        },
        {
            id: 'layouts',
            title: t('asset-type-layouts'),
            subtitle: t('asset-type-layouts-subtilte'),
        },
        {
            id: 'storyboards',
            title: t('asset-type-storyboards'),
            subtitle: t('asset-type-fstoryboards-subtilte'),
        },
    ]
}

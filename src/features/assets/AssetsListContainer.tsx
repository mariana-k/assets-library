import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectAllAssets } from '@/features/assets/assetsSlice'
import AssetsList from '@/features/assets/components/AssetsList/AssetsList'
import Search from '@/components/Search/Search'
import {
    filterAssetsBySearchTerm,
    filterAssetsByType,
} from '@/features/assets/Assets.utils'
import { TAsset } from '@/features/assets/Assets.types'
import FilterTabs from '@/components/FilterTabs/FilterTabs'
import { useTranslation } from 'next-i18next'
import H1 from '@/components/H1/H1'
import H2 from '@/components/H2/H2'
import H3 from '@/components/H3/H3'
import H4 from '@/components/H4/H4'
import Container from '@/components/Container/Containder'

function AssetsListContainer() {
    const { t } = useTranslation(['common'])
    const ASSET_TYPES = [
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
    const assets = useSelector(selectAllAssets)
    const [searchTerm, setSearchTerm] = React.useState('')
    const [filteredAssets, setFilteredAssets] = React.useState<TAsset[]>([])
    const [filterProperty, setFilterProperty] =
        React.useState<string>('Featured')

    useEffect(() => {
        setFilteredAssets(filterAssetsBySearchTerm(assets, searchTerm))
    }, [searchTerm])
    useEffect(() => {
        setFilteredAssets(filterAssetsByType(assets, filterProperty))
    }, [filterProperty])
    return (
        <Container>
            <H1>{t('app-title')}</H1>
            <H3>{t('app-subtitle')}</H3>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <FilterTabs
                filterProperties={ASSET_TYPES}
                setFilterProperty={setFilterProperty}
            />
            <H2>{filterProperty}</H2>
            <H4>{t(`asset-type-${filterProperty.toLowerCase()}-subtilte`)}</H4>
            <AssetsList assets={filteredAssets} />
        </Container>
    )
}

export default AssetsListContainer

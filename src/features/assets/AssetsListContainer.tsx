import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllAssets } from '@/features/assets/assetsSlice'
import AssetsList from '@/features/assets/components/AssetsList/AssetsList'
import Search from '@/components/Search/Search'
import { filterAssets } from '@/features/assets/Assets.utils'
import { TAsset } from '@/features/assets/Assets.types'
import FilterTabs from '@/components/FilterTabs/FilterTabs'
import { useTranslation } from 'next-i18next'
import H1 from '@/components/H1/H1'
import H2 from '@/components/H2/H2'
import H3 from '@/components/H3/H3'
import H4 from '@/components/H4/H4'
import Container from '@/components/Container/Container'
import { makeAssetTypesStrings } from './Assets.constants'

function AssetsListContainer() {
    const { t } = useTranslation(['common'])
    const ASSET_TYPES = makeAssetTypesStrings(t)
    const assets = useSelector(selectAllAssets)
    const [searchTerm, setSearchTerm] = useState<string>('')

    const [filteredAssets, setFilteredAssets] = useState<TAsset[]>([])
    const [filterProperty, setFilterProperty] = useState<string>('Featured')

    useEffect(() => {
        setFilteredAssets(filterAssets(assets, filterProperty, searchTerm))
    }, [filterProperty, searchTerm, assets])

    const handleSearch = (query: string) => {
        setSearchTerm(query)
    }

    return (
        <Container>
            <H1>{t('app-title')}</H1>
            <H3>{t('app-subtitle')}</H3>
            <Search onSearch={handleSearch} />
            <FilterTabs
                filterProperties={ASSET_TYPES}
                setFilterProperty={setFilterProperty}
            />
            <H2>{t(`asset-type-${filterProperty.toLowerCase()}`)}</H2>
            <H4>{t(`asset-type-${filterProperty.toLowerCase()}-subtilte`)}</H4>
            <AssetsList assets={filteredAssets} />
        </Container>
    )
}

export default AssetsListContainer

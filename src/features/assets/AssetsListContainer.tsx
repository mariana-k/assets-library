import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllAssets } from '@/features/assets/assetsSlice'
import Search from '@/components/Search/Search'
import { filterAssets } from '@/features/assets/Assets.utils'
import { TAsset } from '@/features/assets/Assets.types'
import FilterTabs from '@/components/FilterTabs/FilterTabs'
import { useTranslation } from 'next-i18next'
import H1 from '@/components/H1/H1'
import H3 from '@/components/H3/H3'
import Container from '@/components/Container/Container'
import { makeAssetTypesStrings } from './Assets.constants'
import AssetsListSection from '@/features/assets/sections/AssetsListSection/AssetsListSection'
import RequestAssetSection from '@/features/assets/sections/RequestAssetSection/RequestAssetSection'

const AssetsListContainer = () => {
    const { t } = useTranslation(['common'])
    const ASSET_TYPES = makeAssetTypesStrings(t)
    const assets = useSelector(selectAllAssets)
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [filteredAssets, setFilteredAssets] = useState<TAsset[]>([])
    const [filterProperty, setFilterProperty] = useState<string>('featured')

    useEffect(() => {
        setFilteredAssets(filterAssets(assets, searchTerm))
    }, [filterProperty, searchTerm, assets])

    const handleSearch = (query: string) => {
        setSearchTerm(query)
    }

    return (
        <Container>
            <RequestAssetSection />
            <H1>{t('app-title')}</H1>
            <H3>{t('app-subtitle')}</H3>
            <Search onSearch={handleSearch} />
            <FilterTabs
                filterProperties={ASSET_TYPES}
                setFilterProperty={setFilterProperty}
                activeFilterProperty={filterProperty}
            />
            <AssetsListSection
                title={t(`asset-type-${filterProperty}`)}
                subtitle={t(`asset-type-${filterProperty}-subtitle`)}
                assets={filteredAssets.filter(
                    (asset) => asset.type === filterProperty
                )}
            />

            <AssetsListSection
                title={t('trending-assets-section-title')}
                subtitle={t('trending-assets-section-subtitle')}
                assets={filteredAssets.filter(
                    (asset) => asset.isTrending === true
                )}
            />
        </Container>
    )
}

export default AssetsListContainer

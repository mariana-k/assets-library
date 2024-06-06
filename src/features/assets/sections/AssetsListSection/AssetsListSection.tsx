import H2 from '@/components/H2/H2'
import H4 from '@/components/H4/H4'
import React, { FC } from 'react'
import { TAssetsListSectionProps } from '@/features/assets/sections/AssetsListSection/AssetsListSection.types'
import AssetsList from '@/features/assets/components/AssetsList/AssetsList'

const AssetsListSection: FC<TAssetsListSectionProps> = ({
    title,
    subtitle,
    assets,
}) => {
    return (
        <div>
            <H2>{title}</H2>
            <H4>{subtitle}</H4>
            <AssetsList assets={assets} />
        </div>
    )
}

export default AssetsListSection

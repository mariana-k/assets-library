import React, { FC } from 'react'
import { TAsset } from '@/features/assets/Assets.types'
import AssetItem from '@/features/assets/components/AssetItem/AssetItem'
import { AssetsListStyles } from '@/features/assets/components/AssetsList/AssetsList.styles'

const AssetsList: FC<{ assets: TAsset[] }> = ({ assets }) => {
    return (
        <>
            <div className={AssetsListStyles}>
                {assets?.map((asset: TAsset) => (
                    <AssetItem asset={asset} key={asset.id} />
                ))}
            </div>
        </>
    )
}

export default AssetsList

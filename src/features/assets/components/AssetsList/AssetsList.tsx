import { TAsset } from '@/features/assets/Assets.types'
import AssetItem from '@/features/assets/components/AssetItem/AssetItem'
import { AssetsListStyles } from '@/features/assets/components/AssetsList/AssetsList.styles'
import React, { FC, Suspense, lazy, useState } from 'react'

import Loading from '@/components/Loading/Loading'
import { useTranslation } from 'next-i18next'
const Popup = lazy(() => import('@/components/Popup/Popup'))
const AssetsList: FC<{ assets: TAsset[] }> = ({ assets }) => {
    const { t } = useTranslation(['common'])
    const [isOpen, setIsOpen] = useState(false)

    const showPopup = () => setIsOpen(true)
    const hidePopup = () => setIsOpen(false)

    const renderAssets = assets?.map((asset: TAsset) => (
        <div onClick={showPopup} key={asset.id}>
            <AssetItem asset={asset} />
        </div>
    ))
    return (
        <>
            <div className={AssetsListStyles}>{renderAssets}</div>
            {isOpen && (
                <Suspense
                    fallback={<Loading>{t('loading-asset-details')}</Loading>}
                >
                    <Popup>
                        <p>Popup</p>
                        <button onClick={hidePopup}>Close</button>
                    </Popup>
                </Suspense>
            )}
        </>
    )
}

export default AssetsList

import React, { FC, Suspense, lazy, useState, useEffect } from 'react'
import Card from '@/components/Card/Card'
import H6 from '@/components/H6/H6'
import { TAsset } from '@/features/assets/Assets.types'
import {
    AssetItemWrapperStyles,
    AssetItemImageStyles,
    AssetItemContentStyles,
} from './AssetItem.styles'
import { useTranslation } from 'next-i18next'
import Loading from '@/components/Loading/Loading'
import AssetItemDetails from '@/features/assets/components/AssetItemDetails/AssetItemDetails'

const Popup = lazy(() => import('@/components/Popup/Popup'))

const AssetItem: FC<{ asset: TAsset }> = ({ asset }) => {
    const { t } = useTranslation(['common'])
    const [isOpen, setIsOpen] = useState(false)
    const showPopup = () => setIsOpen(true)
    const hidePopup = () => setIsOpen(false)

    return (
        <div>
            <div onClick={showPopup}>
                <Card key={asset.id}>
                    <div className={AssetItemWrapperStyles}>
                        <img
                            className={AssetItemImageStyles}
                            src={asset.image}
                            alt={asset.title}
                        />
                        <div className={AssetItemContentStyles}>
                            <H6>{asset.title}</H6>
                            <p>{asset.content}</p>
                        </div>
                    </div>
                </Card>
            </div>

            <Suspense
                fallback={<Loading>{t('loading-asset-details')}</Loading>}
            >
                <Popup isOpen={isOpen} onClose={hidePopup}>
                    <AssetItemDetails itemId={asset.id} />
                </Popup>
            </Suspense>
        </div>
    )
}

export default AssetItem

import React, { FC, Suspense, lazy, useState, useEffect } from 'react'
import Card from '@/components/Card/Card'
import H6 from '@/components/H6/H6'
import { TAsset } from '@/features/assets/Assets.types'
import {
    AssetItemWrapperStyles,
    AssetItemImageStyles,
    AssetItemContentWrapperStyles,
    AssetItemContentStyles,
    AssetItemTitleStyles,
} from '@/features/assets/components/AssetItem/AssetItem.styles'
import { useTranslation } from 'next-i18next'
import Loading from '@/components/Loading/Loading'
import AssetItemDetails from '@/features/assets/components/AssetItemDetails/AssetItemDetails'
import Small from '@/components/Small/Small'

const Popup = lazy(() => import('@/components/Popup/Popup'))

const AssetItem: FC<{ asset: TAsset }> = ({ asset }) => {
    const { t } = useTranslation(['common'])
    const [isOpen, setIsOpen] = useState(false)
    const showPopup = () => setIsOpen(true)
    const hidePopup = () => setIsOpen(false)

    return (
        <Suspense fallback={<Loading>{t('loading-assets')}</Loading>}>
            <div onClick={showPopup}>
                <Card key={asset.id}>
                    <div className={AssetItemWrapperStyles}>
                        <img
                            className={AssetItemImageStyles}
                            src={asset.image}
                            alt={asset.title}
                        />
                        <div className={AssetItemContentWrapperStyles}>
                            <H6 className={AssetItemTitleStyles}>
                                {asset.title}
                            </H6>
                            <p className={AssetItemContentStyles}>
                                {asset.content}
                            </p>
                            <Small>{asset.date}</Small>
                        </div>
                    </div>
                </Card>
            </div>

            <Popup isOpen={isOpen} onClose={hidePopup}>
                <AssetItemDetails itemId={asset.id} />
            </Popup>
        </Suspense>
    )
}

export default AssetItem

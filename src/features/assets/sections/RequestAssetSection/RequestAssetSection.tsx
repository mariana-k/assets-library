import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RequestAssetSectionStyles } from '@/features/assets/sections/RequestAssetSection/RequestAssetSection.styles'
import Button from '@/components/Button/Button'
import { useTranslation } from 'next-i18next'
import Popup from '@/components/Popup/Popup'
import { selectAllAssets } from '@/features/assets/assetsSlice'
import { selectUser } from '@/features/user/userSlice'
import { requestAsset } from '@/features/user/userSlice'
import Select from '@/components/Select/Select'
import Small from '@/components/Small/Small'
const RequestAssetSection = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation(['common'])
    const assets = useSelector(selectAllAssets)
    const user = useSelector(selectUser)
    const [selectedAssetId, setSelectedAssetId] = useState('1')
    const [isOpen, setIsOpen] = useState(false)
    const showPopup = () => setIsOpen(true)
    const hidePopup = () => setIsOpen(false)

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAssetId(e.target.value)
    }
    const handleRequest = () => {
        if (user.availableAssets.includes(selectedAssetId)) {
            console.log(t('asset-available-message'))
        } else {
            dispatch(requestAsset({ assetId: selectedAssetId }))
            console.log(
                t('requesting-asset-message', {
                    selectedAssetId: selectedAssetId,
                })
            )
        }
    }

    return (
        <div className={RequestAssetSectionStyles}>
            <Button onClick={showPopup} value={t('request-button-text')}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>

                {t('request-button-text')}
            </Button>
            <Popup
                isOpen={isOpen}
                onClose={hidePopup}
                title={t('request-assets-title')}
            >
                <div>
                    <p>{t('available-assets-title')}</p>
                    {user.availableAssets.map((assetId: string) => (
                        <Small key={assetId}>{assetId} </Small>
                    ))}
                </div>
                <Select onChange={handleChange}>
                    {assets.map((asset) => (
                        <option key={asset.id} value={asset.id}>
                            {asset.title}
                        </option>
                    ))}
                </Select>
                <Button value={''} onClick={handleRequest}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>

                    {t('request-button-text')}
                </Button>
            </Popup>
        </div>
    )
}
export default RequestAssetSection

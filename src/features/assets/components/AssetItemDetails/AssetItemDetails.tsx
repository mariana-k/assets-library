import { useTranslation } from 'next-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useGetItemByIdQuery } from '@/services/api'
import React, { FC, useEffect, useState } from 'react'
import { AssetItemDetailsProps } from '@/features/assets/components/AssetItemDetails/AssetItemDetails.types'
import H5 from '@/components/H5/H5'
import Button from '@/components/Button/Button'
import { addAssetToFavorites, selectUser } from '@/features/user/userSlice'
import Small from '@/components/Small/Small'

const ItemDetail: FC<AssetItemDetailsProps> = ({ itemId }) => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const { data, error, isLoading } = useGetItemByIdQuery(itemId)
    const { t } = useTranslation(['common'])

    if (isLoading) {
        return <div>{t('loading-asset-details')}</div>
    }

    if (error) {
        return <div>{t('error-message')}</div>
    }

    const handleRequest = () => {
        if (user.favoriteAssets.includes(data?.id)) {
            console.log(t('asset-already-saved-message'))
        } else {
            dispatch(addAssetToFavorites({ assetId: data.id }))
            console.log(
                t('saving-favorite-asset-message', {
                    selectedAssetId: data.id,
                })
            )
        }
    }

    return (
        <>
            <H5>
                {data?.id} - {data?.title}
            </H5>
            <p>{data?.body}</p>
            <div>
                <p>{t('favorite-assets-title')}</p>
                {user.favoriteAssets.map((assetId: number) => (
                    <Small key={assetId}>{assetId} </Small>
                ))}
            </div>
            <div></div>
            <Button onClick={handleRequest} type="primary">
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
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                    />
                </svg>

                {t('save-favorite-button-text')}
            </Button>
        </>
    )
}

export default ItemDetail

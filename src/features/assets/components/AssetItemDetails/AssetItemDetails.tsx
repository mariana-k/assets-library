import { useTranslation } from 'next-i18next'
import { useGetItemByIdQuery } from '@/services/api'
import React, { FC } from 'react'
import { AssetItemDetailsProps } from '@/features/assets/components/AssetItemDetails/AssetItemDetails.types'
import H5 from '@/components/H5/H5'

const ItemDetail: FC<AssetItemDetailsProps> = ({ itemId }) => {
    const { data, error, isLoading } = useGetItemByIdQuery(itemId)
    const { t } = useTranslation(['common'])
    if (isLoading) {
        return <div>{t('loading-asset-details')}</div>
    }

    if (error) {
        return <div>{t('error-message')}</div>
    }
    return (
        <div>
            <H5>
                {data?.id} - {data?.title}
            </H5>
            <p>{data?.body}</p>
        </div>
    )
}

export default ItemDetail

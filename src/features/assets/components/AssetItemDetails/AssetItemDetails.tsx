import { useGetItemByIdQuery } from '@/services/api'
import React, { FC } from 'react'
import { AssetItemDetailsProps } from './AssetItemDetails.types'
import H5 from '@/components/H5/H5'
const ItemDetail: FC<AssetItemDetailsProps> = ({ itemId }) => {
    const { data, error, isLoading } = useGetItemByIdQuery(itemId)
    console.log(data)
    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error loading item</div>
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

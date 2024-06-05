import React from 'react'
import { TH5Props } from '@/components/H5/H5.types'
import { H5Styles } from '@/components/H5/H5.styles'

const H5: React.FC<TH5Props> = ({ children, dataTestId }) => {
    return (
        <h5 data-testid={dataTestId} className={H5Styles}>
            {children}
        </h5>
    )
}

export default H5

import React from 'react'
import { TSmallProps } from '@/components/Small/Small.types'
import { SmallStyles } from '@/components/Small/Small.styles'

const Small: React.FC<TSmallProps> = ({ children, className }) => {
    return <small className={`${SmallStyles} ${className}`}>{children}</small>
}

export default Small

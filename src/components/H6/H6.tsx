import React from 'react'
import { TH6Props } from '@/components/H6/H6.types'
import { H6Styles } from '@/components/H6/H6.styles'

const H6: React.FC<TH6Props> = ({ children, className }) => {
    return <h6 className={`${H6Styles} ${className}`}>{children}</h6>
}

export default H6

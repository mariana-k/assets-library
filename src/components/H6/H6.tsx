import React from 'react'
import { TH6Props } from '@/components/H6/H6.types'
import { H6Styles } from '@/components/H6/H6.styles'

const H6: React.FC<TH6Props> = ({ children }) => {
    return <h6 className={H6Styles}>{children}</h6>
}

export default H6

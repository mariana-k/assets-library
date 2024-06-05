import React from 'react'
import { TH2Props } from '@/components/H2/H2.types'
import { H2Styles } from '@/components/H2/H2.styles'

const H2: React.FC<TH2Props> = ({ children }) => {
    return <h2 className={H2Styles}>{children}</h2>
}

export default H2

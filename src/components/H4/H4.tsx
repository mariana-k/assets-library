import React from 'react'
import { TH4Props } from '@/components/H4/H4.types'
import { H4Styles } from '@/components/H4/H4.styles'

const H4: React.FC<TH4Props> = ({ children }) => {
    return <h4 className={H4Styles}>{children}</h4>
}

export default H4

import React from 'react'
import { TH3Props } from '@/components/H3/H3.types'
import { H3Styles } from '@/components/H3/H3.styles'

const H3: React.FC<TH3Props> = ({ children }) => {
    return <h3 className={H3Styles}>{children}</h3>
}

export default H3

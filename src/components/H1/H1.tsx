import React from 'react'
import { TH1Props } from '@/components/H1/H1.types'
import { H1Styles } from '@/components/H1/H1.styles'

const H1: React.FC<TH1Props> = ({ children }) => {
    return <h1 className={H1Styles}>{children}</h1>
}

export default H1

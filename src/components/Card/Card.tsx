import React from 'react'
import { TCardProps } from '@/components/Card/Card.types'
import { CardStyles } from '@/components/Card/Card.styles'

const Card: React.FC<TCardProps> = ({ children }) => {
    return <div className={CardStyles}>{children}</div>
}

export default Card

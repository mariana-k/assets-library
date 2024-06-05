import React, { FC } from 'react'
import { TContainerProps } from '@/components/Container/Container.types'
import { ContainerStyles } from '@/components/Container/Container.styles'

const Container: FC<TContainerProps> = ({ children }) => {
    return <div className={ContainerStyles}>{children}</div>
}

export default Container

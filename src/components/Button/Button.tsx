import React, { FC } from 'react'
import { ButtonStyles } from '@/components/Button/Button.styles'
import { TButtonProps } from '@/components/Button/Button.types'

const Button: FC<TButtonProps> = ({ children, onClick, value }) => {
    return (
        <button className={ButtonStyles} value={value} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button

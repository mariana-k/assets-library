import React, { FC } from 'react'
import {
    ButtonStyles,
    PrimaryButtonStyles,
    SecondaryButtonStyles,
} from '@/components/Button/Button.styles'
import { TButtonProps } from '@/components/Button/Button.types'

const Button: FC<TButtonProps> = ({ children, onClick, type }) => {
    return (
        <button
            className={`${ButtonStyles} ${type === 'primary' ? PrimaryButtonStyles : SecondaryButtonStyles}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button

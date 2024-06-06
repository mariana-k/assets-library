import React, { FC } from 'react'
import {
    TabButtonActiveStyles,
    TabButtonInactiveStyles,
    TabButtonStyles,
} from '@/components/TabButton/TabButton.styles'
import { TTabButtonProps } from '@/components/TabButton/TabButton.types'

const TabButton: FC<TTabButtonProps> = ({
    children,
    onClick,
    value,
    isActive,
}) => {
    return (
        <button
            className={`${TabButtonStyles} ${isActive ? TabButtonActiveStyles : TabButtonInactiveStyles}`}
            value={value}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default TabButton

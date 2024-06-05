import React from 'react'
import { TPopupProps } from '@/components/Popup/Popup.types'
import {
    PopupStyles,
    PopupCloseButtonStyles,
} from '@/components/Popup/Popup.styles'
import { createPortal } from 'react-dom'

const Popup: React.FC<TPopupProps> = ({ children, isOpen, onClose }) => {
    if (!isOpen) {
        return null
    }
    return createPortal(
        <div className={PopupStyles}>
            <button onClick={onClose} className={PopupCloseButtonStyles}>
                x
            </button>
            {children}
        </div>,
        document.body
    )
}

export default Popup

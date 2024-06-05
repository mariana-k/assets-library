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
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                    />
                </svg>
            </button>
            {children}
        </div>,
        document.body
    )
}

export default Popup

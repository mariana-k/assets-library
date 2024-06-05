import React from 'react'
import { TPopupProps } from '@/components/Popup/Popup.types'
import { PopupStyles } from '@/components/Popup/Popup.styles'

const Popup: React.FC<TPopupProps> = ({ children }) => {
    return <div className={PopupStyles}>{children}</div>
}

export default Popup

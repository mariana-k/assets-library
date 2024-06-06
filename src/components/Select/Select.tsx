import React, { FC } from 'react'
import { SelectStyles } from '@/components/Select/Select.styles'
import { TSelectProps } from '@/components/Select/Select.types'
const Select: FC<TSelectProps> = ({ children, onChange }) => {
    return (
        <select className={SelectStyles} onChange={onChange}>
            {children}
        </select>
    )
}

export default Select

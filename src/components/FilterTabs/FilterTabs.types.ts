import { Dispatch, SetStateAction } from 'react'
export type TFilterTitles = {
    id: string
    title: string
    subtitle: string
}
export type TFilterTabsProps = {
    filterProperties: TFilterTitles[]
    setFilterProperty: Dispatch<SetStateAction<string>>
    activeFilterProperty: string
}

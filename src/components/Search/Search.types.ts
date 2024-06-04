import { Dispatch, SetStateAction } from 'react'

export type TSearchProps = {
    searchTerm: string
    setSearchTerm: Dispatch<SetStateAction<string>>
}

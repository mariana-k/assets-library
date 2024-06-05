import React, { FC } from 'react'
import { TSearchProps } from '@/components/Search/Search.types'
import { debounce } from 'lodash'
import { ChangeEvent, useCallback, useState } from 'react'
import {
    SearchHistoryButtonStyles,
    SearchHistoryStyles,
    SearchInputStyles,
    SearchWrapperStyles,
} from '@/components/Search/Search.styles'

const Search: FC<TSearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchHistory, setSearchHistory] = useState<string[]>([])

    const debouncedSearch = useCallback(
        debounce((query) => {
            onSearch(query)
            setSearchHistory((prev) => {
                const historySet = new Set([...prev, query])
                return Array.from(historySet)
            })
        }, 500),
        []
    )
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value
        setSearchTerm(value)
        debouncedSearch(value)
    }
    const handleSearchFromHistory = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        const value = (e.target as HTMLButtonElement).value
        setSearchTerm(value)
        debouncedSearch(value)
    }

    return (
        <div className={SearchWrapperStyles}>
            <input
                type="search"
                className={SearchInputStyles}
                id="exampleSearch"
                placeholder="Type query"
                value={searchTerm}
                onChange={handleChange}
            />
            <div className={SearchHistoryStyles}>
                {searchHistory.map((history: string) => (
                    <button
                        key={history}
                        value={history}
                        className={SearchHistoryButtonStyles}
                        onClick={handleSearchFromHistory}
                    >
                        {history}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Search

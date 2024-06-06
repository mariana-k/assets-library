import React, { FC } from 'react'
import { TSearchProps } from '@/components/Search/Search.types'
import { debounce } from 'lodash'
import { ChangeEvent, useCallback, useState } from 'react'
import {
    SearchHistoryButtonStyles,
    SearchHistoryStyles,
    SearchIconWrapperStyles,
    SearchInputStyles,
    SearchInputWrapperStyles,
    SearchWrapperStyles,
} from '@/components/Search/Search.styles'
import { useTranslation } from 'next-i18next'

const Search: FC<TSearchProps> = ({ onSearch }) => {
    const { t } = useTranslation(['common'])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchHistory, setSearchHistory] = useState<string[]>([])
    const minimumSearchLength = 5

    const debouncedSearch = useCallback(
        debounce((query) => {
            onSearch(query)
            if (query.length >= minimumSearchLength) {
                setSearchHistory((prev) => {
                    const historySet = new Set([...prev, query])
                    return Array.from(historySet)
                })
            }
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
            <div className={SearchInputWrapperStyles}>
                <div className={SearchIconWrapperStyles}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    className={SearchInputStyles}
                    placeholder={t('search-placeholder')}
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>

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

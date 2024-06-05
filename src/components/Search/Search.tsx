import React, { FC } from 'react'
import { TSearchProps } from '@/components/Search/Search.types'
import { debounce } from 'lodash'
import { ChangeEvent, useCallback, useState } from 'react'

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
        <div className="mb-3 xl:w-96">
            <input
                type="search"
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                id="exampleSearch"
                placeholder="Type query"
                value={searchTerm}
                onChange={handleChange}
            />
            <div className="flex flex-wrap gap-2">
                {searchHistory.map((history: string) => (
                    <button
                        key={history}
                        value={history}
                        className="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded"
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

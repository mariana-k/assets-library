import React, { FC } from 'react'
import { TFilterTabsProps } from '@/components/FilterTabs/FilterTabs.types'
import TabButton from '../TabButton/TabButton'

const FilterTabs: FC<TFilterTabsProps> = ({
    filterProperties,
    setFilterProperty,
}) => {
    return (
        <div className="mb-3 xl:w-96">
            {filterProperties.map((filterProperty) => (
                <TabButton
                    key={filterProperty.title}
                    value={filterProperty.title}
                    onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) =>
                        setFilterProperty((e.target as HTMLButtonElement).value)
                    }
                >
                    {filterProperty.title}
                </TabButton>
            ))}
        </div>
    )
}

export default FilterTabs

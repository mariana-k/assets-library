import React, { FC } from 'react'
import { TFilterTabsProps } from '@/components/FilterTabs/FilterTabs.types'
import TabButton from '@/components/TabButton/TabButton'
import { FilterTabsStyles } from '@/components/FilterTabs/FilterTabs.styles'

const FilterTabs: FC<TFilterTabsProps> = ({
    filterProperties,
    setFilterProperty,
    activeFilterProperty,
}) => {
    return (
        <div className={FilterTabsStyles}>
            {filterProperties.map((filterProperty) => (
                <TabButton
                    isActive={activeFilterProperty === filterProperty.id}
                    key={filterProperty.title}
                    value={filterProperty.id}
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

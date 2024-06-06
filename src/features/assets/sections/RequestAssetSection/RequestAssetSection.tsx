import React from 'react'
import { RequestAssetSectionStyles } from '@/features/assets/sections/RequestAssetSection/RequestAssetSection.styles'
import Button from '@/components/Button/Button'
import { useTranslation } from 'next-i18next'

const RequestAssetSection = () => {
    const { t } = useTranslation(['common'])
    const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        console.log((e.target as HTMLButtonElement).value)
    }

    return (
        <div className={RequestAssetSectionStyles}>
            <Button onClick={handleClick} value={t('request-button-text')}>
                {t('request-button-text')}
            </Button>
        </div>
    )
}
export default RequestAssetSection

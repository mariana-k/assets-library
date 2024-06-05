import React from 'react'
import AssetsListContainer from '@/features/assets/AssetsListContainer'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: React.FC = () => {
    return (
        <>
            <AssetsListContainer />
        </>
    )
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})
export default Home

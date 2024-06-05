import React from 'react'
import { TLoadingProps } from '@/components/Loading/Loading.types'
import { LoadingStyles } from '@/components/Loading/Loading.styles'

const Loading: React.FC<TLoadingProps> = ({ children, dataTestId }) => {
    return (
        <div className={LoadingStyles} data-testid={`${dataTestId}-wrapper`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width={24}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
            </svg>{' '}
            <p data-testid={`${dataTestId}-content`}>{children}</p>
        </div>
    )
}

export default Loading

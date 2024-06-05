import React from 'react'
import { render, screen } from '@testing-library/react'
import Loading from '@/components/Loading/Loading'

test('renders assets library title', () => {
    render(<Loading dataTestId="loading-container">Test loading</Loading>)
    const loadingContainer = screen.queryAllByTestId(
        'loading-container-wrapper'
    )
    expect(loadingContainer).toHaveLength(1)
    const loadingContent = screen.queryAllByTestId('loading-container-content')
    expect(loadingContent).toHaveLength(1)
})

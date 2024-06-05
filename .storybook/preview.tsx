import React from 'react'
import { Preview } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import '!style-loader!css-loader!postcss-loader!../src/styles/globals.css'
const preview: Preview = {
    decorators: [
        (Story) => (
            <I18nextProvider i18n={i18n}>
                <div style={{ margin: '3em' }}>
                    {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                    <Story />
                </div>
            </I18nextProvider>
        ),
    ],
}

export default preview

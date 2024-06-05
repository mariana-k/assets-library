import type { Meta, StoryObj } from '@storybook/react'
import Loading from './Loading'

const meta = {
    title: 'Loading',
    component: Loading,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        dataTestId: { control: 'text' },
        children: { control: 'text' },
    },
    args: {
        dataTestId: 'loading',
        children: 'Loading...',
    },
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const LoadingStory: Story = {
    args: {
        dataTestId: 'loading',
        children: 'Loading...',
    },
}

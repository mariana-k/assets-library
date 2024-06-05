import { filterAssets } from '@/features/assets/Assets.utils'

describe('filterAssets', () => {
    const assets = [
        {
            id: '1',
            title: 'Title 1',
            content: 'Content 1',
            type: 'Featured',
            image: 'https://placehold.co/150',
        },
        {
            id: '2',
            title: 'Title 2',
            content: 'Content 2',
            type: 'KPI',
            image: 'https://placehold.co/150',
        },
        {
            id: '3',
            title: 'Title 3',
            content: 'Content 3',
            type: 'Featured',
            image: 'https://placehold.co/150',
        },
    ]

    it('should filter assets by type and search term', () => {
        const filteredAssets = filterAssets(assets, 'Featured', 'Title 1')
        expect(filteredAssets).toEqual([
            {
                id: '1',
                title: 'Title 1',
                content: 'Content 1',
                type: 'Featured',
                image: 'https://placehold.co/150',
            },
        ])
    })

    it('should not filter assets if type does not match', () => {
        const filteredAssets = filterAssets(assets, 'Test', 'Title 1')
        expect(filteredAssets).toEqual([])
    })

    it('should not filter assets if search term does not match', () => {
        const filteredAssets = filterAssets(assets, 'Featured', 'unknown')
        expect(filteredAssets).toEqual([])
    })

    it('should not filter assets if both type and search term do not match', () => {
        const filteredAssets = filterAssets(assets, 'Test', 'test')
        expect(filteredAssets).toEqual([])
    })
})

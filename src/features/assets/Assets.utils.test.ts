import { filterAssets } from '@/features/assets/Assets.utils'

describe('filterAssets', () => {
    const assets = [
        {
            id: '1',
            title: 'Title 1 - Occaecati',
            content:
                'Content 1 - et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut. et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
            type: 'featured',
            image: 'https://placehold.co/150',
            isTrending: true,
        },
        {
            id: '2',
            title: 'Title 2 - Voluptatem',
            content:
                'Content 2 - et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut. et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
            type: 'kpi',
            image: 'https://placehold.co/150',
            date: '06/27/2024',
        },
        {
            id: '3',
            title: 'Title 3  - Occaecati Omnis Eligendi',
            content:
                'Content 3 - et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut. et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
            type: 'featured',
            image: 'https://placehold.co/150',
            date: '06/27/2024',
            isTrending: true,
        },
    ]

    it('should filter assets by type and search term', () => {
        const filteredAssets = filterAssets(assets, 'Title 1', 'featured')
        expect(filteredAssets).toEqual([
            {
                id: '1',
                title: 'Title 1 - Occaecati',
                content:
                    'Content 1 - et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut. et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
                type: 'featured',
                image: 'https://placehold.co/150',
                isTrending: true,
            },
        ])
    })
    it('should not filter assets if type does not match', () => {
        const filteredAssets = filterAssets(assets, 'Title 1', 'sometype')
        expect(filteredAssets).toEqual([])
    })

    it('should not filter assets if search term does not match', () => {
        const filteredAssets = filterAssets(
            assets,
            'Some search term',
            'featured'
        )
        expect(filteredAssets).toEqual([])
    })

    it('should not filter assets if both type and search term do not match', () => {
        const filteredAssets = filterAssets(
            assets,
            'Some search term',
            'sometype'
        )
        expect(filteredAssets).toEqual([])
    })
})

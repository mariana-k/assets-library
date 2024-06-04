import Card from '@/components/Card/Card'
import H6 from '@/components/H6/H6'
import { TAsset } from '@/features/assets/Assets.types'

const AssetItem: React.FC<{ asset: TAsset }> = ({ asset }) => {
    return (
        <Card key={asset.id}>
            <div className="flex">
                <img
                    className="flex-none w-14 block mr-4 rounded-md"
                    src={asset.image}
                    alt={asset.title}
                />
                <div className="flex-1">
                    <H6>{asset.title}</H6>
                    <p>{asset.content}</p>
                </div>
            </div>
        </Card>
    )
}

export default AssetItem

import Card from '@/components/Card/Card'
import H6 from '@/components/H6/H6'
import { TAsset } from '@/features/assets/Assets.types'
import {
    AssetItemWrapperStyles,
    AssetItemImageStyles,
    AssetItemContentStyles,
} from './AssetItem.styles'

const AssetItem: React.FC<{ asset: TAsset }> = ({ asset }) => {
    return (
        <Card key={asset.id}>
            <div className={AssetItemWrapperStyles}>
                <img
                    className={AssetItemImageStyles}
                    src={asset.image}
                    alt={asset.title}
                />
                <div className={AssetItemContentStyles}>
                    <H6>{asset.title}</H6>
                    <p>{asset.content}</p>
                </div>
            </div>
        </Card>
    )
}

export default AssetItem

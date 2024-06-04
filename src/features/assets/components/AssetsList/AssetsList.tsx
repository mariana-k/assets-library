import { TAsset } from '../../Assets.types'
import AssetItem from '@/features/assets/components/AssetItem/AssetItem'
import { AssetsListStyles } from './AssetsList.styles'

const AssetsList: React.FC<{ assets: TAsset[] }> = ({ assets }) => {
    const renderAssets = assets?.map((asset: TAsset) => (
        <AssetItem key={asset.id} asset={asset} />
    ))
    return <div className={AssetsListStyles}>{renderAssets}</div>
}

export default AssetsList

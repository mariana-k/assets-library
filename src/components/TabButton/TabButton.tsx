import { TabButtonStyles } from '@/components/TabButton/TabButton.styles'
import { TTabButtonProps } from '@/components/TabButton/TabButton.types'

const TabButton: React.FC<TTabButtonProps> = ({ onClick, value }) => {
    return (
        <button className={TabButtonStyles} value={value} onClick={onClick}>
            {value}
        </button>
    )
}

export default TabButton

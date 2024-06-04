import { TContainerProps } from '@/components/Container/Container.types'
import { ContainerStyles } from '@/components/Container/Container.styles'

const Container: React.FC<TContainerProps> = ({ children }) => {
    return <div className={ContainerStyles}>{children}</div>
}

export default Container

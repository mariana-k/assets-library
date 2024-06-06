export type TButtonProps = {
    children: React.ReactNode
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    type: 'primary' | 'secondary'
}

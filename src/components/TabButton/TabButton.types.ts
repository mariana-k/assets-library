export type TTabButtonProps = {
    children: React.ReactNode
    value: string
    isActive: boolean
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

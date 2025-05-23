import Button from '@mui/material/Button'
import type { SxProps, Theme } from '@mui/material/styles'

export type ConnectWalletButtonProps = {
  onConnectWallet: () => void
  label: string
  disabled?: boolean
  sx?: SxProps<Theme>
}

export const ConnectWalletButton = ({ onConnectWallet, label, ...props }: ConnectWalletButtonProps) => (
  <Button
    style={{ borderRadius: '8px' }}
    size="small"
    color="primary"
    onClick={onConnectWallet}
    data-testid="navigation-connect-wallet"
    {...props}
  >
    {label}
  </Button>
)

import MARTIAN_ICON_URL from 'assets/martian.png'
import { ConnectMartian, useAccount, useWallet } from 'state/wallets/hooks'
import { getWalletName, WalletType } from 'state/wallets/types'

import Option from './Option'

const BASE_PROPS = {
  color: '#6748FF',
  icon: MARTIAN_ICON_URL,
  id: 'martian',
}

export default function MartianOption() {
  const account = useAccount()
  const walletType = useWallet()
  const isActive = walletType === WalletType.MARTIAN && account !== undefined
  return (
    <Option
      {...BASE_PROPS}
      isActive={isActive}
      onClick={async () => {
        if ('martian' in window) {
          await ConnectMartian()
        } else {
          window.open('https://www.martianwallet.xyz/', '_blank')
        }
      }}
      header={getWalletName(WalletType.MARTIAN)}
    />
  )
}
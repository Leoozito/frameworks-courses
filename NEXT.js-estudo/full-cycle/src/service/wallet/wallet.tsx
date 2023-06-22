import { WalletAsset } from '../../models'

export const useApplication = () => {
    async function getWalletAssets(wallet_id: number): Promise<WalletAsset[]> {
        const response = await fetch(`http://localhost:8000/wallets/${wallet_id}/assets`)
        return response.json()
    }

    return {
        getWalletAssets,
    }
}

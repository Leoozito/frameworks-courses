import { useApplication } from "../../service/wallet/wallet"

export default async function HomePage({ params }: {
    params: {wallet_id: string}
}) {
    const service = useApplication()
    const walletAssets = await service.getWalletAssets(Number(params.wallet_id))
    return (
        <div>
            <h1>Meus investimentos</h1>
            <ul>
                {walletAssets.map((walletAssets) => (
                    <li key={walletAssets.id}>
                        {walletAssets.Asset.id} - {walletAssets.shares} - R${" "}{walletAssets.Asset.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}
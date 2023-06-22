export type Asset = {
    id: string;
    symbol: string;
    price: string;
};

export type WalletAsset = {
    id: string;
    wallet_id: string;
    asset_id: string;
    shares: string
    Asset: Asset;
};


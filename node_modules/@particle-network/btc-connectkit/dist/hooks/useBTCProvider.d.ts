export declare const useBTCProvider: () => {
    provider: any;
    accounts: string[];
    getPublicKey: () => Promise<string>;
    signMessage: (message: string) => Promise<string>;
    getNetwork: () => Promise<"livenet" | "testnet">;
    switchNetwork: (network: "livenet" | "testnet") => Promise<void>;
    sendBitcoin: (toAddress: string, satoshis: number, options?: {
        feeRate: number;
    } | undefined) => Promise<string>;
    sendInscription: (address: string, inscriptionId: string, options?: {
        feeRate: number;
    }) => Promise<{
        txid: string;
    }>;
};

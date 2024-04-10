import { BaseConnector } from './base';
export declare abstract class InjectedConnector extends BaseConnector {
    private propertity;
    constructor(propertity: string);
    isReady(): boolean;
    requestAccounts(): Promise<string[]>;
    getAccounts(): Promise<string[]>;
    getPublicKey(): Promise<string>;
    signMessage(signStr: string, type?: 'ecdsa' | 'bip322-simple'): Promise<string>;
    on(event: string, handler: (data?: unknown) => void): any;
    removeListener(event: string, handler: (data?: unknown) => void): any;
    getProvider(): any;
    getProviderOrThrow(): any;
    getNetwork(): Promise<'livenet' | 'testnet'>;
    switchNetwork(network: 'livenet' | 'testnet'): Promise<void>;
    sendBitcoin(toAddress: string, satoshis: number, options?: {
        feeRate: number;
    }): Promise<string>;
    sendInscription(address: string, inscriptionId: string, options?: {
        feeRate: number;
    }): Promise<{
        txid: string;
    }>;
    disconnect(): void;
}

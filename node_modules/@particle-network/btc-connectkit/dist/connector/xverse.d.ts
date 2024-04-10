/// <reference types="node" />
import EventEmitter from 'events';
import { BaseConnector, type WalletMetadata } from './base';
export declare class XverseConnector extends BaseConnector {
    #private;
    constructor();
    readonly metadata: WalletMetadata;
    isReady(): boolean;
    private loadAccounts;
    sendInscription(): Promise<{
        txid: string;
    }>;
    requestAccounts(): Promise<string[]>;
    getAccounts(): Promise<string[]>;
    getPublicKey(): Promise<string>;
    signMessage(signStr: string): Promise<string>;
    on(event: string, handler: (data?: unknown) => void): EventEmitter;
    removeListener(event: string, handler: (data?: unknown) => void): EventEmitter;
    getProvider(): import("sats-connect").BitcoinProvider | undefined;
    getNetwork(): Promise<'livenet' | 'testnet'>;
    switchNetwork(): Promise<void>;
    sendBitcoin(toAddress: string, satoshis: number): Promise<string>;
    disconnect(): void;
}

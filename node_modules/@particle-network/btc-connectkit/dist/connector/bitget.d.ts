import { type WalletMetadata } from './base';
import { InjectedConnector } from './injected';
export declare class BitgetConnector extends InjectedConnector {
    readonly metadata: WalletMetadata;
    constructor();
}

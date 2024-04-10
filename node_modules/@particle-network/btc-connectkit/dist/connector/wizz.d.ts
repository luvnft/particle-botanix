import { type WalletMetadata } from './base';
import { InjectedConnector } from './injected';
export declare class WizzConnector extends InjectedConnector {
    readonly metadata: WalletMetadata;
    constructor();
}

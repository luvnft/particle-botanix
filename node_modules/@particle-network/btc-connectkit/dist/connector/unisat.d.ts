import { type WalletMetadata } from './base';
import { InjectedConnector } from './injected';
export declare class UnisatConnector extends InjectedConnector {
    readonly metadata: WalletMetadata;
    constructor();
}

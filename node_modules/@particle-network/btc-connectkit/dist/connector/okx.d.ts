import { type WalletMetadata } from './base';
import { InjectedConnector } from './injected';
export declare class OKXConnector extends InjectedConnector {
    readonly metadata: WalletMetadata;
    constructor();
}

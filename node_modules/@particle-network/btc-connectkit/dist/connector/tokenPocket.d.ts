import { type WalletMetadata } from './base';
import { InjectedConnector } from './injected';
export declare class TokenPocketConnector extends InjectedConnector {
    readonly metadata: WalletMetadata;
    constructor();
}

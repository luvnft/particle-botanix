import type { IEthereumProvider, JsonRpcRequest, SendTransactionParams } from '@particle-network/aa';
import { type AASignerProvider } from '.';
export declare class EthereumProvider implements IEthereumProvider {
    sendUserOp: (params: SendTransactionParams, forceHideConfirmModal?: boolean) => Promise<string>;
    signer?: AASignerProvider | undefined;
    account?: string | undefined;
    constructor(sendUserOp: (params: SendTransactionParams, forceHideConfirmModal?: boolean) => Promise<string>, signer?: AASignerProvider | undefined, account?: string | undefined);
    on(event: string, listener: any): this;
    once(event: string, listener: any): this;
    off(event: string, listener: any): this;
    removeListener(event: string, listener: any): this;
    request(arg: Partial<JsonRpcRequest>): Promise<any>;
}

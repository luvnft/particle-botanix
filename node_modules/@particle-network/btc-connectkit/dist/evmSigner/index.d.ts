import type { RequestArguments } from '@particle-network/aa';
import { type PublicClient } from 'viem';
export declare class AASignerProvider {
    supportChainIds: number[];
    projectId: string;
    clientKey: string;
    rpcUrls: Record<number, string> | undefined;
    private events;
    chainId: number;
    publicClient: PublicClient;
    constructor(supportChainIds: number[], projectId: string, clientKey: string, rpcUrls: Record<number, string> | undefined);
    request(arg: RequestArguments): Promise<string | boolean | string[] | import("viem").RpcFeeHistory | import("viem/_types/types/utils").Omit<import("viem/_types/types/utils").PartialBy<import("viem").TransactionLegacy<`0x${string}`, `0x${string}`, boolean, "0x0">, "yParity">, "typeHex"> | import("viem/_types/types/utils").Omit<import("viem/_types/types/utils").PartialBy<import("viem").TransactionEIP2930<`0x${string}`, `0x${string}`, boolean, "0x1">, "yParity">, "typeHex"> | import("viem/_types/types/utils").Omit<import("viem/_types/types/utils").PartialBy<import("viem").TransactionEIP1559<`0x${string}`, `0x${string}`, boolean, "0x2">, "yParity">, "typeHex"> | import("viem").RpcBlock | import("viem").RpcLog[] | import("viem").RpcProof | import("viem").RpcTransactionReceipt | import("viem").RpcUncle | null>;
    personalSign: (message: string) => Promise<string>;
    getPublicKey: () => Promise<string>;
    removeListener(event: string, listener: (...args: any[]) => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
    once(event: string, listener: any): this;
    off(event: string, listener: any): this;
    emit(event: string, ...args: any[]): void;
    getPublicClient: () => {
        account: undefined;
        batch?: {
            multicall?: boolean | {
                batchSize?: number | undefined;
                wait?: number | undefined;
            } | undefined;
        } | undefined;
        cacheTime: number;
        chain: undefined;
        key: string;
        name: string;
        pollingInterval: number;
        request: import("viem").EIP1193RequestFn<import("viem").PublicRpcSchema>;
        transport: import("viem").TransportConfig<"http", import("viem").EIP1193RequestFn> & {
            fetchOptions?: Omit<RequestInit, "body"> | undefined;
            url?: string | undefined;
        };
        type: string;
        uid: string;
        call: (parameters: import("viem").CallParameters<undefined>) => Promise<import("viem").CallReturnType>;
        createBlockFilter: () => Promise<{
            id: `0x${string}`;
            request: import("viem").EIP1193RequestFn<readonly [{
                Method: "eth_getFilterChanges";
                Parameters: [filterId: `0x${string}`];
                ReturnType: `0x${string}`[] | import("viem").RpcLog[];
            }, {
                Method: "eth_getFilterLogs";
                Parameters: [filterId: `0x${string}`];
                ReturnType: import("viem").RpcLog[];
            }, {
                Method: "eth_uninstallFilter";
                Parameters: [filterId: `0x${string}`];
                ReturnType: boolean;
            }]>;
            type: "block";
        }>;
        createContractEventFilter: <const TAbi extends readonly unknown[] | import("viem").Abi, TEventName extends import("viem").ContractEventName<TAbi> | undefined, TArgs extends import("viem/_types/types/contract").MaybeExtractEventArgsFromAbi<TAbi, TEventName> | undefined, TStrict extends boolean | undefined = undefined, TFromBlock extends bigint | import("viem").BlockTag | undefined = undefined, TToBlock extends bigint | import("viem").BlockTag | undefined = undefined>(args: import("viem").CreateContractEventFilterParameters<TAbi, TEventName, TArgs, TStrict, TFromBlock, TToBlock>) => Promise<import("viem").CreateContractEventFilterReturnType<TAbi, TEventName, TArgs, TStrict, TFromBlock, TToBlock>>;
        createEventFilter: <const TAbiEvent extends import("abitype").AbiEvent | undefined = undefined, const TAbiEvents extends readonly unknown[] | readonly import("abitype").AbiEvent[] | undefined = TAbiEvent extends import("abitype").AbiEvent ? [TAbiEvent] : undefined, TStrict_1 extends boolean | undefined = undefined, TFromBlock_1 extends bigint | import("viem").BlockTag | undefined = undefined, TToBlock_1 extends bigint | import("viem").BlockTag | undefined = undefined, _EventName extends string | undefined = import("viem/_types/types/contract").MaybeAbiEventName<TAbiEvent>, _Args extends import("viem/_types/types/contract").MaybeExtractEventArgsFromAbi<TAbiEvents, _EventName> | undefined = undefined>(args?: import("viem").CreateEventFilterParameters<TAbiEvent, TAbiEvents, TStrict_1, TFromBlock_1, TToBlock_1, _EventName, _Args> | undefined) => Promise<import("viem").Filter<"event", TAbiEvents, _EventName, _Args, TStrict_1, TFromBlock_1, TToBlock_1> extends infer T ? { [K in keyof T]: import("viem").Filter<"event", TAbiEvents, _EventName, _Args, TStrict_1, TFromBlock_1, TToBlock_1>[K]; } : never>;
        createPendingTransactionFilter: () => Promise<{
            id: `0x${string}`;
            request: import("viem").EIP1193RequestFn<readonly [{
                Method: "eth_getFilterChanges";
                Parameters: [filterId: `0x${string}`];
                ReturnType: `0x${string}`[] | import("viem").RpcLog[];
            }, {
                Method: "eth_getFilterLogs";
                Parameters: [filterId: `0x${string}`];
                ReturnType: import("viem").RpcLog[];
            }, {
                Method: "eth_uninstallFilter";
                Parameters: [filterId: `0x${string}`];
                ReturnType: boolean;
            }]>;
            type: "transaction";
        }>;
        estimateContractGas: <TChain extends import("viem").Chain | undefined, const abi extends readonly unknown[] | import("viem").Abi, functionName extends import("viem").ContractFunctionName<abi, "nonpayable" | "payable">, args extends import("viem").ContractFunctionArgs<abi, "nonpayable" | "payable", functionName>>(args: import("viem").EstimateContractGasParameters<abi, functionName, args, TChain>) => Promise<bigint>;
        estimateGas: (args: import("viem").EstimateGasParameters<undefined>) => Promise<bigint>;
        getBalance: (args: import("viem").GetBalanceParameters) => Promise<bigint>;
        getBlock: <TIncludeTransactions extends boolean = false, TBlockTag extends import("viem").BlockTag = "latest">(args?: import("viem").GetBlockParameters<TIncludeTransactions, TBlockTag> | undefined) => Promise<import("viem").GetBlockReturnType<undefined, TIncludeTransactions, TBlockTag>>;
        getBlockNumber: (args?: import("viem").GetBlockNumberParameters | undefined) => Promise<bigint>;
        getBlockTransactionCount: (args?: import("viem").GetBlockTransactionCountParameters | undefined) => Promise<number>;
        getBytecode: (args: import("viem").GetBytecodeParameters) => Promise<import("viem").GetBytecodeReturnType>;
        getChainId: () => Promise<number>;
        getContractEvents: <const abi_1 extends readonly unknown[] | import("viem").Abi, eventName extends import("viem").ContractEventName<abi_1> | undefined = undefined, strict extends boolean | undefined = undefined, fromBlock extends bigint | import("viem").BlockTag | undefined = undefined, toBlock extends bigint | import("viem").BlockTag | undefined = undefined>(args: import("viem/_types/actions/public/getContractEvents").GetContractEventsParameters<abi_1, eventName, strict, fromBlock, toBlock>) => Promise<import("viem/_types/actions/public/getContractEvents").GetContractEventsReturnType<abi_1, eventName, strict, fromBlock, toBlock>>;
        getEnsAddress: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            coinType?: number | undefined;
            name: string;
            universalResolverAddress?: `0x${string}` | undefined;
        }) => Promise<import("viem").GetEnsAddressReturnType>;
        getEnsAvatar: (args: {
            name: string;
            blockNumber?: bigint | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            universalResolverAddress?: `0x${string}` | undefined;
            gatewayUrls?: import("viem").AssetGatewayUrls | undefined;
        }) => Promise<import("viem/_types/actions/ens/getEnsAvatar").GetEnsAvatarReturnType>;
        getEnsName: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            address: `0x${string}`;
            universalResolverAddress?: `0x${string}` | undefined;
        }) => Promise<import("viem").GetEnsNameReturnType>;
        getEnsResolver: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            name: string;
            universalResolverAddress?: `0x${string}` | undefined;
        }) => Promise<`0x${string}`>;
        getEnsText: (args: {
            blockNumber?: bigint | undefined;
            blockTag?: import("viem").BlockTag | undefined;
            name: string;
            key: string;
            universalResolverAddress?: `0x${string}` | undefined;
        }) => Promise<import("viem/_types/actions/ens/getEnsText").GetEnsTextReturnType>;
        getFeeHistory: (args: import("viem").GetFeeHistoryParameters) => Promise<import("viem").GetFeeHistoryReturnType>;
        estimateFeesPerGas: <TChainOverride extends import("viem").Chain | undefined = undefined, TType extends import("viem").FeeValuesType = "eip1559">(args?: import("viem").EstimateFeesPerGasParameters<undefined, TChainOverride, TType> | undefined) => Promise<import("viem").EstimateFeesPerGasReturnType>;
        getFilterChanges: <TFilterType extends import("viem/_types/types/filter").FilterType, const TAbi_1 extends readonly unknown[] | import("viem").Abi | undefined, TEventName_1 extends string | undefined, TStrict_2 extends boolean | undefined = undefined, TFromBlock_2 extends bigint | import("viem").BlockTag | undefined = undefined, TToBlock_2 extends bigint | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetFilterChangesParameters<TFilterType, TAbi_1, TEventName_1, TStrict_2, TFromBlock_2, TToBlock_2>) => Promise<import("viem").GetFilterChangesReturnType<TFilterType, TAbi_1, TEventName_1, TStrict_2, TFromBlock_2, TToBlock_2>>;
        getFilterLogs: <const TAbi_2 extends readonly unknown[] | import("viem").Abi | undefined, TEventName_2 extends string | undefined, TStrict_3 extends boolean | undefined = undefined, TFromBlock_3 extends bigint | import("viem").BlockTag | undefined = undefined, TToBlock_3 extends bigint | import("viem").BlockTag | undefined = undefined>(args: import("viem").GetFilterLogsParameters<TAbi_2, TEventName_2, TStrict_3, TFromBlock_3, TToBlock_3>) => Promise<import("viem").GetFilterLogsReturnType<TAbi_2, TEventName_2, TStrict_3, TFromBlock_3, TToBlock_3>>;
        getGasPrice: () => Promise<bigint>;
        getLogs: <const TAbiEvent_1 extends import("abitype").AbiEvent | undefined = undefined, const TAbiEvents_1 extends readonly unknown[] | readonly import("abitype").AbiEvent[] | undefined = TAbiEvent_1 extends import("abitype").AbiEvent ? [TAbiEvent_1] : undefined, TStrict_4 extends boolean | undefined = undefined, TFromBlock_4 extends bigint | import("viem").BlockTag | undefined = undefined, TToBlock_4 extends bigint | import("viem").BlockTag | undefined = undefined>(args?: import("viem").GetLogsParameters<TAbiEvent_1, TAbiEvents_1, TStrict_4, TFromBlock_4, TToBlock_4> | undefined) => Promise<import("viem").GetLogsReturnType<TAbiEvent_1, TAbiEvents_1, TStrict_4, TFromBlock_4, TToBlock_4>>;
        getProof: (args: import("viem").GetProofParameters) => Promise<import("viem").GetProofReturnType>;
        estimateMaxPriorityFeePerGas: <TChainOverride_1 extends import("viem").Chain | undefined = undefined>(args?: {
            chain: TChainOverride_1 | null;
        } | undefined) => Promise<bigint>;
        getStorageAt: (args: import("viem").GetStorageAtParameters) => Promise<import("viem").GetStorageAtReturnType>;
        getTransaction: <TBlockTag_1 extends import("viem").BlockTag = "latest">(args: import("viem").GetTransactionParameters<TBlockTag_1>) => Promise<import("viem").GetTransactionReturnType<undefined, TBlockTag_1>>;
        getTransactionConfirmations: (args: import("viem").GetTransactionConfirmationsParameters<undefined>) => Promise<bigint>;
        getTransactionCount: (args: import("viem").GetTransactionCountParameters) => Promise<number>;
        getTransactionReceipt: (args: import("viem").GetTransactionReceiptParameters) => Promise<import("viem").TransactionReceipt>;
        multicall: <const contracts extends readonly unknown[], allowFailure extends boolean = true>(args: import("viem").MulticallParameters<contracts, allowFailure>) => Promise<import("viem").MulticallReturnType<contracts, allowFailure>>;
        prepareTransactionRequest: <TParameterType extends import("viem").PrepareTransactionRequestParameterType, TChainOverride_2 extends import("viem").Chain | undefined = undefined, TAccountOverride extends `0x${string}` | import("viem").Account | undefined = undefined>(args: import("viem").PrepareTransactionRequestParameters<undefined, import("viem").Account | undefined, TChainOverride_2, TAccountOverride, TParameterType>) => Promise<import("viem").PrepareTransactionRequestReturnType<import("viem").Chain, import("viem").Account | undefined, TChainOverride_2, TAccountOverride, TParameterType>>;
        readContract: <const abi_2 extends readonly unknown[] | import("viem").Abi, functionName_1 extends import("viem").ContractFunctionName<abi_2, "pure" | "view">, args_1 extends import("viem").ContractFunctionArgs<abi_2, "pure" | "view", functionName_1>>(args: import("viem").ReadContractParameters<abi_2, functionName_1, args>) => Promise<import("viem").ReadContractReturnType<abi_2, functionName_1, args>>;
        sendRawTransaction: (args: import("viem").SendRawTransactionParameters) => Promise<`0x${string}`>;
        simulateContract: <const abi_3 extends readonly unknown[] | import("viem").Abi, functionName_2 extends import("viem").ContractFunctionName<abi_3, "nonpayable" | "payable">, args_2 extends import("viem").ContractFunctionArgs<abi_3, "nonpayable" | "payable", functionName_2>, chainOverride extends import("viem").Chain | undefined, accountOverride extends `0x${string}` | import("viem").Account | undefined = undefined>(args: import("viem").SimulateContractParameters<abi_3, functionName_2, args_2, undefined, chainOverride, accountOverride>) => Promise<import("viem").SimulateContractReturnType<abi_3, functionName_2, args_2, undefined, import("viem").Account | undefined, chainOverride, accountOverride>>;
        verifyMessage: (args: import("viem/_types/actions/public/verifyMessage").VerifyMessageParameters) => Promise<boolean>;
        verifyTypedData: (args: import("viem/_types/actions/public/verifyTypedData").VerifyTypedDataParameters) => Promise<boolean>;
        uninstallFilter: (args: import("viem").UninstallFilterParameters) => Promise<boolean>;
        waitForTransactionReceipt: (args: import("viem").WaitForTransactionReceiptParameters<undefined>) => Promise<import("viem").TransactionReceipt>;
        watchBlockNumber: (args: import("viem").WatchBlockNumberParameters) => import("viem").WatchBlockNumberReturnType;
        watchBlocks: <TIncludeTransactions_1 extends boolean = false, TBlockTag_2 extends import("viem").BlockTag = "latest">(args: import("viem").WatchBlocksParameters<import("viem").HttpTransport, undefined, TIncludeTransactions_1, TBlockTag_2>) => import("viem").WatchBlocksReturnType;
        watchContractEvent: <const TAbi_3 extends readonly unknown[] | import("viem").Abi, TEventName_3 extends import("viem").ContractEventName<TAbi_3>, TStrict_5 extends boolean | undefined = undefined>(args: import("viem").WatchContractEventParameters<TAbi_3, TEventName_3, TStrict_5, import("viem").HttpTransport>) => import("viem").WatchContractEventReturnType;
        watchEvent: <const TAbiEvent_2 extends import("abitype").AbiEvent | undefined = undefined, const TAbiEvents_2 extends readonly unknown[] | readonly import("abitype").AbiEvent[] | undefined = TAbiEvent_2 extends import("abitype").AbiEvent ? [TAbiEvent_2] : undefined, TStrict_6 extends boolean | undefined = undefined>(args: import("viem").WatchEventParameters<TAbiEvent_2, TAbiEvents_2, TStrict_6, import("viem").HttpTransport>) => import("viem").WatchEventReturnType;
        watchPendingTransactions: (args: import("viem").WatchPendingTransactionsParameters<import("viem").HttpTransport>) => import("viem").WatchPendingTransactionsReturnType;
        extend: <const client extends {
            [x: string]: unknown;
            account?: undefined;
            batch?: undefined;
            cacheTime?: undefined;
            chain?: undefined;
            key?: undefined;
            name?: undefined;
            pollingInterval?: undefined;
            request?: undefined;
            transport?: undefined;
            type?: undefined;
            uid?: undefined;
        } & Partial<Pick<import("viem").PublicActions, "call" | "createContractEventFilter" | "createEventFilter" | "estimateContractGas" | "estimateGas" | "getBlock" | "getBlockNumber" | "getChainId" | "getContractEvents" | "getEnsText" | "getFilterChanges" | "getGasPrice" | "getLogs" | "getTransaction" | "getTransactionCount" | "getTransactionReceipt" | "prepareTransactionRequest" | "readContract" | "sendRawTransaction" | "simulateContract" | "uninstallFilter" | "watchBlockNumber" | "watchContractEvent"> & Pick<import("viem").WalletActions, "sendTransaction" | "writeContract">>>(fn: (client: import("viem").Client<import("viem").HttpTransport, undefined, undefined, import("viem").PublicRpcSchema, import("viem").PublicActions<import("viem").HttpTransport, undefined>>) => client) => import("viem").Client<import("viem").HttpTransport, undefined, undefined, import("viem").PublicRpcSchema, { [K_1 in keyof client]: client[K_1]; } & import("viem").PublicActions<import("viem").HttpTransport, undefined>>;
    };
}

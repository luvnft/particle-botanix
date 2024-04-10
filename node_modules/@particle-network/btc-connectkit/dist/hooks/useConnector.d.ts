export declare const useConnector: () => {
    connectors: import("..").BaseConnector[];
    connect: (connectorId: string) => Promise<void>;
};

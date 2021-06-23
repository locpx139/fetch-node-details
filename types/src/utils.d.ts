import { AbiType, StateMutabilityType } from "web3-utils";
export interface INodePub {
    X: string;
    Y: string;
}
export interface INodeDetails {
    currentEpoch: string;
    nodeListAddress: string;
    torusNodeEndpoints: string[];
    torusNodePub: INodePub[];
    torusIndexes: number[];
    updated: boolean;
}
export interface INodeEndpoint {
    declaredIp: string;
    pubKx: string;
    pubKy: string;
}
export declare const abi: {
    constant: boolean;
    inputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    name: string;
    outputs: {
        internalType: string;
        name: string;
        type: string;
    }[];
    payable: boolean;
    stateMutability: StateMutabilityType;
    type: AbiType;
}[];

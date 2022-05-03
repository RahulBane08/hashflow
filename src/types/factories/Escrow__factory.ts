/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { Escrow, EscrowInterface } from "../Escrow";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "marketMaker",
        type: "address",
      },
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "expiry",
        type: "uint8",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610392806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063bb6b7a4e14610030575b600080fd5b61004361003e366004610209565b610045565b005b73ffffffffffffffffffffffffffffffffffffffff8716331461006757600080fd5b811561007857610078848884610093565b821561008957610089858785610093565b5050505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b17905291516000928392908716916101119190610321565b6000604051808303816000865af19150503d806000811461014e576040519150601f19603f3d011682016040523d82523d6000602084013e610153565b606091505b509150915081801561017d57508051158061017d57508080602001905181019061017d919061035c565b6101b25760405162461bcd60e51b81526020600482015260026024820152612a2360f11b604482015260640160405180910390fd5b5050505050565b634e487b7160e01b600052604160045260246000fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146101f357600080fd5b919050565b803560ff811681146101f357600080fd5b600080600080600080600080610100898b03121561022657600080fd5b883567ffffffffffffffff8082111561023e57600080fd5b818b0191508b601f83011261025257600080fd5b813581811115610264576102646101b9565b604051601f8201601f19908116603f0116810190838211818310171561028c5761028c6101b9565b816040528281528e60208487010111156102a557600080fd5b82602086016020830137600060208483010152809c5050505050506102cc60208a016101cf565b96506102da60408a016101cf565b95506102e860608a016101cf565b94506102f660808a016101cf565b935060a0890135925060c0890135915061031260e08a016101f8565b90509295985092959890939650565b6000825160005b818110156103425760208186018101518583015201610328565b81811115610351576000828501525b509190910192915050565b60006020828403121561036e57600080fd5b8151801515811461037e57600080fd5b939250505056fea164736f6c634300080d000a";

type EscrowConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EscrowConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Escrow__factory extends ContractFactory {
  constructor(...args: EscrowConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Escrow> {
    return super.deploy(overrides || {}) as Promise<Escrow>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Escrow {
    return super.attach(address) as Escrow;
  }
  override connect(signer: Signer): Escrow__factory {
    return super.connect(signer) as Escrow__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EscrowInterface {
    return new utils.Interface(_abi) as EscrowInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Escrow {
    return new Contract(address, _abi, signerOrProvider) as Escrow;
  }
}
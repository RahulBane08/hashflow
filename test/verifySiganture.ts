import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { artifacts, ethers, waffle } from "hardhat";
import type { Artifact } from "hardhat/types";

import type { VerifySignature } from "../src/types/verifySignature/VerifySignature";
import { Signers } from "./types";
let verifySignature: VerifySignature; 

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];

    const verifySigArtifact: Artifact = await artifacts.readArtifact("VerifySignature");
      verifySignature = <VerifySignature>await waffle.deployContract(this.signers.admin, verifySigArtifact);
      console.log("state 1", verifySignature);
  });

  // describe("verifySignature", function () {
  //   before(async function () {
  //     const verifySigArtifact: Artifact = await artifacts.readArtifact("VerifySignature");
  //     verifySignature = <VerifySignature>await waffle.deployContract(this.signers.admin, verifySigArtifact);
  //     console.log("state 1", verifySignature);
  //   });
  // });

  it("should get Message Hash", async function() {
    console.log("state 2", verifySignature);
    const hash = await verifySignature.connect(this.signers.admin).getMessageHash("0x33bCDe3dA095C1D2681F3167E5696bf5b7d4F321","1","Apples and Oranges","1");
    console.log("Hash",hash);
    const EthSignedMessageHash = await verifySignature.connect(this.signers.admin).getEthSignedMessageHash(hash);
    console.log("EthSignedMessageHash",EthSignedMessageHash);
  });

  // it("should get EthSigned MessageHash", async function(){
  //   const EthSignedMessageHash = await verifySignature.connect(this.signers.admin).getEthSignedMessageHash(hash);
  //   console.log(EthSignedMessageHash);

  // })
});

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

  it.skip("should get MessageHash and EthSignedMessageHash", async function() {
    const hash = await verifySignature.connect(this.signers.admin).getMessageHash("0x33bCDe3dA095C1D2681F3167E5696bf5b7d4F321","1","Apples and Oranges","1");
    console.log("Hash",hash);
    const EthSignedMessageHash = await verifySignature.connect(this.signers.admin).getEthSignedMessageHash(hash);
    console.log("EthSignedMessageHash",EthSignedMessageHash);
  });

  it("should recover the signer", async function(){
    const recoverSigner = await verifySignature.connect(this.signers.admin).recoverSigner("0xfbacf2c141bef3750a982f8637ff0cb6aee06e0700ce348acf355f93b8ec3e58","0x33892af3349a6623eef412fd4d256c442351994e6b730f1caa4a08546213671560cd6f23fd13536e89b90357786b04b38ef311dd3e99fb53383a937268937f011b")
    console.log("Recovered Signer", recoverSigner);
  });

  it("should verify", async function(){
    const verify = await verifySignature.connect(this.signers.admin).verify("0x33bCDe3dA095C1D2681F3167E5696bf5b7d4F321","0x33bCDe3dA095C1D2681F3167E5696bf5b7d4F321","1","Apples and Oranges","1","0x33892af3349a6623eef412fd4d256c442351994e6b730f1caa4a08546213671560cd6f23fd13536e89b90357786b04b38ef311dd3e99fb53383a937268937f011b");
    console.log("Verification", verify);
  });
 
  // it("should get EthSigned MessageHash", async function(){
  //   const EthSignedMessageHash = await verifySignature.connect(this.signers.admin).getEthSignedMessageHash(hash);
  //   console.log(EthSignedMessageHash);

  // })
});

pragma solidity ^0.8.10;

import "./libraries/TransferHelper.sol";


contract Escrow{

    constructor(){

    }
    function swap(  bytes memory data,
                    address sender, 
                    address marketMaker, 
                    address token0, 
                    address token1,
                    uint256 amount0,
                    uint256 amount1,
                    uint8 expiry) external {
        require(sender == msg.sender);
        if (amount1 > 0) TransferHelper.safeTransfer(token1, sender, amount1);
        if (amount0 > 0) TransferHelper.safeTransfer(token0,marketMaker, amount0);

}
}
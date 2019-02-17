pragma solidity >=0.4.24;

import "./WRCToken.sol";


contract WRCTokenSale {
    address admin;
    WRCToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;

    event Sell(address _buyer, uint256 _amount);

    constructor(WRCToken _tokenContract, uint256 _tokenPrice) public payable {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    function multiply(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x);
    }

    function buyTokens(uint256 _numberOfTokens) public payable {
        // require(msg.value == multiply(_numberOfTokens, tokenPrice));
        // require(tokenContract.balanceOf(address(this)) >= _numberOfTokens);
        tokenContract.transfers(msg.sender, _numberOfTokens);

        tokensSold += _numberOfTokens;
        emit Sell(msg.sender, _numberOfTokens);
    }
    
    function transferToSale(uint256 _numberOfTokens) public payable{
        // require(tokenContract.balanceOf[msg.sender] >= _numberOfTokens);
        // tokenContract.transfers(admin , _numberOfTokens);
        require(tokenContract.returnBalance(msg.sender) >= _numberOfTokens);
        tokenContract.updateBalance(address(this), _numberOfTokens, 0);
        tokenContract.updateBalance(msg.sender, 0,  _numberOfTokens);
    }

    
    function transferToBuyer(address _a, uint256 _numberOfTokens) public payable{
        // require(tokenContract.balanceOf[msg.sender] >= _numberOfTokens);
        tokenContract.transfers(_a, _numberOfTokens);
    }
    
    // function endSale() public {
    //     require(msg.sender == admin);
    //     require(tokenContract.transfer(address(admin), tokenContract.balanceOf(address(this))));

    //     // UPDATE: Let's not destroy the contract here
    //     // Just transfer the balance to the admin
    //     // admin.transfer(address(this).balance);
    // }
}

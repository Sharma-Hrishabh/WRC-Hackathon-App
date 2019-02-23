pragma solidity >= 0.4.23;
import './WRCToken.sol';
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
        tokenContract.transferADMIN(msg.sender, _numberOfTokens);

        tokensSold += _numberOfTokens;
        emit Sell(msg.sender, _numberOfTokens);
    }

    function transferToSale(uint256 _numberOfTokens) public payable returns(bool){
        // require(tokenContract.balanceOf[msg.sender] >= _numberOfTokens);
        // tokenContract.transfers(admin , _numberOfTokens);
        require(tokenContract.returnBalance(msg.sender) >= _numberOfTokens);
        tokenContract.updateBalance(address(this), _numberOfTokens, 0);
        tokenContract.updateBalance(msg.sender, 0,  _numberOfTokens);
        return true;
    }


    function transferToBuyer(address _a, uint256 _numberOfTokens) public payable returns(bool){
        // require(tokenContract.balanceOf[msg.sender] >= _numberOfTokens);
        tokenContract.transfers(_a, _numberOfTokens);
        return true;
    }

    function destroyUsed(uint256 _valueToDestroy) public returns(bool){
        // updating token spent to zero.
        tokenContract.updateBalance(msg.sender, 0, _valueToDestroy);

        return true;
    }
}

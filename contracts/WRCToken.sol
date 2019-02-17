pragma solidity >=0.4.24;

contract WRCToken{
  
  
  
  string public name = "WRC Token";
  string public symbol = "WRC";

  uint256 public totalSupply;

  
  event Transfer (address indexed _from,address indexed _to,uint256 _value);

  

  mapping(address => uint256) public balanceOf;

  constructor (uint256 _initialSupply) public payable{
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;  
  }


  function transfers(address _to, uint256 _value) public returns (bool success){
  
    require(balanceOf[msg.sender] >= _value);
    
    balanceOf[msg.sender] -= _value;
    balanceOf[_to] += _value; 

  
    emit Transfer(msg.sender, _to, _value);
    
    return true;
  }
  
  function updateBalance(address _a, uint256 _plusValue, uint256 _minusValue) public {
      balanceOf[_a] += _plusValue;
      balanceOf[_a] -= _minusValue;
  }
  
  function returnBalance(address _a) external view returns(uint256){
      return balanceOf[_a];
  }
}

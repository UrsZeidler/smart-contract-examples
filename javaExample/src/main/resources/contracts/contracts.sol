/*
*
*
*/
pragma solidity ^0.4.0;



contract JavaEventExample {

	uint public eventCount;
	// Start of user code JavaEventExample.attributes
	//TODO: implement
	// End of user code
	
	
	event Event1(string text,uint index);
	
	
	
	function raiseEvent(string _text) public   {
		//Start of user code JavaEventExample.function.raiseEvent_string
		Event1(_text,eventCount);
		eventCount++;
		//End of user code
	}
	
	// Start of user code JavaEventExample.operations
	//TODO: implement
	// End of user code
}


contract JavaStructExample {
    
    struct TestStruct {
    	uint attribute1;
    	string attribute2;
    }

	uint public structCount;
	mapping (uint=>TestStruct)public testStructs;
	// Start of user code JavaStructExample.attributes
	//TODO: implement
	// End of user code
	
	
	
	function addStruct(uint _a1,string _a2) public   {
		//Start of user code JavaStructExample.function.addStruct_uint_string
		testStructs[structCount].attribute1 = _a1;
		testStructs[structCount].attribute2 = _a2;
		structCount++;
		//End of user code
	}
	
	// Start of user code JavaStructExample.operations
	//TODO: implement
	// End of user code
}


contract JavaEventExample1 is JavaEventExample {

	// Start of user code JavaEventExample1.attributes
	//TODO: implement
	// End of user code
	
	
	event Event2();
	
	
	
	function raiseEvent2() public   {
		//Start of user code JavaEventExample1.function.raiseEvent2
		Event1("test1",1);
		Event2();
		//End of user code
	}
	
	// Start of user code JavaEventExample1.operations
	//TODO: implement
	// End of user code
}


contract ContractExample {
    enum ContractState { state1,state2,state3 }

	string public text;
	uint public number;
	bool public locked;
	address public creator;
	ContractState public contractState;
	// Start of user code ContractExample.attributes
	//TODO: implement
	// End of user code
	
	modifier testmodifier
	{
	    if(locked) throw;
	    _;
	}
	
	modifier stateModifier(ContractState _state)
	{
	    if(_state!=contractState) throw;
	    _;
	}
	
	
	function ContractExample(string _text) public   {
		//Start of user code ContractExample.constructor.ContractExample_string
		text = _text;
		number = 10;
		creator = msg.sender;
		locked = true;
		//End of user code
	}
	
	
	
	function contractData() public   constant returns (string _text,address _owner,uint _number,bool _locked) {
		//Start of user code ContractExample.function.contractData
		return (text,creator,number,locked);
		//End of user code
	}
	
	
	
	function changeLocked(bool _locked) public   {
		//Start of user code ContractExample.function.changeLocked_bool
		locked = _locked;
		//End of user code
	}
	
	
	
	function changeState(ContractState _state) public   {
		//Start of user code ContractExample.function.changeState_ContractState
		contractState = _state;
		//End of user code
	}
	
	
	
	function isInState() public  stateModifier(ContractState.state1)  {
		//Start of user code ContractExample.function.isInState
		text = "inState1";
		//End of user code
	}
	
	
	
	function throwIfLocked() public  testmodifier  {
		//Start of user code ContractExample.function.throwIfLocked
		text = "not Locked";
		//End of user code
	}
	
	// getNumber getter for the field number
	function getNumber() constant returns(uint) {
		return number;
	}
	// setNumber setter for the field number
	function setNumber (uint aNumber) {
		number = aNumber;
	}
	
	// Start of user code ContractExample.operations
	//TODO: implement
	// End of user code
}


contract ExampleToken {

	uint256 public totalTokens;
	mapping (address=>uint256)public accountsBalance;
	// Start of user code ExampleToken.attributes
	//TODO: implement
	// End of user code
	
	
	function ExampleToken(uint256 _totalTokens) public   {
		//Start of user code ExampleToken.constructor.ExampleToken_uint256
		totalTokens = _totalTokens;
		accountsBalance[msg.sender] = _totalTokens;
		//End of user code
	}
	
	
	/*
	* Get the total token supply.
	* returns
	* supply -
	*/
	function totalSupply() public   constant returns (uint256 supply) {
		//Start of user code ExampleToken.function.totalSupply
		return totalTokens;
		//End of user code
	}
	
	/*
	* Get the account balance of another account with address _owner.
	* 
	* _owner -
	* returns
	* balance -
	*/
	function balanceOf(address _owner) public   constant returns (uint256 balance) {
		//Start of user code ExampleToken.function.balanceOf_address
		return accountsBalance[_owner];
		//End of user code
	}
	
	/*
	* Send _value amount of tokens to address _to.
	* 
	* _to -
	* _value -
	* success -
	*/
	function transfer(address _to,uint256 _value,bool success) public   {
		//Start of user code ExampleToken.function.transfer_address_uint256_bool
//		if(accountsBalance[msg.sender]>_value) 
//			return false;
		
		accountsBalance[msg.sender] -=_value;
		accountsBalance[_to] +=_value;
//		return true;
		//End of user code
	}
	
	/*
	* Send _value amount of tokens from address _from to address _to.
	* 
	* _from -
	* _to -
	* _value -
	* returns
	* success -
	*/
	function transferFrom(address _from,address _to,uint256 _value) public  returns (bool success) {
		//Start of user code ExampleToken.function.transferFrom_address_address_uint256
		if(_from!=msg.sender) 
			return false;
		
		if(accountsBalance[_from]<_value) 
			return false;
		
		accountsBalance[_from] -=_value;
		accountsBalance[_to] +=_value;
		return true;
		//End of user code
	}
	// Start of user code ExampleToken.operations
	//TODO: implement
	// End of user code
}


contract JavaPayableExample {

	mapping (address=>uint256)public amounts;
	// Start of user code JavaPayableExample.attributes
	// End of user code
	
	
	
	function sendBack() public   {
		//Start of user code JavaPayableExample.function.sendBack
		uint a = amounts[msg.sender];
		amounts[msg.sender] = 0;
		msg.sender.send(a);
		//End of user code
	}
	
	
	
	function recieve() public  payable  {
		//Start of user code JavaPayableExample.function.recieve
		amounts[msg.sender] += msg.value;
		
		//End of user code
	}
	
	// Start of user code JavaPayableExample.operations
	//TODO: implement
	// End of user code
}


## java generation example

This is a simple example how to model and use the generated java code of [uml2solidity](https://github.com/UrsZeidler/uml2solidity) the java code uses the [eth-contract-api](https://github.com/adridadou/eth-contract-api) to access the contract code.

The _de.urszeidler.ethereum.javaExamples.contracts_ package contains the generated interfaces and the tests describes how to use them.

The model to generate the code looks like this:

 ![](https://github.com/UrsZeidler/smart-contract-examples/blob/master/javaExample/doc/ClassDiagram.PNG)
 
### ContractExample

Contains the basic features of a smart contract.

The contract code:


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


Leads to the following java interface:


    public interface ContractExample{
		enum ContractState { state1,state2,state3 }
	
		String text();
	
		Integer number();
	
		Boolean locked();
	
		org.adridadou.ethereum.values.EthAddress creator();
	
		ContractState contractState();

	
		ReturnContractData_string_address_uint_bool contractData();
	
		java.util.concurrent.CompletableFuture<Void> changeLocked(Boolean _locked);
	
		java.util.concurrent.CompletableFuture<Void> changeState(ContractState _state);
	
		java.util.concurrent.CompletableFuture<Void> isInState();
	
		java.util.concurrent.CompletableFuture<Void> throwIfLocked();

		Integer getNumber();

		java.util.concurrent.CompletableFuture<Void> setNumber (Integer aNumber);

		//Start of user code additional_methods

		//End of user code
    }
         

    
    
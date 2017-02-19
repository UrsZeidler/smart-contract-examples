# contracts


* [JavaEventExample](#contract-javaeventexample)

* [JavaStructExample](#contract-javastructexample)

* [JavaEventExample1](#contract-javaeventexample1)

* [ContractExample](#contract-contractexample)

* [ExampleToken](#contract-exampletoken)

* [JavaPayableExample](#contract-javapayableexample)

* [JavaOwnerExample](#contract-javaownerexample)


## contract: JavaEventExample

    overview:
	function raiseEvent(string _text) public  



Test the event system.




#### JavaEventExample properties

name|type|visiblity|delegate|doc
----|----|----|----|----
eventCount|uint|public||Count the events raised by 'raiseEvent'.
-

#### JavaEventExample.raiseEvent(string _text) public  

The method that raises the events.


name|type|direction|doc
----|----|----|----
_text|string|in|A text for the event.

#### event Event1

A test event with parameters.


name|type|indexed|doc
----|----|----|----
text|string||
index|uint||The index.


## contract: JavaStructExample

    overview:
	function addStruct(uint _a1,string _a2) public  
	function addStruct1(string _text) public  





### structs:

TestStruct


#### TestStruct properties

name|type|visiblity|delegate|doc
----|----|----|----|----
attribute1|uint|public||
attribute2|string|public||


TestStruct1


#### TestStruct1 properties

name|type|visiblity|delegate|doc
----|----|----|----|----
text|string|public||
time|uint|public||
sender|address|public||



#### JavaStructExample properties

name|type|visiblity|delegate|doc
----|----|----|----|----
lastStruct|TestStruct|public||
structCount|uint|public||
structCount1|uint|public||

#### JavaStructExample mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
testStructs1|uint|TestStruct1|public|-

#### JavaStructExample.addStruct(uint _a1,string _a2) public  


name|type|direction|doc
----|----|----|----
_a1|uint|in|
_a2|string|in|

#### JavaStructExample.addStruct1(string _text) public  


name|type|direction|doc
----|----|----|----
_text|string|in|


## contract: JavaEventExample1

    overview:
	function raiseEvent2() public  

inherites: [JavaEventExample](#contract-javaeventexample)


The inheried the event.



-

#### JavaEventExample1.raiseEvent2() public  

Raises the Event1 and the Event2.



#### event Event2

A second event type.




## contract: ContractExample

    overview:
	constructor ContractExample(string _text)
	function contractData() public   constant returns (string _text,address _owner,uint _number,bool _locked)
	function changeLocked(bool _locked) public  
	function changeState(ContractState _state) public  
	function isInState() public  stateModifier(ContractState.state1) 
	function throwIfLocked() public  testmodifier 
	function returnStateChange() public  returns (address _creator,uint _time)
	function returnLast() public   constant returns (string _text)



Shows the basic features.


### ContractExample enums: ContractState


name|doc
----|----|----
state1|
state2|
state3|


#### ContractExample properties

name|type|visiblity|delegate|doc
----|----|----|----|----
text|string|public||
number|uint|public||An attribute which uses getter/setter.
locked|bool|public||
creator|address|public||
contractState|ContractState|public||
-

#### ContractExample.ContractExample(string _text) public  


name|type|doc
----|----|----
_text|string|

#### ContractExample.contractData() public   constant returns (string _text,address _owner,uint _number,bool _locked)

Example for multiple return values.


name|type|direction|doc
----|----|----|----
_text|string|return|
_owner|address|return|
_number|uint|return|
_locked|bool|return|

#### ContractExample.changeLocked(bool _locked) public  

Change the intern sate of the contract.


name|type|direction|doc
----|----|----|----
_locked|bool|in|

#### ContractExample.changeState(ContractState _state) public  

Change the state, also an example for emum as parameter.


name|type|direction|doc
----|----|----|----
_state|ContractState|in|

#### ContractExample.isInState() public  stateModifier(ContractState.state1) 

Test method for the 'stateModifier' throws if contractState!=ContractState.state1.



#### ContractExample.throwIfLocked() public  testmodifier 

Test method for the testmodifer. Throws if locked.



#### ContractExample.returnStateChange() public  returns (address _creator,uint _time)


name|type|direction|doc
----|----|----|----
_creator|address|return|
_time|uint|return|

#### ContractExample.returnLast() public   constant returns (string _text)

A const function return a single value.


name|type|direction|doc
----|----|----|----
_text|string|return|


## contract: ExampleToken

    overview:
	constructor ExampleToken(uint256 _totalTokens)
	abstract function totalSupply() public   constant returns (uint256 supply)
	abstract function balanceOf(address _owner) public   constant returns (uint256 balance)
	abstract function transfer(address _to,uint256 _value) public  returns (bool success)
	abstract function transferFrom(address _from,address _to,uint256 _value) public  returns (bool success)






#### ExampleToken properties

name|type|visiblity|delegate|doc
----|----|----|----|----
totalTokens|uint256|public||
-

#### ExampleToken.ExampleToken(uint256 _totalTokens) public  


name|type|doc
----|----|----
_totalTokens|uint256|


## contract: JavaPayableExample

    overview:
	function sendBack() public  
	function recieve() public  payable 
	function relay(address _to) public  payable returns (bool )



An example for the payable modifier. 
How to send ether to and from the contract.
The contract stores the value in the amount mapping.




#### JavaPayableExample mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
amounts|address|uint256|public|-

#### JavaPayableExample.sendBack() public  

This send the ether back.



#### JavaPayableExample.recieve() public  payable 

This method accept ether as it has the payable modifier.



#### JavaPayableExample.relay(address _to) public  payable returns (bool )

Relay the amount to the _to parameter.


name|type|direction|doc
----|----|----|----
_to|address|in|
|bool|return|


## contract: JavaOwnerExample

    overview:
	constructor JavaOwnerExample()






#### JavaOwnerExample properties

name|type|visiblity|delegate|doc
----|----|----|----|----
owner|address|public||
-

#### JavaOwnerExample.JavaOwnerExample() public  





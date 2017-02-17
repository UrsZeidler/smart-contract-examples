# contracts


* [JavaEventExample](#contract-javaeventexample)

* [JavaStructExample](#contract-javastructexample)

* [JavaEventExample1](#contract-javaeventexample1)

* [ContractExample](#contract-contractexample)

* [ExampleToken](#contract-exampletoken)

* [JavaPayableExample](#contract-javapayableexample)


## contract: JavaEventExample

    overview:
	function raiseEvent(string _text) public  






#### JavaEventExample properties

name|type|visiblity|delegate|doc
----|----|----|----|----
eventCount|uint|public||
-

#### JavaEventExample.raiseEvent(string _text) public  


name|type|direction|doc
----|----|----|----
_text|string|in|

#### event Event1


name|type|indexed|doc
----|----|----|----
text|string||
index|uint||


## contract: JavaStructExample

    overview:
	function addStruct(uint _a1,string _a2) public  





### structs:

TestStruct


#### TestStruct properties

name|type|visiblity|delegate|doc
----|----|----|----|----
attribute1|uint|public||
attribute2|string|public||



#### JavaStructExample properties

name|type|visiblity|delegate|doc
----|----|----|----|----
structCount|uint|public||
-

#### JavaStructExample.addStruct(uint _a1,string _a2) public  


name|type|direction|doc
----|----|----|----
_a1|uint|in|
_a2|string|in|


## contract: JavaEventExample1

    overview:
	function raiseEvent2() public  

inherites: [JavaEventExample](#contract-javaeventexample)




-

#### JavaEventExample1.raiseEvent2() public  



#### event Event2




## contract: ContractExample

    overview:
	constructor ContractExample(string _text)
	function contractData() public   constant returns (string _text,address _owner,uint _number,bool _locked)
	function changeLocked(bool _locked) public  
	function changeState(ContractState _state) public  
	function isInState() public  stateModifier(ContractState.state1) 
	function throwIfLocked() public  testmodifier 




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
number|uint|public||
locked|bool|public||
creator|address|public||
contractState|ContractState|public||
-

#### ContractExample.ContractExample(string _text) public  


name|type|doc
----|----|----
_text|string|

#### ContractExample.contractData() public   constant returns (string _text,address _owner,uint _number,bool _locked)


name|type|direction|doc
----|----|----|----
_text|string|return|
_owner|address|return|
_number|uint|return|
_locked|bool|return|

#### ContractExample.changeLocked(bool _locked) public  


name|type|direction|doc
----|----|----|----
_locked|bool|in|

#### ContractExample.changeState(ContractState _state) public  


name|type|direction|doc
----|----|----|----
_state|ContractState|in|

#### ContractExample.isInState() public  stateModifier(ContractState.state1) 



#### ContractExample.throwIfLocked() public  testmodifier 




## contract: ExampleToken

    overview:
	constructor ExampleToken(uint256 _totalTokens)
	abstract function totalSupply() public   constant returns (uint256 supply)
	abstract function balanceOf(address _owner) public   constant returns (uint256 balance)
	abstract function transfer(address _to,uint256 _value,bool success) public  
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
	function recieve() public  payable() 






#### JavaPayableExample mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
amounts|address|uint256|public|-

#### JavaPayableExample.sendBack() public  



#### JavaPayableExample.recieve() public  payable() 





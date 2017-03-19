// file header
/**
* A simple bean class around the contract.
* The JavaEventExampleModel.
**/
function JavaEventExampleModel(contract) {
this.contract = contract;
	/**
	* Getter for eventCount.
	**/
	this.getEventCount = function(){
		return contract.eventCount(); 
	}
	/**
	* Call raiseEvent.
	**/
	this.raiseEvent = function(_text){
		return contract.raiseEvent(_text); 
	}
}// end of function JavaEventExampleModel

//test class for JavaEventExample
function TestJavaEventExample(contract) {
	
	this.test_instance = contract;
	this.model = new JavaEventExampleModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_JavaEventExample
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testJavaEventExample_raiseEvent_string();
		this.customTests();
	
		//Start of user code allTests_JavaEventExample
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_JavaEventExample
	//TODO: implement
	//End of user code
	}

	//Test for JavaEventExample_raiseEvent_string
	this.testJavaEventExample_raiseEvent_string=function() {
		//	var res = this.test_instance.raiseEvent( p__text);
		//Start of user code test_JavaEventExample_raiseEvent_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testraiseEvent", "executed: testJavaEventExample_raiseEvent_string",true, test);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_JavaEventExample_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The JavaStructExampleModel.
**/
function JavaStructExampleModel(contract) {
this.contract = contract;
	/**
	* Getter for lastStruct.
	**/
	this.getLastStruct = function(){
		return contract.lastStruct(); 
	}
	/**
	* Getter for structCount.
	**/
	this.getStructCount = function(){
		return contract.structCount(); 
	}
	/**
	* Getter for structCount1.
	**/
	this.getStructCount1 = function(){
		return contract.structCount1(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getTestStructs1=function(key) {
		return contract.testStructs1(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getTestStructs=function(key) {
		return contract.testStructs(key);
	}
	/**
	* Call addStruct.
	**/
	this.addStruct = function(_a1,_a2){
		return contract.addStruct(_a1,_a2); 
	}
	/**
	* Call addStruct1.
	**/
	this.addStruct1 = function(_text){
		return contract.addStruct1(_text); 
	}
}// end of function JavaStructExampleModel

//test class for JavaStructExample
function TestJavaStructExample(contract) {
	
	this.test_instance = contract;
	this.model = new JavaStructExampleModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_JavaStructExample
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testJavaStructExample_addStruct_uint_string();
		this.testJavaStructExample_addStruct1_string();
		this.customTests();
	
		//Start of user code allTests_JavaStructExample
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_JavaStructExample
	//TODO: implement
	//End of user code
	}

	//Test for JavaStructExample_addStruct_uint_string
	this.testJavaStructExample_addStruct_uint_string=function() {
		//	var res = this.test_instance.addStruct( p__a1, p__a2);
		//Start of user code test_JavaStructExample_addStruct_uint_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddStruct", "executed: testJavaStructExample_addStruct_uint_string",true, test);		
		//End of user code
	}

	//Test for JavaStructExample_addStruct1_string
	this.testJavaStructExample_addStruct1_string=function() {
		//	var res = this.test_instance.addStruct1( p__text);
		//Start of user code test_JavaStructExample_addStruct1_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testaddStruct1", "executed: testJavaStructExample_addStruct1_string",true, test);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_JavaStructExample_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The JavaEventExample1Model.
**/
function JavaEventExample1Model(contract) {
this.contract = contract;
	/**
	* Getter for eventCount.
	**/
	this.getEventCount = function(){
		return contract.eventCount(); 
	}
	/**
	* Call raiseEvent.
	**/
	this.raiseEvent = function(_text){
		return contract.raiseEvent(_text); 
	}
	/**
	* Call raiseEvent2.
	**/
	this.raiseEvent2 = function(){
		return contract.raiseEvent2(); 
	}
}// end of function JavaEventExample1Model

//test class for JavaEventExample1
function TestJavaEventExample1(contract) {
	
	this.test_instance = contract;
	this.model = new JavaEventExample1Model(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_JavaEventExample1
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testJavaEventExample_raiseEvent_string();
		this.testJavaEventExample1_raiseEvent2();
		this.customTests();
	
		//Start of user code allTests_JavaEventExample1
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_JavaEventExample1
	//TODO: implement
	//End of user code
	}

	//Test for JavaEventExample_raiseEvent_string
	this.testJavaEventExample_raiseEvent_string=function() {
		//	var res = this.test_instance.raiseEvent( p__text);
		//Start of user code test_JavaEventExample1_raiseEvent_string
		//TODO : implement this
		//var test = false;		
		//this.testAE("testraiseEvent", "executed: testJavaEventExample1_raiseEvent_string",true, test);		
		//End of user code
	}

	//Test for JavaEventExample1_raiseEvent2
	this.testJavaEventExample1_raiseEvent2=function() {
		//	var res = this.test_instance.raiseEvent2();
		//Start of user code test_JavaEventExample1_raiseEvent2
		//TODO : implement this
		//var test = false;		
		//this.testAE("testraiseEvent2", "executed: testJavaEventExample1_raiseEvent2",true, test);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_JavaEventExample1_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The ContractExampleModel.
**/
function ContractExampleModel(contract) {
this.contract = contract;
	/**
	* Getter for text.
	**/
	this.getText = function(){
		return contract.text(); 
	}
	/**
	* Getter for number.
	**/
	this.getNumber = function(){
		return contract.number(); 
	}
	/**
	* Getter for locked.
	**/
	this.getLocked = function(){
		return contract.locked(); 
	}
	/**
	* Getter for creator.
	**/
	this.getCreator = function(){
		return contract.creator(); 
	}
	/**
	* Getter for contractState.
	**/
	this.getContractState = function(){
		return contract.contractState(); 
	}
	/**
	* Call contractData.
	**/
	this.contractData = function(){
		return contract.contractData(); 
	}
	/**
	* Call changeLocked.
	**/
	this.changeLocked = function(_locked){
		return contract.changeLocked(_locked); 
	}
	/**
	* Call changeState.
	**/
	this.changeState = function(_state){
		return contract.changeState(_state); 
	}
	/**
	* Call isInState.
	**/
	this.isInState = function(){
		return contract.isInState(); 
	}
	/**
	* Call throwIfLocked.
	**/
	this.throwIfLocked = function(){
		return contract.throwIfLocked(); 
	}
	/**
	* Call returnStateChange.
	**/
	this.returnStateChange = function(){
		return contract.returnStateChange(); 
	}
	/**
	* Call returnLast.
	**/
	this.returnLast = function(){
		return contract.returnLast(); 
	}
}// end of function ContractExampleModel

//test class for ContractExample
function TestContractExample(contract) {
	
	this.test_instance = contract;
	this.model = new ContractExampleModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_ContractExample
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testContractExample_contractData();
		this.testContractExample_changeLocked_bool();
		this.testContractExample_changeState_ContractState();
		this.testContractExample_isInState();
		this.testContractExample_throwIfLocked();
		this.testContractExample_returnStateChange();
		this.testContractExample_returnLast();
		this.customTests();
	
		//Start of user code allTests_ContractExample
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_ContractExample
	//TODO: implement
	//End of user code
	}

	//Test for ContractExample_contractData
	this.testContractExample_contractData=function() {
		//	var res = this.test_instance.contractData();
		//Start of user code test_ContractExample_contractData
		//TODO : implement this
		//var test = false;		
		//this.testAE("testcontractData", "executed: testContractExample_contractData",true, test);		
		//End of user code
	}

	//Test for ContractExample_changeLocked_bool
	this.testContractExample_changeLocked_bool=function() {
		//	var res = this.test_instance.changeLocked( p__locked);
		//Start of user code test_ContractExample_changeLocked_bool
		//TODO : implement this
		//var test = false;		
		//this.testAE("testchangeLocked", "executed: testContractExample_changeLocked_bool",true, test);		
		//End of user code
	}

	//Test for ContractExample_changeState_ContractState
	this.testContractExample_changeState_ContractState=function() {
		//	var res = this.test_instance.changeState( p__state);
		//Start of user code test_ContractExample_changeState_ContractState
		//TODO : implement this
		//var test = false;		
		//this.testAE("testchangeState", "executed: testContractExample_changeState_ContractState",true, test);		
		//End of user code
	}

	//Test for ContractExample_isInState
	this.testContractExample_isInState=function() {
		//	var res = this.test_instance.isInState();
		//Start of user code test_ContractExample_isInState
		//TODO : implement this
		//var test = false;		
		//this.testAE("testisInState", "executed: testContractExample_isInState",true, test);		
		//End of user code
	}

	//Test for ContractExample_throwIfLocked
	this.testContractExample_throwIfLocked=function() {
		//	var res = this.test_instance.throwIfLocked();
		//Start of user code test_ContractExample_throwIfLocked
		//TODO : implement this
		//var test = false;		
		//this.testAE("testthrowIfLocked", "executed: testContractExample_throwIfLocked",true, test);		
		//End of user code
	}

	//Test for ContractExample_returnStateChange
	this.testContractExample_returnStateChange=function() {
		//	var res = this.test_instance.returnStateChange();
		//Start of user code test_ContractExample_returnStateChange
		//TODO : implement this
		//var test = false;		
		//this.testAE("testreturnStateChange", "executed: testContractExample_returnStateChange",true, test);		
		//End of user code
	}

	//Test for ContractExample_returnLast
	this.testContractExample_returnLast=function() {
		//	var res = this.test_instance.returnLast();
		//Start of user code test_ContractExample_returnLast
		//TODO : implement this
		//var test = false;		
		//this.testAE("testreturnLast", "executed: testContractExample_returnLast",true, test);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_ContractExample_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The ExampleTokenModel.
**/
function ExampleTokenModel(contract) {
this.contract = contract;
	/**
	* Getter for totalTokens.
	**/
	this.getTotalTokens = function(){
		return contract.totalTokens(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getAccountsBalance=function(key) {
		return contract.accountsBalance(key);
	}
	/**
	* Call totalSupply.
	**/
	this.totalSupply = function(){
		return contract.totalSupply(); 
	}
,	/**
	* Call balanceOf.
	**/
	this.balanceOf = function(_owner){
		return contract.balanceOf(_owner); 
	}
,	/**
	* Call transfer.
	**/
	this.transfer = function(_to,_value){
		return contract.transfer(_to,_value); 
	}
,	/**
	* Call transferFrom.
	**/
	this.transferFrom = function(_from,_to,_value){
		return contract.transferFrom(_from,_to,_value); 
	}
}// end of function ExampleTokenModel

//test class for ExampleToken
function TestExampleToken(contract) {
	
	this.test_instance = contract;
	this.model = new ExampleTokenModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_ExampleToken
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.customTests();
	
		//Start of user code allTests_ExampleToken
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_ExampleToken
	//TODO: implement
	//End of user code
	}
	this.customTests=function() {
		//Start of user code test_ExampleToken_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The JavaPayableExampleModel.
**/
function JavaPayableExampleModel(contract) {
this.contract = contract;
	/**
	* Get the mapped value for a key.
	*/
	this.getAmounts=function(key) {
		return contract.amounts(key);
	}
	/**
	* Call sendBack.
	**/
	this.sendBack = function(){
		return contract.sendBack(); 
	}
	/**
	* Call recieve.
	**/
	this.recieve = function(){
		return contract.recieve(); 
	}
	/**
	* Call relay.
	**/
	this.relay = function(_to){
		return contract.relay(_to); 
	}
}// end of function JavaPayableExampleModel

//test class for JavaPayableExample
function TestJavaPayableExample(contract) {
	
	this.test_instance = contract;
	this.model = new JavaPayableExampleModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_JavaPayableExample
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testJavaPayableExample_sendBack();
		this.testJavaPayableExample_recieve();
		this.testJavaPayableExample_relay_address();
		this.customTests();
	
		//Start of user code allTests_JavaPayableExample
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_JavaPayableExample
	//TODO: implement
	//End of user code
	}

	//Test for JavaPayableExample_sendBack
	this.testJavaPayableExample_sendBack=function() {
		//	var res = this.test_instance.sendBack();
		//Start of user code test_JavaPayableExample_sendBack
		//TODO : implement this
		//var test = false;		
		//this.testAE("testsendBack", "executed: testJavaPayableExample_sendBack",true, test);		
		//End of user code
	}

	//Test for JavaPayableExample_recieve
	this.testJavaPayableExample_recieve=function() {
		//	var res = this.test_instance.recieve();
		//Start of user code test_JavaPayableExample_recieve
		//TODO : implement this
		//var test = false;		
		//this.testAE("testrecieve", "executed: testJavaPayableExample_recieve",true, test);		
		//End of user code
	}

	//Test for JavaPayableExample_relay_address
	this.testJavaPayableExample_relay_address=function() {
		//	var res = this.test_instance.relay( p__to);
		//Start of user code test_JavaPayableExample_relay_address
		//TODO : implement this
		//var test = false;		
		//this.testAE("testrelay", "executed: testJavaPayableExample_relay_address",true, test);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_JavaPayableExample_custom tests
		//
		//End of user code
	}
}
/**
* A simple bean class around the contract.
* The JavaOwnerExampleModel.
**/
function JavaOwnerExampleModel(contract) {
this.contract = contract;
	/**
	* Getter for owner.
	**/
	this.getOwner = function(){
		return contract.owner(); 
	}
}// end of function JavaOwnerExampleModel

//test class for JavaOwnerExample
function TestJavaOwnerExample(contract) {
	
	this.test_instance = contract;
	this.model = new JavaOwnerExampleModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_JavaOwnerExample
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.customTests();
	
		//Start of user code allTests_JavaOwnerExample
		//TODO: implement
		//End of user code

	}
	
	//print the test result
	this.printTest=function(testName,testMessage,state){
		var e = document.getElementById(this.prefix+'-'+this.messageBlockId);
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix+'-'+testName;
		elemDiv.className='testRow';
		elemDiv.text=testMessage;
		var stateDiv = document.createElement('div');
		if(state){
			elemDiv.innerHTML = '<div class="pass_state">P</div><div class="testCell">'+testMessage+'</div>';
		}else{
			elemDiv.innerHTML = '<div class="failed_state">F</div><div class="testCell">'+testMessage+'</div>';
		}
		e.appendChild(elemDiv);
	}

	//assertEquals
	this.testAE=function(testName,testMessage,expected,value) {
		if(expected==value)
			this.printTest(testName, testMessage, true);
		else
			this.printTest(testName, testMessage+': expected '+expected+' got '+value, false);
	}

	//test the attributes after setup	
	this.testAttributes=function() {
	//Start of user code attributeTests_JavaOwnerExample
	//TODO: implement
	//End of user code
	}
	this.customTests=function() {
		//Start of user code test_JavaOwnerExample_custom tests
		//
		//End of user code
	}
}

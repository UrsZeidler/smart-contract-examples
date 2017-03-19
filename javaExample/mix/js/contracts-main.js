// file header
// contractVariable for JavaEventExample
var JavaEventExampleContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"eventCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{ "constant": false,
    "inputs": [{"name": "_text","type": "string"}],    
    "name": "raiseEvent",
    "outputs": [],
    "type": "function" }
,
  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "text",
         "type": "string"}
,		{"indexed": false,
		 "name": "index",
         "type": "uint256"}
	],    
    "name": "Event1",
    "type": "event"  }
]);   
// contractVariable for JavaStructExample
var JavaStructExampleContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"lastStruct","outputs":[{"name":"","type":"TestStruct"}],"type":"function"},
{"constant":true,"inputs":[],"name":"structCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"structCount1","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "testStructs1","outputs": [
{ "name": "text", "type": "string"}
,{ "name": "time", "type": "uint256"}
,{ "name": "sender", "type": "address"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "testStructs","outputs": [
{ "name": "attribute1", "type": "uint256"}
,{ "name": "attribute2", "type": "string"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "_a1","type": "uint256"},{"name": "_a2","type": "string"}],    
    "name": "addStruct",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_text","type": "string"}],    
    "name": "addStruct1",
    "outputs": [],
    "type": "function" }

]);   
// contractVariable for JavaEventExample1
var JavaEventExample1Contract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"eventCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{ "constant": false,
    "inputs": [{"name": "_text","type": "string"}],    
    "name": "raiseEvent",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [],    
    "name": "raiseEvent2",
    "outputs": [],
    "type": "function" }
,
  { "anonymous": false,
    "inputs": 
	[
	],    
    "name": "Event2",
    "type": "event"  }
]);   
// contractVariable for ContractExample
var ContractExampleContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"text","outputs":[{"name":"","type":"string"}],"type":"function"},
{"constant":true,"inputs":[],"name":"number","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"locked","outputs":[{"name":"","type":"bool"}],"type":"function"},
{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"type":"function"},
{"constant":true,"inputs":[],"name":"contractState","outputs":[{"name":"","type":"ContractState"}],"type":"function"},
{ "constant": true,
    "inputs": [],    
    "name": "contractData",
    "outputs": [{"name": "_text","type": "string"},{"name": "_owner","type": "address"},{"name": "_number","type": "uint256"},{"name": "_locked","type": "bool"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_locked","type": "bool"}],    
    "name": "changeLocked",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_state","type": "ContractState"}],    
    "name": "changeState",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [],    
    "name": "isInState",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [],    
    "name": "throwIfLocked",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [],    
    "name": "returnStateChange",
    "outputs": [{"name": "_creator","type": "address"},{"name": "_time","type": "uint256"}],
    "type": "function" }
,{ "constant": true,
    "inputs": [],    
    "name": "returnLast",
    "outputs": [{"name": "_text","type": "string"}],
    "type": "function" }

  ,{
    "constant": true,
    "inputs": [],    
    "name": "getNumber",
    "outputs": [{"name": "number","type": "uint256"}],
    "type": "function"
  }
  ,{
    "constant": false,
    "inputs": [{"name": "aNumber","type": "uint256"}],    
    "name": "setNumber",
    "outputs": [],
    "type": "function"
  }

]);   
// contractVariable for ExampleToken
var ExampleTokenContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"totalTokens","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "accountsBalance","outputs": [
{ "name": "", "type": "uint256"}
],"type": "function"	},
{ "constant": true,
    "inputs": [],    
    "name": "totalSupply",
    "outputs": [{"name": "supply","type": "uint256"}],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_owner","type": "address"}],    
    "name": "balanceOf",
    "outputs": [{"name": "balance","type": "uint256"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_to","type": "address"},{"name": "_value","type": "uint256"}],    
    "name": "transfer",
    "outputs": [{"name": "success","type": "bool"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_from","type": "address"},{"name": "_to","type": "address"},{"name": "_value","type": "uint256"}],    
    "name": "transferFrom",
    "outputs": [{"name": "success","type": "bool"}],
    "type": "function" }

]);   
// contractVariable for JavaPayableExample
var JavaPayableExampleContract = web3.eth.contract([
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "amounts","outputs": [
{ "name": "", "type": "uint256"}
],"type": "function"	},
{ "constant": false,
    "inputs": [],    
    "name": "sendBack",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [],    
    "name": "recieve",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_to","type": "address"}],    
    "name": "relay",
    "outputs": [{"name": "","type": "bool"}],
    "type": "function" }

]);   
// contractVariable for JavaOwnerExample
var JavaOwnerExampleContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},

  ,{
    "constant": false,
    "inputs": [{"name": "aOwner","type": "address"}],    
    "name": "setOwner",
    "outputs": [],
    "type": "function"
  }

]);   


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

/**
* Gui factory JavaEventExample
**/
function JavaEventExampleGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='JavaEventExample_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'JavaEventExample_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'JavaEventExample_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for JavaEventExample_contract -->'
+		'		<div class="contract" id="'+this.prefix+'JavaEventExample_contract">'
+		'		JavaEventExample:'
+		'		  <input type="text" id="'+this.prefix+'JavaEventExample_address"> <button id="'+this.prefix+'JavaEventExampleController.setAddress" onclick="'+this.prefix+'JavaEventExampleController.setAddress()">change JavaEventExample Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'JavaEventExample_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'JavaEventExample_contract_attribute_eventCount"> eventCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'JavaEventExample_eventCount_value"> </span>'
+		'		    </div>'
+		'		'
+		'		    <button class="function_btn" id="'+this.prefix+'JavaEventExample_updateAttributes" onclick="'+this.prefix+'JavaEventExampleController._updateAttributes()">update JavaEventExample attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'JavaEventExample_contract_function_JavaEventExample_raiseEvent_string">'
+		'		<legend>raiseEvent</legend>'
+		'			  <label class="function_parameter" for="JavaEventExample_raiseEvent_string__text">_text</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'JavaEventExample_raiseEvent_string__text"'
+		'				  placeholder="_text"/>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaEventExampleController.JavaEventExample_raiseEvent_string" onclick="'+this.prefix+'JavaEventExampleController.JavaEventExample_raiseEvent_string()">raiseEvent</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaEventExample_raiseEvent_string_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'JavaEventExample_contract_attribute_eventCount"> eventCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'JavaEventExample_eventCount_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createJavaEventExample_raiseEvent_stringGui
				;
	}

	/**
	* Create the gui for the function raiseEvent.
	*/
	this.createJavaEventExample_raiseEvent_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'JavaEventExample_contract_function_JavaEventExample_raiseEvent_string">'
+		'		<legend>raiseEvent</legend>'
+		'			  <label class="function_parameter" for="JavaEventExample_raiseEvent_string__text">_text</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'JavaEventExample_raiseEvent_string__text"'
+		'				  placeholder="_text"/>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaEventExampleController.JavaEventExample_raiseEvent_string" onclick="'+this.prefix+'JavaEventExampleController.JavaEventExample_raiseEvent_string()">raiseEvent</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaEventExample_raiseEvent_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for JavaEventExample_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'JavaEventExample_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

	/**
	* Create a gui for the Event1 event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createEvent1LogDataGui = function(prefix, blockHash, blockNumber
	,text	,index	) {
		return '<div class="eventRow">'
        +'<div class="eventValue">'+text+'</div>'
        +'<div class="eventValue">'+index+'</div>'
        +' </div>';
	}

}//end guifactory

/**
* Class JavaEventExampleController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'JavaEventExampleController.setAddress' - 
* self.prefix+'JavaEventExample_updateAttributes'     - 
* self.prefix+'JavaEventExample_raiseEvent_string -
*/
function JavaEventExampleController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'JavaEventExampleController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'JavaEventExample_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'JavaEventExampleController.JavaEventExample_raiseEvent_string');
		if(btn!=undefined)
			btn.onclick = this.JavaEventExample_raiseEvent_string;
		else console.log('JavaEventExample_raiseEvent_string widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'JavaEventExample_address');
		if(_address==null)return;

		self.JavaEventExample_instance = JavaEventExampleContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'JavaEventExample_eventCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var eventCount_res = self.instance.eventCount();
		var e = document.getElementById(self.prefix+'JavaEventExample_eventCount_value');
		if(eventCount_res!=null && e!=null)
			e.innerText = eventCount_res;
		else console.log(self.prefix+'JavaEventExample_eventCount_value not found');
	}

	//call functions
	
	/**
	* Calls the contract function JavaEventExample_raiseEvent.
	*
	* this.prefix+'JavaEventExample_raiseEvent_string__text' -
	**/
	this.JavaEventExample_raiseEvent_string=function() {
		var e = document.getElementById(self.prefix+'JavaEventExample_raiseEvent_string__text');
		if(e!=null)
			var param__text = e.value;
		else console.log(self.prefix+'JavaEventExample_raiseEvent_string__text not found');
		var res = self.instance.raiseEvent(param__text);
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode JavaEventExampleManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a JavaEventExampleController as 'c' and a JavaEventExampleGuiFactory as 'g'.
**/
function JavaEventExampleManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new JavaEventExampleController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new JavaEventExampleGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	this.eventEvent1 = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'JavaEventExample_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'JavaEventExample_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'JavaEventExample_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code JavaEventExample_create_gui_js
		txt = txt + guifactory.createDefaultGui();
//End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'JavaEventExample' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_Event1 = this.getContract().Event1({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventEvent1;
	event_Event1.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of JavaEventExampleManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function JavaEventExampleGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.eventEvent1 = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new JavaEventExampleManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.eventEvent1 = this.eventEvent1;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'JavaEventExample_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function JavaEventExampleDeployment(guiId){
	this.prefix = guiId;
//Start of user code JavaEventExample_deployment_attributes_js
//TODO: implement
//End of user code

	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code JavaEventExample_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code JavaEventExample_deployment_js
//TODO: implement
//End of user code
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

/**
* Gui factory JavaStructExample
**/
function JavaStructExampleGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='JavaStructExample_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'JavaStructExample_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'JavaStructExample_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for JavaStructExample_contract -->'
+		'		<div class="contract" id="'+this.prefix+'JavaStructExample_contract">'
+		'		JavaStructExample:'
+		'		  <input type="text" id="'+this.prefix+'JavaStructExample_address"> <button id="'+this.prefix+'JavaStructExampleController.setAddress" onclick="'+this.prefix+'JavaStructExampleController.setAddress()">change JavaStructExample Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'JavaStructExample_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_lastStruct"> lastStruct:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'JavaStructExample_lastStruct_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_structCount"> structCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'JavaStructExample_structCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_structCount1"> structCount1:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'JavaStructExample_structCount1_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_JavaStructExample_contract_attribute_testStructs1">struc mapping  testStructs1:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs1_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs1_text"> text:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'JavaStructExample_testStructs1_text_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs1_time"> time:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'JavaStructExample_testStructs1_time_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs1_sender"> sender:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'JavaStructExample_testStructs1_sender_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_JavaStructExample_contract_attribute_testStructs">struc mapping  testStructs:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs_attribute1"> attribute1:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'JavaStructExample_testStructs_attribute1_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs_attribute2"> attribute2:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'JavaStructExample_testStructs_attribute2_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'JavaStructExample_updateAttributes" onclick="'+this.prefix+'JavaStructExampleController._updateAttributes()">update JavaStructExample attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'JavaStructExample_contract_function_JavaStructExample_addStruct_uint_string">'
+		'		<legend>addStruct</legend>'
+		'			  <label class="function_parameter" for="JavaStructExample_addStruct_uint_string__a1">_a1</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'JavaStructExample_addStruct_uint_string__a1"'
+		'				  placeholder="_a1"/>'
+		'			  <label class="function_parameter" for="JavaStructExample_addStruct_uint_string__a2">_a2</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'JavaStructExample_addStruct_uint_string__a2"'
+		'				  placeholder="_a2"/>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaStructExampleController.JavaStructExample_addStruct_uint_string" onclick="'+this.prefix+'JavaStructExampleController.JavaStructExample_addStruct_uint_string()">addStruct</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaStructExample_addStruct_uint_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'JavaStructExample_contract_function_JavaStructExample_addStruct1_string">'
+		'		<legend>addStruct1</legend>'
+		'			  <label class="function_parameter" for="JavaStructExample_addStruct1_string__text">_text</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'JavaStructExample_addStruct1_string__text"'
+		'				  placeholder="_text"/>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaStructExampleController.JavaStructExample_addStruct1_string" onclick="'+this.prefix+'JavaStructExampleController.JavaStructExample_addStruct1_string()">addStruct1</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaStructExample_addStruct1_string_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_lastStruct"> lastStruct:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'JavaStructExample_lastStruct_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_structCount"> structCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'JavaStructExample_structCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_structCount1"> structCount1:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'JavaStructExample_structCount1_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createJavaStructExample_addStruct_uint_stringGui
				+ this.createJavaStructExample_addStruct1_stringGui
				;
	}

	/**
	* Create the gui for the function addStruct.
	*/
	this.createJavaStructExample_addStruct_uint_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'JavaStructExample_contract_function_JavaStructExample_addStruct_uint_string">'
+		'		<legend>addStruct</legend>'
+		'			  <label class="function_parameter" for="JavaStructExample_addStruct_uint_string__a1">_a1</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'JavaStructExample_addStruct_uint_string__a1"'
+		'				  placeholder="_a1"/>'
+		'			  <label class="function_parameter" for="JavaStructExample_addStruct_uint_string__a2">_a2</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'JavaStructExample_addStruct_uint_string__a2"'
+		'				  placeholder="_a2"/>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaStructExampleController.JavaStructExample_addStruct_uint_string" onclick="'+this.prefix+'JavaStructExampleController.JavaStructExample_addStruct_uint_string()">addStruct</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaStructExample_addStruct_uint_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addStruct1.
	*/
	this.createJavaStructExample_addStruct1_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'JavaStructExample_contract_function_JavaStructExample_addStruct1_string">'
+		'		<legend>addStruct1</legend>'
+		'			  <label class="function_parameter" for="JavaStructExample_addStruct1_string__text">_text</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'JavaStructExample_addStruct1_string__text"'
+		'				  placeholder="_text"/>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaStructExampleController.JavaStructExample_addStruct1_string" onclick="'+this.prefix+'JavaStructExampleController.JavaStructExample_addStruct1_string()">addStruct1</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaStructExample_addStruct1_string_res"></div>'
+		'		  </fieldset>'
;
	}
	/**
	* Create the gui for the testStructs1 struct element.
	*/
	this.createtestStructs1StructGui=function() {
		return 		'<div class="Struct_Mapping" id="'+this.prefix+'Struc_JavaStructExample_contract_attribute_testStructs1">struc mapping  testStructs1:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs1_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs1_text"> text:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'JavaStructExample_testStructs1_text_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs1_time"> time:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'JavaStructExample_testStructs1_time_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs1_sender"> sender:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'JavaStructExample_testStructs1_sender_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
;
	}

	/**
	* Create the gui for the testStructs struct element.
	*/
	this.createtestStructsStructGui=function() {
		return 		'<div class="Struct_Mapping" id="'+this.prefix+'Struc_JavaStructExample_contract_attribute_testStructs">struc mapping  testStructs:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs_attribute1"> attribute1:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'JavaStructExample_testStructs_attribute1_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'JavaStructExample_contract_attribute_testStructs_attribute2"> attribute2:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'JavaStructExample_testStructs_attribute2_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for JavaStructExample_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'JavaStructExample_contract">'
		+ inner
		+'</div>';
	}


	//eventguis
	/**
	* Create the gui for the function Struc JavaStructExample-testStructs1.
	*/
	this.createStruc_JavaStructExample_contract_attribute_testStructs1Gui=function(struct) {
		return '<div class="Struct_Mapping" id='+this.prefix+'"Struc_JavaStructExample_contract_attribute_testStructs1">'
    		+'<div class="Struct_attribute" id='+this.prefix+'"JavaStructExample_contract_attribute_testStructs1_text"> text:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"JavaStructExample_testStructs1_text_value">'+struct.text()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"JavaStructExample_contract_attribute_testStructs1_time"> time:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"JavaStructExample_testStructs1_time_value">'+struct.time()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"JavaStructExample_contract_attribute_testStructs1_sender"> sender:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"JavaStructExample_testStructs1_sender_value">'+struct.sender()+'</span>'
    		+'</div>'
  		+'</div>';
	}
	/**
	* Create the gui for the function Struc JavaStructExample-testStructs.
	*/
	this.createStruc_JavaStructExample_contract_attribute_testStructsGui=function(struct) {
		return '<div class="Struct_Mapping" id='+this.prefix+'"Struc_JavaStructExample_contract_attribute_testStructs">'
    		+'<div class="Struct_attribute" id='+this.prefix+'"JavaStructExample_contract_attribute_testStructs_attribute1"> attribute1:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"JavaStructExample_testStructs_attribute1_value">'+struct.attribute1()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"JavaStructExample_contract_attribute_testStructs_attribute2"> attribute2:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"JavaStructExample_testStructs_attribute2_value">'+struct.attribute2()+'</span>'
    		+'</div>'
  		+'</div>';
	}

}//end guifactory

/**
* Class JavaStructExampleController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'JavaStructExampleController.setAddress' - 
* self.prefix+'JavaStructExample_updateAttributes'     - 
* self.prefix+'JavaStructExample_addStruct_uint_string -
* self.prefix+'JavaStructExample_addStruct1_string -
*/
function JavaStructExampleController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'JavaStructExampleController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'JavaStructExample_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'JavaStructExampleController.JavaStructExample_addStruct_uint_string');
		if(btn!=undefined)
			btn.onclick = this.JavaStructExample_addStruct_uint_string;
		else console.log('JavaStructExample_addStruct_uint_string widget not bound');
		var btn = document.getElementById(self.prefix+'JavaStructExampleController.JavaStructExample_addStruct1_string');
		if(btn!=undefined)
			btn.onclick = this.JavaStructExample_addStruct1_string;
		else console.log('JavaStructExample_addStruct1_string widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'JavaStructExample_address');
		if(_address==null)return;

		self.JavaStructExample_instance = JavaStructExampleContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'JavaStructExample_lastStruct_value' - 
	* prefix+'JavaStructExample_structCount_value' - 
	* prefix+'JavaStructExample_structCount1_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var lastStruct_res = self.instance.lastStruct();
		var e = document.getElementById(self.prefix+'JavaStructExample_lastStruct_value');
		if(lastStruct_res!=null && e!=null)
			e.innerText = lastStruct_res;
		else console.log(self.prefix+'JavaStructExample_lastStruct_value not found');
		var structCount_res = self.instance.structCount();
		var e = document.getElementById(self.prefix+'JavaStructExample_structCount_value');
		if(structCount_res!=null && e!=null)
			e.innerText = structCount_res;
		else console.log(self.prefix+'JavaStructExample_structCount_value not found');
		var structCount1_res = self.instance.structCount1();
		var e = document.getElementById(self.prefix+'JavaStructExample_structCount1_value');
		if(structCount1_res!=null && e!=null)
			e.innerText = structCount1_res;
		else console.log(self.prefix+'JavaStructExample_structCount1_value not found');
		var e = document.getElementById(self.prefix+'JavaStructExample_contract_attribute_testStructs1_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var testStructs1_res = self.instance.testStructs1(_key);
			if(testStructs1_res!=null){
			var e1 = document.getElementById(self.prefix+'JavaStructExample_testStructs1_text_value');
			if(e1!=null)	
				e1.innerText = testStructs1_res[0];
			var e1 = document.getElementById(self.prefix+'JavaStructExample_testStructs1_time_value');
			if(e1!=null)	
				e1.innerText = testStructs1_res[1];
			var e1 = document.getElementById(self.prefix+'JavaStructExample_testStructs1_sender_value');
			if(e1!=null)	
				e1.innerText = testStructs1_res[2];
			}}}
		var e = document.getElementById(self.prefix+'JavaStructExample_contract_attribute_testStructs_input');
		if(e!=null){
			var _key = e.value;
			if(_key!=''){
			var testStructs_res = self.instance.testStructs(_key);
			if(testStructs_res!=null){
			var e1 = document.getElementById(self.prefix+'JavaStructExample_testStructs_attribute1_value');
			if(e1!=null)	
				e1.innerText = testStructs_res[0];
			var e1 = document.getElementById(self.prefix+'JavaStructExample_testStructs_attribute2_value');
			if(e1!=null)	
				e1.innerText = testStructs_res[1];
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function JavaStructExample_addStruct.
	*
	* this.prefix+'JavaStructExample_addStruct_uint_string__a1' -
	* this.prefix+'JavaStructExample_addStruct_uint_string__a2' -
	**/
	this.JavaStructExample_addStruct_uint_string=function() {
		var e = document.getElementById(self.prefix+'JavaStructExample_addStruct_uint_string__a1');
		if(e!=null)
			var param__a1 = e.value;
		else console.log(self.prefix+'JavaStructExample_addStruct_uint_string__a1 not found');
		var e = document.getElementById(self.prefix+'JavaStructExample_addStruct_uint_string__a2');
		if(e!=null)
			var param__a2 = e.value;
		else console.log(self.prefix+'JavaStructExample_addStruct_uint_string__a2 not found');
		var res = self.instance.addStruct(param__a1, param__a2);
	}
	
	/**
	* Calls the contract function JavaStructExample_addStruct1.
	*
	* this.prefix+'JavaStructExample_addStruct1_string__text' -
	**/
	this.JavaStructExample_addStruct1_string=function() {
		var e = document.getElementById(self.prefix+'JavaStructExample_addStruct1_string__text');
		if(e!=null)
			var param__text = e.value;
		else console.log(self.prefix+'JavaStructExample_addStruct1_string__text not found');
		var res = self.instance.addStruct1(param__text);
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode JavaStructExampleManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a JavaStructExampleController as 'c' and a JavaStructExampleGuiFactory as 'g'.
**/
function JavaStructExampleManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new JavaStructExampleController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new JavaStructExampleGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'JavaStructExample_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'JavaStructExample_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'JavaStructExample_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code JavaStructExample_create_gui_js
		txt = txt + guifactory.createDefaultGui();
//End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'JavaStructExample' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	}

}// end of manager

/**
* Manages a list of JavaStructExampleManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function JavaStructExampleGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new JavaStructExampleManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'JavaStructExample_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function JavaStructExampleDeployment(guiId){
	this.prefix = guiId;
//Start of user code JavaStructExample_deployment_attributes_js
//TODO: implement
//End of user code

	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code JavaStructExample_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code JavaStructExample_deployment_js
//TODO: implement
//End of user code
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

/**
* Gui factory JavaEventExample1
**/
function JavaEventExample1GuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='JavaEventExample1_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'JavaEventExample1_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'JavaEventExample1_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for JavaEventExample1_contract -->'
+		'		<div class="contract" id="'+this.prefix+'JavaEventExample1_contract">'
+		'		JavaEventExample1:'
+		'		  <input type="text" id="'+this.prefix+'JavaEventExample1_address"> <button id="'+this.prefix+'JavaEventExample1Controller.setAddress" onclick="'+this.prefix+'JavaEventExample1Controller.setAddress()">change JavaEventExample1 Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'JavaEventExample1_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'JavaEventExample1_contract_attribute_eventCount"> eventCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'JavaEventExample1_eventCount_value"> </span>'
+		'		    </div>'
+		'		'
+		'		    <button class="function_btn" id="'+this.prefix+'JavaEventExample1_updateAttributes" onclick="'+this.prefix+'JavaEventExample1Controller._updateAttributes()">update JavaEventExample1 attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'JavaEventExample1_contract_function_JavaEventExample_raiseEvent_string">'
+		'		<legend>raiseEvent</legend>'
+		'			  <label class="function_parameter" for="JavaEventExample_raiseEvent_string__text">_text</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'JavaEventExample_raiseEvent_string__text"'
+		'				  placeholder="_text"/>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaEventExample1Controller.JavaEventExample_raiseEvent_string" onclick="'+this.prefix+'JavaEventExample1Controller.JavaEventExample_raiseEvent_string()">raiseEvent</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaEventExample_raiseEvent_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'JavaEventExample1_contract_function_JavaEventExample1_raiseEvent2">'
+		'		<legend>raiseEvent2</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaEventExample1Controller.JavaEventExample1_raiseEvent2" onclick="'+this.prefix+'JavaEventExample1Controller.JavaEventExample1_raiseEvent2()">raiseEvent2</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaEventExample1_raiseEvent2_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'JavaEventExample1_contract_attribute_eventCount"> eventCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'JavaEventExample1_eventCount_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createJavaEventExample_raiseEvent_stringGui
				+ this.createJavaEventExample1_raiseEvent2Gui
				;
	}

	/**
	* Create the gui for the function raiseEvent.
	*/
	this.createJavaEventExample_raiseEvent_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'JavaEventExample1_contract_function_JavaEventExample_raiseEvent_string">'
+		'		<legend>raiseEvent</legend>'
+		'			  <label class="function_parameter" for="JavaEventExample_raiseEvent_string__text">_text</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'JavaEventExample_raiseEvent_string__text"'
+		'				  placeholder="_text"/>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaEventExample1Controller.JavaEventExample_raiseEvent_string" onclick="'+this.prefix+'JavaEventExample1Controller.JavaEventExample_raiseEvent_string()">raiseEvent</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaEventExample_raiseEvent_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function raiseEvent2.
	*/
	this.createJavaEventExample1_raiseEvent2Gui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'JavaEventExample1_contract_function_JavaEventExample1_raiseEvent2">'
+		'		<legend>raiseEvent2</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaEventExample1Controller.JavaEventExample1_raiseEvent2" onclick="'+this.prefix+'JavaEventExample1Controller.JavaEventExample1_raiseEvent2()">raiseEvent2</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaEventExample1_raiseEvent2_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for JavaEventExample1_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'JavaEventExample1_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

	/**
	* Create a gui for the Event2 event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createEvent2LogDataGui = function(prefix, blockHash, blockNumber
	) {
		return '<div class="eventRow">'
        +' </div>';
	}

}//end guifactory

/**
* Class JavaEventExample1Controller. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'JavaEventExample1Controller.setAddress' - 
* self.prefix+'JavaEventExample1_updateAttributes'     - 
* self.prefix+'JavaEventExample_raiseEvent_string -
* self.prefix+'JavaEventExample1_raiseEvent2 -
*/
function JavaEventExample1Controller() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'JavaEventExample1Controller.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'JavaEventExample1_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'JavaEventExample1Controller.JavaEventExample_raiseEvent_string');
		if(btn!=undefined)
			btn.onclick = this.JavaEventExample_raiseEvent_string;
		else console.log('JavaEventExample_raiseEvent_string widget not bound');
		var btn = document.getElementById(self.prefix+'JavaEventExample1Controller.JavaEventExample1_raiseEvent2');
		if(btn!=undefined)
			btn.onclick = this.JavaEventExample1_raiseEvent2;
		else console.log('JavaEventExample1_raiseEvent2 widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'JavaEventExample1_address');
		if(_address==null)return;

		self.JavaEventExample1_instance = JavaEventExample1Contract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'JavaEventExample1_eventCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var eventCount_res = self.instance.eventCount();
		var e = document.getElementById(self.prefix+'JavaEventExample1_eventCount_value');
		if(eventCount_res!=null && e!=null)
			e.innerText = eventCount_res;
		else console.log(self.prefix+'JavaEventExample1_eventCount_value not found');
	}

	//call functions
	
	/**
	* Calls the contract function JavaEventExample1_raiseEvent.
	*
	* this.prefix+'JavaEventExample_raiseEvent_string__text' -
	**/
	this.JavaEventExample_raiseEvent_string=function() {
		var e = document.getElementById(self.prefix+'JavaEventExample_raiseEvent_string__text');
		if(e!=null)
			var param__text = e.value;
		else console.log(self.prefix+'JavaEventExample_raiseEvent_string__text not found');
		var res = self.instance.raiseEvent(param__text);
	}
	
	/**
	* Calls the contract function JavaEventExample1_raiseEvent2.
	*
	**/
	this.JavaEventExample1_raiseEvent2=function() {
		var res = self.instance.raiseEvent2();
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode JavaEventExample1Manager,
* uses prefix + 'GuiContainer' as target element.
* It combines a JavaEventExample1Controller as 'c' and a JavaEventExample1GuiFactory as 'g'.
**/
function JavaEventExample1Manager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new JavaEventExample1Controller();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new JavaEventExample1GuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	this.eventEvent2 = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'JavaEventExample1_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'JavaEventExample1_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'JavaEventExample1_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code JavaEventExample1_create_gui_js
		txt = txt + guifactory.createDefaultGui();
//End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'JavaEventExample1' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_Event2 = this.getContract().Event2({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventEvent2;
	event_Event2.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of JavaEventExample1Manager uses the guid id to place the gui which is also the eventlogPrefix
*/
function JavaEventExample1GuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.eventEvent2 = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new JavaEventExample1Manager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.eventEvent2 = this.eventEvent2;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'JavaEventExample1_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function JavaEventExample1Deployment(guiId){
	this.prefix = guiId;
//Start of user code JavaEventExample1_deployment_attributes_js
//TODO: implement
//End of user code

	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code JavaEventExample1_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code JavaEventExample1_deployment_js
//TODO: implement
//End of user code
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

/**
* Gui factory ContractExample
**/
function ContractExampleGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='ContractExample_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'ContractExample_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'ContractExample_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for ContractExample_contract -->'
+		'		<div class="contract" id="'+this.prefix+'ContractExample_contract">'
+		'		ContractExample:'
+		'		  <input type="text" id="'+this.prefix+'ContractExample_address"> <button id="'+this.prefix+'ContractExampleController.setAddress" onclick="'+this.prefix+'ContractExampleController.setAddress()">change ContractExample Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'ContractExample_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ContractExample_contract_attribute_text"> text:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ContractExample_text_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ContractExample_contract_attribute_number"> number:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ContractExample_number_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ContractExample_contract_attribute_locked"> locked:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ContractExample_locked_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ContractExample_contract_attribute_creator"> creator:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ContractExample_creator_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ContractExample_contract_attribute_contractState"> contractState:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ContractExample_contractState_value"> </span>'
+		'		    </div>'
+		'		'
+		'		    <button class="function_btn" id="'+this.prefix+'ContractExample_updateAttributes" onclick="'+this.prefix+'ContractExampleController._updateAttributes()">update ContractExample attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_contractData">'
+		'		<legend>contractData</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_contractData" onclick="'+this.prefix+'ContractExampleController.ContractExample_contractData()">contractData</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_contractData_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_changeLocked_bool">'
+		'		<legend>changeLocked</legend>'
+		'			  <label class="function_parameter" for="ContractExample_changeLocked_bool__locked">_locked</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'ContractExample_changeLocked_bool__locked"'
+		'				  placeholder="_locked"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_changeLocked_bool" onclick="'+this.prefix+'ContractExampleController.ContractExample_changeLocked_bool()">changeLocked</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_changeLocked_bool_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_changeState_ContractState">'
+		'		<legend>changeState</legend>'
+		'			  <label class="function_parameter" for="ContractExample_changeState_ContractState__state">_state</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'ContractExample_changeState_ContractState__state"'
+		'				  placeholder="_state"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_changeState_ContractState" onclick="'+this.prefix+'ContractExampleController.ContractExample_changeState_ContractState()">changeState</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_changeState_ContractState_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_isInState">'
+		'		<legend>isInState</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_isInState" onclick="'+this.prefix+'ContractExampleController.ContractExample_isInState()">isInState</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_isInState_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_throwIfLocked">'
+		'		<legend>throwIfLocked</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_throwIfLocked" onclick="'+this.prefix+'ContractExampleController.ContractExample_throwIfLocked()">throwIfLocked</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_throwIfLocked_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_returnStateChange">'
+		'		<legend>returnStateChange</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_returnStateChange" onclick="'+this.prefix+'ContractExampleController.ContractExample_returnStateChange()">returnStateChange</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_returnStateChange_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_returnLast">'
+		'		<legend>returnLast</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_returnLast" onclick="'+this.prefix+'ContractExampleController.ContractExample_returnLast()">returnLast</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_returnLast_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'ContractExample_contract_attribute_text"> text:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ContractExample_text_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ContractExample_contract_attribute_number"> number:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ContractExample_number_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ContractExample_contract_attribute_locked"> locked:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ContractExample_locked_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ContractExample_contract_attribute_creator"> creator:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ContractExample_creator_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ContractExample_contract_attribute_contractState"> contractState:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ContractExample_contractState_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createContractExample_contractDataGui
				+ this.createContractExample_changeLocked_boolGui
				+ this.createContractExample_changeState_ContractStateGui
				+ this.createContractExample_isInStateGui
				+ this.createContractExample_throwIfLockedGui
				+ this.createContractExample_returnStateChangeGui
				+ this.createContractExample_returnLastGui
				;
	}

	/**
	* Create the gui for the function contractData.
	*/
	this.createContractExample_contractDataGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_contractData">'
+		'		<legend>contractData</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_contractData" onclick="'+this.prefix+'ContractExampleController.ContractExample_contractData()">contractData</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_contractData_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function changeLocked.
	*/
	this.createContractExample_changeLocked_boolGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_changeLocked_bool">'
+		'		<legend>changeLocked</legend>'
+		'			  <label class="function_parameter" for="ContractExample_changeLocked_bool__locked">_locked</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'ContractExample_changeLocked_bool__locked"'
+		'				  placeholder="_locked"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_changeLocked_bool" onclick="'+this.prefix+'ContractExampleController.ContractExample_changeLocked_bool()">changeLocked</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_changeLocked_bool_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function changeState.
	*/
	this.createContractExample_changeState_ContractStateGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_changeState_ContractState">'
+		'		<legend>changeState</legend>'
+		'			  <label class="function_parameter" for="ContractExample_changeState_ContractState__state">_state</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'ContractExample_changeState_ContractState__state"'
+		'				  placeholder="_state"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_changeState_ContractState" onclick="'+this.prefix+'ContractExampleController.ContractExample_changeState_ContractState()">changeState</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_changeState_ContractState_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function isInState.
	*/
	this.createContractExample_isInStateGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_isInState">'
+		'		<legend>isInState</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_isInState" onclick="'+this.prefix+'ContractExampleController.ContractExample_isInState()">isInState</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_isInState_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function throwIfLocked.
	*/
	this.createContractExample_throwIfLockedGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_throwIfLocked">'
+		'		<legend>throwIfLocked</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_throwIfLocked" onclick="'+this.prefix+'ContractExampleController.ContractExample_throwIfLocked()">throwIfLocked</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_throwIfLocked_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function returnStateChange.
	*/
	this.createContractExample_returnStateChangeGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_returnStateChange">'
+		'		<legend>returnStateChange</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_returnStateChange" onclick="'+this.prefix+'ContractExampleController.ContractExample_returnStateChange()">returnStateChange</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_returnStateChange_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function returnLast.
	*/
	this.createContractExample_returnLastGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ContractExample_contract_function_ContractExample_returnLast">'
+		'		<legend>returnLast</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ContractExampleController.ContractExample_returnLast" onclick="'+this.prefix+'ContractExampleController.ContractExample_returnLast()">returnLast</button>'
+		'			<div class="function_result" id="'+this.prefix+'ContractExample_returnLast_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for ContractExample_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'ContractExample_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

}//end guifactory

/**
* Class ContractExampleController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'ContractExampleController.setAddress' - 
* self.prefix+'ContractExample_updateAttributes'     - 
* self.prefix+'ContractExample_contractData -
* self.prefix+'ContractExample_changeLocked_bool -
* self.prefix+'ContractExample_changeState_ContractState -
* self.prefix+'ContractExample_isInState -
* self.prefix+'ContractExample_throwIfLocked -
* self.prefix+'ContractExample_returnStateChange -
* self.prefix+'ContractExample_returnLast -
*/
function ContractExampleController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'ContractExampleController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'ContractExample_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'ContractExampleController.ContractExample_contractData');
		if(btn!=undefined)
			btn.onclick = this.ContractExample_contractData;
		else console.log('ContractExample_contractData widget not bound');
		var btn = document.getElementById(self.prefix+'ContractExampleController.ContractExample_changeLocked_bool');
		if(btn!=undefined)
			btn.onclick = this.ContractExample_changeLocked_bool;
		else console.log('ContractExample_changeLocked_bool widget not bound');
		var btn = document.getElementById(self.prefix+'ContractExampleController.ContractExample_changeState_ContractState');
		if(btn!=undefined)
			btn.onclick = this.ContractExample_changeState_ContractState;
		else console.log('ContractExample_changeState_ContractState widget not bound');
		var btn = document.getElementById(self.prefix+'ContractExampleController.ContractExample_isInState');
		if(btn!=undefined)
			btn.onclick = this.ContractExample_isInState;
		else console.log('ContractExample_isInState widget not bound');
		var btn = document.getElementById(self.prefix+'ContractExampleController.ContractExample_throwIfLocked');
		if(btn!=undefined)
			btn.onclick = this.ContractExample_throwIfLocked;
		else console.log('ContractExample_throwIfLocked widget not bound');
		var btn = document.getElementById(self.prefix+'ContractExampleController.ContractExample_returnStateChange');
		if(btn!=undefined)
			btn.onclick = this.ContractExample_returnStateChange;
		else console.log('ContractExample_returnStateChange widget not bound');
		var btn = document.getElementById(self.prefix+'ContractExampleController.ContractExample_returnLast');
		if(btn!=undefined)
			btn.onclick = this.ContractExample_returnLast;
		else console.log('ContractExample_returnLast widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'ContractExample_address');
		if(_address==null)return;

		self.ContractExample_instance = ContractExampleContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'ContractExample_text_value' - 
	* prefix+'ContractExample_number_value' - 
	* prefix+'ContractExample_locked_value' - 
	* prefix+'ContractExample_creator_value' - 
	* prefix+'ContractExample_contractState_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var text_res = self.instance.text();
		var e = document.getElementById(self.prefix+'ContractExample_text_value');
		if(text_res!=null && e!=null)
			e.innerText = text_res;
		else console.log(self.prefix+'ContractExample_text_value not found');
		var number_res = self.instance.number();
		var e = document.getElementById(self.prefix+'ContractExample_number_value');
		if(number_res!=null && e!=null)
			e.innerText = number_res;
		else console.log(self.prefix+'ContractExample_number_value not found');
		var locked_res = self.instance.locked();
		var e = document.getElementById(self.prefix+'ContractExample_locked_value');
		if(locked_res!=null && e!=null)
			e.innerText = locked_res;
		else console.log(self.prefix+'ContractExample_locked_value not found');
		var creator_res = self.instance.creator();
		var e = document.getElementById(self.prefix+'ContractExample_creator_value');
		if(creator_res!=null && e!=null)
			e.innerText = creator_res;
		else console.log(self.prefix+'ContractExample_creator_value not found');
		var contractState_res = self.instance.contractState();
		var e = document.getElementById(self.prefix+'ContractExample_contractState_value');
		if(contractState_res!=null && e!=null)
			e.innerText = contractState_res;
		else console.log(self.prefix+'ContractExample_contractState_value not found');
	}

	//call functions
	
	/**
	* Calls the contract function ContractExample_contractData.
	*
	**/
	this.ContractExample_contractData=function() {
		var res = self.instance.contractData();
		var e = document.getElementById(self.prefix+'ContractExample_contractData_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function ContractExample_changeLocked.
	*
	* this.prefix+'ContractExample_changeLocked_bool__locked' -
	**/
	this.ContractExample_changeLocked_bool=function() {
		var e = document.getElementById(self.prefix+'ContractExample_changeLocked_bool__locked');
		if(e!=null)
			var param__locked = e.value;
		else console.log(self.prefix+'ContractExample_changeLocked_bool__locked not found');
		var res = self.instance.changeLocked(param__locked);
	}
	
	/**
	* Calls the contract function ContractExample_changeState.
	*
	* this.prefix+'ContractExample_changeState_ContractState__state' -
	**/
	this.ContractExample_changeState_ContractState=function() {
		var e = document.getElementById(self.prefix+'ContractExample_changeState_ContractState__state');
		if(e!=null)
			var param__state = e.value;
		else console.log(self.prefix+'ContractExample_changeState_ContractState__state not found');
		var res = self.instance.changeState(param__state);
	}
	
	/**
	* Calls the contract function ContractExample_isInState.
	*
	**/
	this.ContractExample_isInState=function() {
		var res = self.instance.isInState();
	}
	
	/**
	* Calls the contract function ContractExample_throwIfLocked.
	*
	**/
	this.ContractExample_throwIfLocked=function() {
		var res = self.instance.throwIfLocked();
	}
	
	/**
	* Calls the contract function ContractExample_returnStateChange.
	*
	**/
	this.ContractExample_returnStateChange=function() {
		var res = self.instance.returnStateChange();
		var e = document.getElementById(self.prefix+'ContractExample_returnStateChange_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function ContractExample_returnLast.
	*
	**/
	this.ContractExample_returnLast=function() {
		var res = self.instance.returnLast();
		var e = document.getElementById(self.prefix+'ContractExample_returnLast_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode ContractExampleManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a ContractExampleController as 'c' and a ContractExampleGuiFactory as 'g'.
**/
function ContractExampleManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new ContractExampleController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new ContractExampleGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'ContractExample_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'ContractExample_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'ContractExample_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code ContractExample_create_gui_js
		txt = txt + guifactory.createDefaultGui();
//End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'ContractExample' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	}

}// end of manager

/**
* Manages a list of ContractExampleManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function ContractExampleGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new ContractExampleManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'ContractExample_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function ContractExampleDeployment(guiId){
	this.prefix = guiId;
//Start of user code ContractExample_deployment_attributes_js
//TODO: implement
//End of user code


	/**
	* Construct ContractExample.
	**/
	this.deployContractExample_ContractExample_string = function(account, code, providedGas, _text){
//		var c = ContractExample.new( _text,{
//			from: account,
//			data: code,
//			gas:  providedGas
//		});
		return c;
	}
	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code ContractExample_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code ContractExample_deployment_js
//TODO: implement
//End of user code
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

/**
* Gui factory ExampleToken
**/
function ExampleTokenGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='ExampleToken_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'ExampleToken_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'ExampleToken_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for ExampleToken_contract -->'
+		'		<div class="contract" id="'+this.prefix+'ExampleToken_contract">'
+		'		ExampleToken:'
+		'		  <input type="text" id="'+this.prefix+'ExampleToken_address"> <button id="'+this.prefix+'ExampleTokenController.setAddress" onclick="'+this.prefix+'ExampleTokenController.setAddress()">change ExampleToken Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'ExampleToken_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'ExampleToken_contract_attribute_totalTokens"> totalTokens:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ExampleToken_totalTokens_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'ExampleToken_contract_attribute_accountsBalance">mapping  accountsBalance:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'ExampleToken_contract_attribute_accountsBalance_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'ExampleToken_contract_attribute_address"> uint256:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'ExampleToken_accountsBalance_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'ExampleToken_updateAttributes" onclick="'+this.prefix+'ExampleTokenController._updateAttributes()">update ExampleToken attributes</button>'
+		'		  </div>'
+		'		'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ExampleToken_contract_function_TransferableFungible_totalSupply">'
+		'		<legend>totalSupply</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ExampleTokenController.TransferableFungible_totalSupply" onclick="'+this.prefix+'ExampleTokenController.TransferableFungible_totalSupply()">totalSupply</button>'
+		'			<div class="function_result" id="'+this.prefix+'TransferableFungible_totalSupply_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ExampleToken_contract_function_TransferableFungible_balanceOf_address">'
+		'		<legend>balanceOf</legend>'
+		'			  <label class="function_parameter" for="TransferableFungible_balanceOf_address__owner">_owner</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'TransferableFungible_balanceOf_address__owner"'
+		'				  placeholder="_owner"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ExampleTokenController.TransferableFungible_balanceOf_address" onclick="'+this.prefix+'ExampleTokenController.TransferableFungible_balanceOf_address()">balanceOf</button>'
+		'			<div class="function_result" id="'+this.prefix+'TransferableFungible_balanceOf_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ExampleToken_contract_function_TransferableFungible_transfer_address_uint256">'
+		'		<legend>transfer</legend>'
+		'			  <label class="function_parameter" for="TransferableFungible_transfer_address_uint256__to">_to</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'TransferableFungible_transfer_address_uint256__to"'
+		'				  placeholder="_to"/>'
+		'			  <label class="function_parameter" for="TransferableFungible_transfer_address_uint256__value">_value</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'TransferableFungible_transfer_address_uint256__value"'
+		'				  placeholder="_value"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ExampleTokenController.TransferableFungible_transfer_address_uint256" onclick="'+this.prefix+'ExampleTokenController.TransferableFungible_transfer_address_uint256()">transfer</button>'
+		'			<div class="function_result" id="'+this.prefix+'TransferableFungible_transfer_address_uint256_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'ExampleToken_contract_function_TransferableFungible_transferFrom_address_address_uint256">'
+		'		<legend>transferFrom</legend>'
+		'			  <label class="function_parameter" for="TransferableFungible_transferFrom_address_address_uint256__from">_from</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'TransferableFungible_transferFrom_address_address_uint256__from"'
+		'				  placeholder="_from"/>'
+		'			  <label class="function_parameter" for="TransferableFungible_transferFrom_address_address_uint256__to">_to</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'TransferableFungible_transferFrom_address_address_uint256__to"'
+		'				  placeholder="_to"/>'
+		'			  <label class="function_parameter" for="TransferableFungible_transferFrom_address_address_uint256__value">_value</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'TransferableFungible_transferFrom_address_address_uint256__value"'
+		'				  placeholder="_value"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ExampleTokenController.TransferableFungible_transferFrom_address_address_uint256" onclick="'+this.prefix+'ExampleTokenController.TransferableFungible_transferFrom_address_address_uint256()">transferFrom</button>'
+		'			<div class="function_result" id="'+this.prefix+'TransferableFungible_transferFrom_address_address_uint256_res"></div>'
+		'		  </fieldset>'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'ExampleToken_contract_attribute_totalTokens"> totalTokens:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'ExampleToken_totalTokens_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createExampleToken_totalSupplyGui
				+ this.createExampleToken_balanceOf_addressGui
				+ this.createExampleToken_transfer_address_uint256Gui
				+ this.createExampleToken_transferFrom_address_address_uint256Gui
				;
	}

	/**
	* Create the gui for the function totalSupply.
	*/
	this.createExampleToken_totalSupplyGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ExampleToken_contract_function_TransferableFungible_totalSupply">'
+		'		<legend>totalSupply</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'ExampleTokenController.TransferableFungible_totalSupply" onclick="'+this.prefix+'ExampleTokenController.TransferableFungible_totalSupply()">totalSupply</button>'
+		'			<div class="function_result" id="'+this.prefix+'TransferableFungible_totalSupply_res"></div>'
+		'		  </fieldset>'
;
	}
,
	/**
	* Create the gui for the function balanceOf.
	*/
	this.createExampleToken_balanceOf_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ExampleToken_contract_function_TransferableFungible_balanceOf_address">'
+		'		<legend>balanceOf</legend>'
+		'			  <label class="function_parameter" for="TransferableFungible_balanceOf_address__owner">_owner</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'TransferableFungible_balanceOf_address__owner"'
+		'				  placeholder="_owner"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ExampleTokenController.TransferableFungible_balanceOf_address" onclick="'+this.prefix+'ExampleTokenController.TransferableFungible_balanceOf_address()">balanceOf</button>'
+		'			<div class="function_result" id="'+this.prefix+'TransferableFungible_balanceOf_address_res"></div>'
+		'		  </fieldset>'
;
	}
,
	/**
	* Create the gui for the function transfer.
	*/
	this.createExampleToken_transfer_address_uint256Gui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ExampleToken_contract_function_TransferableFungible_transfer_address_uint256">'
+		'		<legend>transfer</legend>'
+		'			  <label class="function_parameter" for="TransferableFungible_transfer_address_uint256__to">_to</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'TransferableFungible_transfer_address_uint256__to"'
+		'				  placeholder="_to"/>'
+		'			  <label class="function_parameter" for="TransferableFungible_transfer_address_uint256__value">_value</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'TransferableFungible_transfer_address_uint256__value"'
+		'				  placeholder="_value"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ExampleTokenController.TransferableFungible_transfer_address_uint256" onclick="'+this.prefix+'ExampleTokenController.TransferableFungible_transfer_address_uint256()">transfer</button>'
+		'			<div class="function_result" id="'+this.prefix+'TransferableFungible_transfer_address_uint256_res"></div>'
+		'		  </fieldset>'
;
	}
,
	/**
	* Create the gui for the function transferFrom.
	*/
	this.createExampleToken_transferFrom_address_address_uint256Gui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'ExampleToken_contract_function_TransferableFungible_transferFrom_address_address_uint256">'
+		'		<legend>transferFrom</legend>'
+		'			  <label class="function_parameter" for="TransferableFungible_transferFrom_address_address_uint256__from">_from</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'TransferableFungible_transferFrom_address_address_uint256__from"'
+		'				  placeholder="_from"/>'
+		'			  <label class="function_parameter" for="TransferableFungible_transferFrom_address_address_uint256__to">_to</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'TransferableFungible_transferFrom_address_address_uint256__to"'
+		'				  placeholder="_to"/>'
+		'			  <label class="function_parameter" for="TransferableFungible_transferFrom_address_address_uint256__value">_value</label>'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'TransferableFungible_transferFrom_address_address_uint256__value"'
+		'				  placeholder="_value"/>'
+		'			<button class="function_btn" id="'+this.prefix+'ExampleTokenController.TransferableFungible_transferFrom_address_address_uint256" onclick="'+this.prefix+'ExampleTokenController.TransferableFungible_transferFrom_address_address_uint256()">transferFrom</button>'
+		'			<div class="function_result" id="'+this.prefix+'TransferableFungible_transferFrom_address_address_uint256_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for ExampleToken_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'ExampleToken_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

}//end guifactory

/**
* Class ExampleTokenController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'ExampleTokenController.setAddress' - 
* self.prefix+'ExampleToken_updateAttributes'     - 
*/
function ExampleTokenController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'ExampleTokenController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'ExampleToken_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'ExampleTokenController.TransferableFungible_totalSupply');
		if(btn!=undefined)
			btn.onclick = this.TransferableFungible_totalSupply;
		else console.log('TransferableFungible_totalSupply widget not bound');

		var btn = document.getElementById(self.prefix+'ExampleTokenController.TransferableFungible_balanceOf_address');
		if(btn!=undefined)
			btn.onclick = this.TransferableFungible_balanceOf_address;
		else console.log('TransferableFungible_balanceOf_address widget not bound');

		var btn = document.getElementById(self.prefix+'ExampleTokenController.TransferableFungible_transfer_address_uint256');
		if(btn!=undefined)
			btn.onclick = this.TransferableFungible_transfer_address_uint256;
		else console.log('TransferableFungible_transfer_address_uint256 widget not bound');

		var btn = document.getElementById(self.prefix+'ExampleTokenController.TransferableFungible_transferFrom_address_address_uint256');
		if(btn!=undefined)
			btn.onclick = this.TransferableFungible_transferFrom_address_address_uint256;
		else console.log('TransferableFungible_transferFrom_address_address_uint256 widget not bound');


	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'ExampleToken_address');
		if(_address==null)return;

		self.ExampleToken_instance = ExampleTokenContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'ExampleToken_totalTokens_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var totalTokens_res = self.instance.totalTokens();
		var e = document.getElementById(self.prefix+'ExampleToken_totalTokens_value');
		if(totalTokens_res!=null && e!=null)
			e.innerText = totalTokens_res;
		else console.log(self.prefix+'ExampleToken_totalTokens_value not found');
		var e = document.getElementById(self.prefix+'ExampleToken_contract_attribute_accountsBalance_input');
		if(e!=null){
			var _key = document.getElementById(self.prefix+'ExampleToken_contract_attribute_accountsBalance_input').value;
			if(_key!=''){
			var accountsBalance_res = self.instance.accountsBalance(_key);
			if(accountsBalance_res!=null){
				var e1 = document.getElementById(self.prefix+'ExampleToken_accountsBalance_value');
				if(e1!=null)	
					e1.innerText = accountsBalance_res;
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function ExampleToken_totalSupply.
	*
	**/
	this.TransferableFungible_totalSupply=function() {
		var res = self.instance.totalSupply();
		var e = document.getElementById(self.prefix+'TransferableFungible_totalSupply_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function ExampleToken_balanceOf.
	*
	* this.prefix+'TransferableFungible_balanceOf_address__owner' -
	**/
	this.TransferableFungible_balanceOf_address=function() {
		var e = document.getElementById(self.prefix+'TransferableFungible_balanceOf_address__owner');
		if(e!=null)
			var param__owner = e.value;
		else console.log(self.prefix+'TransferableFungible_balanceOf_address__owner not found');
		var res = self.instance.balanceOf(param__owner);
		var e = document.getElementById(self.prefix+'TransferableFungible_balanceOf_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function ExampleToken_transfer.
	*
	* this.prefix+'TransferableFungible_transfer_address_uint256__to' -
	* this.prefix+'TransferableFungible_transfer_address_uint256__value' -
	**/
	this.TransferableFungible_transfer_address_uint256=function() {
		var e = document.getElementById(self.prefix+'TransferableFungible_transfer_address_uint256__to');
		if(e!=null)
			var param__to = e.value;
		else console.log(self.prefix+'TransferableFungible_transfer_address_uint256__to not found');
		var e = document.getElementById(self.prefix+'TransferableFungible_transfer_address_uint256__value');
		if(e!=null)
			var param__value = e.value;
		else console.log(self.prefix+'TransferableFungible_transfer_address_uint256__value not found');
		var res = self.instance.transfer(param__to, param__value);
		var e = document.getElementById(self.prefix+'TransferableFungible_transfer_address_uint256_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function ExampleToken_transferFrom.
	*
	* this.prefix+'TransferableFungible_transferFrom_address_address_uint256__from' -
	* this.prefix+'TransferableFungible_transferFrom_address_address_uint256__to' -
	* this.prefix+'TransferableFungible_transferFrom_address_address_uint256__value' -
	**/
	this.TransferableFungible_transferFrom_address_address_uint256=function() {
		var e = document.getElementById(self.prefix+'TransferableFungible_transferFrom_address_address_uint256__from');
		if(e!=null)
			var param__from = e.value;
		else console.log(self.prefix+'TransferableFungible_transferFrom_address_address_uint256__from not found');
		var e = document.getElementById(self.prefix+'TransferableFungible_transferFrom_address_address_uint256__to');
		if(e!=null)
			var param__to = e.value;
		else console.log(self.prefix+'TransferableFungible_transferFrom_address_address_uint256__to not found');
		var e = document.getElementById(self.prefix+'TransferableFungible_transferFrom_address_address_uint256__value');
		if(e!=null)
			var param__value = e.value;
		else console.log(self.prefix+'TransferableFungible_transferFrom_address_address_uint256__value not found');
		var res = self.instance.transferFrom(param__from, param__to, param__value);
		var e = document.getElementById(self.prefix+'TransferableFungible_transferFrom_address_address_uint256_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode ExampleTokenManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a ExampleTokenController as 'c' and a ExampleTokenGuiFactory as 'g'.
**/
function ExampleTokenManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new ExampleTokenController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new ExampleTokenGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'ExampleToken_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'ExampleToken_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'ExampleToken_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code ExampleToken_create_gui_js
		txt = txt + guifactory.createDefaultGui();
//End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'ExampleToken' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	}

}// end of manager

/**
* Manages a list of ExampleTokenManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function ExampleTokenGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new ExampleTokenManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'ExampleToken_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function ExampleTokenDeployment(guiId){
	this.prefix = guiId;
//Start of user code ExampleToken_deployment_attributes_js
//TODO: implement
//End of user code


	/**
	* Construct ExampleToken.
	**/
	this.deployExampleToken_ExampleToken_uint256 = function(account, code, providedGas, _totalTokens){
//		var c = ExampleToken.new( _totalTokens,{
//			from: account,
//			data: code,
//			gas:  providedGas
//		});
		return c;
	}
	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code ExampleToken_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code ExampleToken_deployment_js
//TODO: implement
//End of user code
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

/**
* Gui factory JavaPayableExample
**/
function JavaPayableExampleGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='JavaPayableExample_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'JavaPayableExample_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'JavaPayableExample_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for JavaPayableExample_contract -->'
+		'		<div class="contract" id="'+this.prefix+'JavaPayableExample_contract">'
+		'		JavaPayableExample:'
+		'		  <input type="text" id="'+this.prefix+'JavaPayableExample_address"> <button id="'+this.prefix+'JavaPayableExampleController.setAddress" onclick="'+this.prefix+'JavaPayableExampleController.setAddress()">change JavaPayableExample Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'JavaPayableExample_contract_attributes"> attributes:'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'JavaPayableExample_contract_attribute_amounts">mapping  amounts:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'JavaPayableExample_contract_attribute_amounts_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'JavaPayableExample_contract_attribute_address"> uint256:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'JavaPayableExample_amounts_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'JavaPayableExample_updateAttributes" onclick="'+this.prefix+'JavaPayableExampleController._updateAttributes()">update JavaPayableExample attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'JavaPayableExample_contract_function_JavaPayableExample_sendBack">'
+		'		<legend>sendBack</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaPayableExampleController.JavaPayableExample_sendBack" onclick="'+this.prefix+'JavaPayableExampleController.JavaPayableExample_sendBack()">sendBack</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaPayableExample_sendBack_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'JavaPayableExample_contract_function_JavaPayableExample_recieve">'
+		'		<legend>recieve</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaPayableExampleController.JavaPayableExample_recieve" onclick="'+this.prefix+'JavaPayableExampleController.JavaPayableExample_recieve()">recieve</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaPayableExample_recieve_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'JavaPayableExample_contract_function_JavaPayableExample_relay_address">'
+		'		<legend>relay</legend>'
+		'			  <label class="function_parameter" for="JavaPayableExample_relay_address__to">_to</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'JavaPayableExample_relay_address__to"'
+		'				  placeholder="_to"/>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaPayableExampleController.JavaPayableExample_relay_address" onclick="'+this.prefix+'JavaPayableExampleController.JavaPayableExample_relay_address()">relay</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaPayableExample_relay_address_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		''
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createJavaPayableExample_sendBackGui
				+ this.createJavaPayableExample_recieveGui
				+ this.createJavaPayableExample_relay_addressGui
				;
	}

	/**
	* Create the gui for the function sendBack.
	*/
	this.createJavaPayableExample_sendBackGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'JavaPayableExample_contract_function_JavaPayableExample_sendBack">'
+		'		<legend>sendBack</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaPayableExampleController.JavaPayableExample_sendBack" onclick="'+this.prefix+'JavaPayableExampleController.JavaPayableExample_sendBack()">sendBack</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaPayableExample_sendBack_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function recieve.
	*/
	this.createJavaPayableExample_recieveGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'JavaPayableExample_contract_function_JavaPayableExample_recieve">'
+		'		<legend>recieve</legend>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaPayableExampleController.JavaPayableExample_recieve" onclick="'+this.prefix+'JavaPayableExampleController.JavaPayableExample_recieve()">recieve</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaPayableExample_recieve_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function relay.
	*/
	this.createJavaPayableExample_relay_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'JavaPayableExample_contract_function_JavaPayableExample_relay_address">'
+		'		<legend>relay</legend>'
+		'			  <label class="function_parameter" for="JavaPayableExample_relay_address__to">_to</label>'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'JavaPayableExample_relay_address__to"'
+		'				  placeholder="_to"/>'
+		'			<button class="function_btn" id="'+this.prefix+'JavaPayableExampleController.JavaPayableExample_relay_address" onclick="'+this.prefix+'JavaPayableExampleController.JavaPayableExample_relay_address()">relay</button>'
+		'			<div class="function_result" id="'+this.prefix+'JavaPayableExample_relay_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for JavaPayableExample_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'JavaPayableExample_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

}//end guifactory

/**
* Class JavaPayableExampleController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'JavaPayableExampleController.setAddress' - 
* self.prefix+'JavaPayableExample_updateAttributes'     - 
* self.prefix+'JavaPayableExample_sendBack -
* self.prefix+'JavaPayableExample_recieve -
* self.prefix+'JavaPayableExample_relay_address -
*/
function JavaPayableExampleController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'JavaPayableExampleController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'JavaPayableExample_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'JavaPayableExampleController.JavaPayableExample_sendBack');
		if(btn!=undefined)
			btn.onclick = this.JavaPayableExample_sendBack;
		else console.log('JavaPayableExample_sendBack widget not bound');
		var btn = document.getElementById(self.prefix+'JavaPayableExampleController.JavaPayableExample_recieve');
		if(btn!=undefined)
			btn.onclick = this.JavaPayableExample_recieve;
		else console.log('JavaPayableExample_recieve widget not bound');
		var btn = document.getElementById(self.prefix+'JavaPayableExampleController.JavaPayableExample_relay_address');
		if(btn!=undefined)
			btn.onclick = this.JavaPayableExample_relay_address;
		else console.log('JavaPayableExample_relay_address widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'JavaPayableExample_address');
		if(_address==null)return;

		self.JavaPayableExample_instance = JavaPayableExampleContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var e = document.getElementById(self.prefix+'JavaPayableExample_contract_attribute_amounts_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var amounts_res = self.instance.amounts(_key);
			if(amounts_res!=null){
				var e1 = document.getElementById(self.prefix+'JavaPayableExample_amounts_value');
				if(e1!=null)	
					e1.innerText = amounts_res;
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function JavaPayableExample_sendBack.
	*
	**/
	this.JavaPayableExample_sendBack=function() {
		var res = self.instance.sendBack();
	}
	
	/**
	* Calls the contract function JavaPayableExample_recieve.
	*
	**/
	this.JavaPayableExample_recieve=function() {
		var res = self.instance.recieve();
	}
	
	/**
	* Calls the contract function JavaPayableExample_relay.
	*
	* this.prefix+'JavaPayableExample_relay_address__to' -
	**/
	this.JavaPayableExample_relay_address=function() {
		var e = document.getElementById(self.prefix+'JavaPayableExample_relay_address__to');
		if(e!=null)
			var param__to = e.value;
		else console.log(self.prefix+'JavaPayableExample_relay_address__to not found');
		var res = self.instance.relay(param__to);
		var e = document.getElementById(self.prefix+'JavaPayableExample_relay_address_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode JavaPayableExampleManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a JavaPayableExampleController as 'c' and a JavaPayableExampleGuiFactory as 'g'.
**/
function JavaPayableExampleManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new JavaPayableExampleController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new JavaPayableExampleGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'JavaPayableExample_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'JavaPayableExample_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'JavaPayableExample_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code JavaPayableExample_create_gui_js
		txt = txt + guifactory.createDefaultGui();
//End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'JavaPayableExample' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	}

}// end of manager

/**
* Manages a list of JavaPayableExampleManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function JavaPayableExampleGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new JavaPayableExampleManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'JavaPayableExample_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function JavaPayableExampleDeployment(guiId){
	this.prefix = guiId;
//Start of user code JavaPayableExample_deployment_attributes_js
//TODO: implement
//End of user code

	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code JavaPayableExample_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code JavaPayableExample_deployment_js
//TODO: implement
//End of user code
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

/**
* Gui factory JavaOwnerExample
**/
function JavaOwnerExampleGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='JavaOwnerExample_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'JavaOwnerExample_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'JavaOwnerExample_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for JavaOwnerExample_contract -->'
+		'		<div class="contract" id="'+this.prefix+'JavaOwnerExample_contract">'
+		'		JavaOwnerExample:'
+		'		  <input type="text" id="'+this.prefix+'JavaOwnerExample_address"> <button id="'+this.prefix+'JavaOwnerExampleController.setAddress" onclick="'+this.prefix+'JavaOwnerExampleController.setAddress()">change JavaOwnerExample Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'JavaOwnerExample_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'JavaOwnerExample_contract_attribute_owner"> owner:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'JavaOwnerExample_owner_value"> </span>'
+		'		    </div>'
+		'		'
+		'		    <button class="function_btn" id="'+this.prefix+'JavaOwnerExample_updateAttributes" onclick="'+this.prefix+'JavaOwnerExampleController._updateAttributes()">update JavaOwnerExample attributes</button>'
+		'		  </div>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'JavaOwnerExample_contract_attribute_owner"> owner:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'JavaOwnerExample_owner_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for JavaOwnerExample_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'JavaOwnerExample_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

}//end guifactory

/**
* Class JavaOwnerExampleController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'JavaOwnerExampleController.setAddress' - 
* self.prefix+'JavaOwnerExample_updateAttributes'     - 
*/
function JavaOwnerExampleController() {

	this.instance = undefined;
	this.prefix='';
	this.contractAddress = undefined; 
	this.eventlogPrefix = '';
	var self = this;

	/**
	* Binds the element with the prefix-id to the corresponding element.
	*/
	this.bindGui=function() {
		console.log('bind gui for:'+self.prefix);
		var btn = document.getElementById(self.prefix+'JavaOwnerExampleController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'JavaOwnerExample_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'JavaOwnerExample_address');
		if(_address==null)return;

		self.JavaOwnerExample_instance = JavaOwnerExampleContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'JavaOwnerExample_owner_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var owner_res = self.instance.owner();
		var e = document.getElementById(self.prefix+'JavaOwnerExample_owner_value');
		if(owner_res!=null && e!=null)
			e.innerText = owner_res;
		else console.log(self.prefix+'JavaOwnerExample_owner_value not found');
	}

	//call functions
	
//delegated calls
}// end controller	

/**
* class as GlueCode JavaOwnerExampleManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a JavaOwnerExampleController as 'c' and a JavaOwnerExampleGuiFactory as 'g'.
**/
function JavaOwnerExampleManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new JavaOwnerExampleController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new JavaOwnerExampleGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	
	/**
	* adds the gui element to the given 'e' element
	**/
	this.addGui = function(e) {
		if(e==null)
			e = document.getElementById(this.containerId);
		if(e==null){
		console.log(this.containerId+' not found or :'+e);
		return;
		}
		var elemDiv = document.createElement('div');
		elemDiv.id= this.prefix +'JavaOwnerExample_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'JavaOwnerExample_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'JavaOwnerExample_address not found');
		this.c.bindGui();
	}	
	
	/**
	* clears the given element 'e'.
	**/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.containerId);
		e.innerHTML ='';
	}

	/**
	* Create the gui with the given 'guiFactory'. Places an sceleton arount it.
	* @return the gui txt used as innerHTML
	**/
	this.createGui = function(guifactory){
		var txt ='';
//Start of user code JavaOwnerExample_create_gui_js
		txt = txt + guifactory.createDefaultGui();
//End of user code
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Create a small gui, only the attributes. Places an sceleton arount it.
	**/	
	this.createSmallGui = function(guifactory){
		var txt ='';
		txt = txt + guifactory.createAttributesGui();
		return guifactory.createSeletonGui(txt);

	}

	/**
	* Update the attributes.
	**/
	this.updateGui = function(){
		this.c._updateAttributes();
	}

	/**
	* Getter for the contract 'JavaOwnerExample' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	}

}// end of manager

/**
* Manages a list of JavaOwnerExampleManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function JavaOwnerExampleGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new JavaOwnerExampleManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.watchEvents();
		if(this.guiFunction!=null)
			m.guiFunction = this.guiFunction;
		this.managers.push(m);
		this.managerMap[contract.address] = m;
	}

	/**
	 * Changes the gui function for all managers.
	 */
	this.changeGuiFunction =  function(guiFunction){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.guiFunction = guiFunction;
		}
	}
	
	/**
	* Clears the element or the element with id 'prefix'.
	* @e an element
	*/
	this.clearGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e!==undefined)
			e.innerHTML ='';
	}
		
	/**
	* Displays all guis of the managed contracts.
	* @e an element
	*/
	this.displayGui = function(e){
		if(e==null)
			e = document.getElementById(this.prefix);
		if(e==undefined) return;
		for (i in this.managers) {
			var manager = this.managers[i] ;
			var elemDiv = document.createElement('div');
			elemDiv.id= manager.prefix + 'GuiContainer';//'JavaOwnerExample_gui';
			e.appendChild(elemDiv);
			if(this.guiFunction==null)
				elemDiv.innerHTML = manager.createGui(manager.g);
			else elemDiv.innerHTML = this.guiFunction(manager.g);
			manager.c.bindGui();
		}
	}
	/**
	* Displays a simple gui.
	*/
	this.displaySimpleGui = function(){
		for (i in this.managers) {
			var manager = this.managers[i] ;
			manager.addGui(null);
		}
	}
	/**
	* Update the gui.
	*/
	this.updateGui = function(){
		for (i in this.managers) {
			this.managers[i].updateGui();
		}
//		console.log('update');
	}
}// end of gui mananger

/**
* Deploys the contract.
* Each constructor is available.
**/
function JavaOwnerExampleDeployment(guiId){
	this.prefix = guiId;
//Start of user code JavaOwnerExample_deployment_attributes_js
//TODO: implement
//End of user code


	/**
	* Construct JavaOwnerExample.
	**/
	this.deployJavaOwnerExample_JavaOwnerExample = function(account, code, providedGas){
//		var c = JavaOwnerExample.new({
//			from: account,
//			data: code,
//			gas:  providedGas
//		});
		return c;
	}
	
	/**
	* The default deployer function.
	**/
	this.deployDefault = function(){
		//Start of user code JavaOwnerExample_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code JavaOwnerExample_deployment_js
//TODO: implement
//End of user code
}

/**
* A class to manage a single page dapp.
* The ContractsPage object uses the managers to display the gui.
**/
function ContractsPage(prefix) {
	this.prefix=prefix;
	//Start of user code page_contracts_attributes
		//TODO: implement
	//End of user code

	
	/**
	* Places the default gui in the page.
	**/
	this.placeDefaultGui=function() {
	this.createDefaultGui();
	}
/**
* Create the default Gui.
* Use this method to customize the gui.
**/
this.createDefaultGui=function() {
	//Start of user code page_Contracts_create_default_gui_functions
		//TODO: implement
	//End of user code
}
	//Start of user code page_Contracts_functions
		//TODO: implement
	//End of user code

}// end of ContractsPage

//Start of user code Contracts_custom_functions
		//TODO: implement
//End of user code

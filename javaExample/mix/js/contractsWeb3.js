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



// file header
// contractVariable for Library
var LibraryContract = web3.eth.contract([
{"constant":true,"inputs":[],"name":"employeeCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"userCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"activeUserCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"bookCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"activeBooksCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant":true,"inputs":[],"name":"managerCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "managers","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "employees","outputs": [
{ "name": "", "type": "bool"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "users","outputs": [
{ "name": "userState", "type": "UserState"}
,{ "name": "userName", "type": "string"}
,{ "name": "userId", "type": "uint256"}
,{ "name": "borrowedBooks", "type": "uint256"}
,{ "name": "borrowedBooksCount", "type": "uint256"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "uint256"}],"name": "books","outputs": [
{ "name": "bookTitel", "type": "string"}
,{ "name": "bookId", "type": "uint256"}
,{ "name": "bookState", "type": "Bookstate"}
,{ "name": "currentOwner", "type": "address"}
],"type": "function"	},
{"constant": true,"inputs": [{"name": "","type": "address"}],"name": "usersAdresses","outputs": [
{ "name": "", "type": "uint256"}
],"type": "function"	},
{ "constant": false,
    "inputs": [{"name": "id","type": "uint256"},{"name": "_address","type": "address"}],    
    "name": "returnBook",
    "outputs": [],
    "type": "function" }
,{ "constant": true,
    "inputs": [{"name": "_id","type": "uint256"}],    
    "name": "getBook",
    "outputs": [{"name": "name","type": "string"},{"name": "state","type": "Bookstate"},{"name": "currentOwner","type": "address"}],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "registerManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "unregisterManager",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "registerEmployee",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "unregisterEmployee",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_address","type": "address"},{"name": "_name","type": "string"}],    
    "name": "registerUser",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "unregisterUser",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "_titel","type": "string"}],    
    "name": "addBook",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "id","type": "uint256"},{"name": "_state","type": "uint256"}],    
    "name": "changeBookState",
    "outputs": [],
    "type": "function" }
,{ "constant": false,
    "inputs": [{"name": "id","type": "uint256"},{"name": "_address","type": "address"}],    
    "name": "borrowBook",
    "outputs": [],
    "type": "function" }
,
  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "id",
         "type": "uint256"}
,		{"indexed": false,
		 "name": "_state",
         "type": "uint256"}
	],    
    "name": "BookSate",
    "type": "event"  }
,  { "anonymous": false,
    "inputs": 
	[
		{"indexed": false,
		 "name": "id",
         "type": "uint256"}
,		{"indexed": false,
		 "name": "titel",
         "type": "string"}
	],    
    "name": "NewBook",
    "type": "event"  }
]);   




var LibraryContract = web3.eth.contract([
  {
    "constant": true,
    "inputs": [],    
    "name": "Library",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "registerManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "unregisterManager",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "registerEmployee",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "unregisterEmployee",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_address","type": "address"},{"name": "_name","type": "string"}],    
    "name": "registerUser",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_address","type": "address"}],    
    "name": "unregisterUser",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "_titel","type": "string"}],    
    "name": "addBook",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"},{"name": "_state","type": "Bookstate"}],    
    "name": "changeBookState",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"},{"name": "_address","type": "address"}],    
    "name": "borrowBook",
    "outputs": [],
    "type": "function"
  }
,  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"},{"name": "_address","type": "address"}],    
    "name": "returnBook",
    "outputs": [],
    "type": "function"
  }
 ,
  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"},{"name": "_state","type": "Bookstate"}],    
    "name": "BookSate",
    "type": "event"
  }

  {
    "constant": true,
    "inputs": [{"name": "id","type": "uint"}],    
    "name": "NewBook",
    "type": "event"
  }

] );   



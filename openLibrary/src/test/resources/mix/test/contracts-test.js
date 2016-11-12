// file header
/**
* A simple bean class around the contract.
* The LibraryModel.
**/
function LibraryModel(contract) {
this.contract = contract;
	/**
	* Getter for employeeCount.
	**/
	this.getEmployeeCount = function(){
		return contract.employeeCount(); 
	}
	/**
	* Getter for userCount.
	**/
	this.getUserCount = function(){
		return contract.userCount(); 
	}
	/**
	* Getter for activeUserCount.
	**/
	this.getActiveUserCount = function(){
		return contract.activeUserCount(); 
	}
	/**
	* Getter for bookCount.
	**/
	this.getBookCount = function(){
		return contract.bookCount(); 
	}
	/**
	* Getter for activeBooksCount.
	**/
	this.getActiveBooksCount = function(){
		return contract.activeBooksCount(); 
	}
	/**
	* Getter for managerCount.
	**/
	this.getManagerCount = function(){
		return contract.managerCount(); 
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getManagers=function(key) {
		return contract.managers(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getEmployees=function(key) {
		return contract.employees(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getUsers=function(key) {
		return contract.users(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getBooks=function(key) {
		return contract.books(key);
	}
	/**
	* Get the mapped value for a key.
	*/
	this.getUsersAdresses=function(key) {
		return contract.usersAdresses(key);
	}
	/**
	* Call returnBook.
	**/
	this.returnBook = function(id,_address){
		return contract.returnBook(id,_address); 
	}
	/**
	* Call getBook.
	**/
	this.getBook = function(_id){
		return contract.getBook(_id); 
	}
	/**
	* Call registerManager.
	**/
	this.registerManager = function(_address){
		return contract.registerManager(_address); 
	}
	/**
	* Call unregisterManager.
	**/
	this.unregisterManager = function(_address){
		return contract.unregisterManager(_address); 
	}
	/**
	* Call registerEmployee.
	**/
	this.registerEmployee = function(_address){
		return contract.registerEmployee(_address); 
	}
	/**
	* Call unregisterEmployee.
	**/
	this.unregisterEmployee = function(_address){
		return contract.unregisterEmployee(_address); 
	}
	/**
	* Call registerUser.
	**/
	this.registerUser = function(_address,_name){
		return contract.registerUser(_address,_name); 
	}
	/**
	* Call unregisterUser.
	**/
	this.unregisterUser = function(_address){
		return contract.unregisterUser(_address); 
	}
	/**
	* Call addBook.
	**/
	this.addBook = function(_titel){
		return contract.addBook(_titel); 
	}
	/**
	* Call changeBookState.
	**/
	this.changeBookState = function(id,_state){
		return contract.changeBookState(id,_state); 
	}
	/**
	* Call borrowBook.
	**/
	this.borrowBook = function(id,_address){
		return contract.borrowBook(id,_address); 
	}
}// end of function LibraryModel

//test class for Library
function TestLibrary(contract) {
	
	this.test_instance = contract;
	this.model = new LibraryModel(contract);
	this.prefix='';
	this.messageBlockId = "testResult";
	var self = this;

	this.testSetup=function(){
		//Start of user code testSetup_Library
		//TODO: implement
		//End of user code
	}

	this.allTests=function(){
		this.testSetup();
		this.testAttributes();
		this.testLibrary_returnBook_uint_address();
		this.testLibrary_getBook_uint();
		this.testLibrary_registerManager_address();
		this.testLibrary_unregisterManager_address();
		this.testLibrary_registerEmployee_address();
		this.testLibrary_unregisterEmployee_address();
		this.testLibrary_registerUser_address_string();
		this.testLibrary_unregisterUser_address();
		this.testLibrary_addBook_string();
		this.testLibrary_changeBookState_uint_uint();
		this.testLibrary_borrowBook_uint_address();
		this.customTests();
	
		//Start of user code allTests_Library
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
	//Start of user code attributeTests_Library
	//TODO: implement
	//End of user code
	}

	//Test for Library_returnBook_uint_address
	this.testLibrary_returnBook_uint_address=function() {
		//	var res = this.test_instance.returnBook( p_id, p__address);
		//Start of user code test_Library_returnBook_uint_address
		//TODO: implement
//console.log('testLibrary_returnBook_uint_address');
//	var p_id = '';
//	var p__address = '';
//	var res = this.test_instance.returnBook( p_id, p__address);
//	var state = res==="";		
		this.printTest("testreturnBook", "executed: testLibrary_returnBook_uint_address", false);		
		//End of user code
	}

	//Test for Library_getBook_uint
	this.testLibrary_getBook_uint=function() {
		//	var res = this.test_instance.getBook( p__id);
		//Start of user code test_Library_getBook_uint
		//TODO : implement this
		//var test = false;		
		//this.testAE("testgetBook", "executed: testLibrary_getBook_uint",true, test);		
		//End of user code
	}

	//Test for Library_registerManager_address
	this.testLibrary_registerManager_address=function() {
		//	var res = this.test_instance.registerManager( p__address);
		//Start of user code test_Library_registerManager_address
		//TODO: implement
//console.log('testLibrary_registerManager_address');
//	var p__address = '';
//	var res = this.test_instance.registerManager( p__address);
//	var state = res==="";		
		this.printTest("testregisterManager", "executed: testLibrary_registerManager_address", false);		
		//End of user code
	}

	//Test for Library_unregisterManager_address
	this.testLibrary_unregisterManager_address=function() {
		//	var res = this.test_instance.unregisterManager( p__address);
		//Start of user code test_Library_unregisterManager_address
		//TODO: implement
//console.log('testLibrary_unregisterManager_address');
//	var p__address = '';
//	var res = this.test_instance.unregisterManager( p__address);
//	var state = res==="";		
		this.printTest("testunregisterManager", "executed: testLibrary_unregisterManager_address", false);		
		//End of user code
	}

	//Test for Library_registerEmployee_address
	this.testLibrary_registerEmployee_address=function() {
		//	var res = this.test_instance.registerEmployee( p__address);
		//Start of user code test_Library_registerEmployee_address
		//TODO: implement
//console.log('testLibrary_registerEmployee_address');
//	var p__address = '';
//	var res = this.test_instance.registerEmployee( p__address);
//	var state = res==="";		
		this.printTest("testregisterEmployee", "executed: testLibrary_registerEmployee_address", false);		
		//End of user code
	}

	//Test for Library_unregisterEmployee_address
	this.testLibrary_unregisterEmployee_address=function() {
		//	var res = this.test_instance.unregisterEmployee( p__address);
		//Start of user code test_Library_unregisterEmployee_address
		//TODO: implement
//console.log('testLibrary_unregisterEmployee_address');
//	var p__address = '';
//	var res = this.test_instance.unregisterEmployee( p__address);
//	var state = res==="";		
		this.printTest("testunregisterEmployee", "executed: testLibrary_unregisterEmployee_address", false);		
		//End of user code
	}

	//Test for Library_registerUser_address_string
	this.testLibrary_registerUser_address_string=function() {
		//	var res = this.test_instance.registerUser( p__address, p__name);
		//Start of user code test_Library_registerUser_address_string
		//TODO: implement
//console.log('testLibrary_registerUser_address_string');
//	var p__address = '';
//	var p__name = '';
//	var res = this.test_instance.registerUser( p__address, p__name);
//	var state = res==="";		
		this.printTest("testregisterUser", "executed: testLibrary_registerUser_address_string", false);		
		//End of user code
	}

	//Test for Library_unregisterUser_address
	this.testLibrary_unregisterUser_address=function() {
		//	var res = this.test_instance.unregisterUser( p__address);
		//Start of user code test_Library_unregisterUser_address
		//TODO: implement
//console.log('testLibrary_unregisterUser_address');
//	var p__address = '';
//	var res = this.test_instance.unregisterUser( p__address);
//	var state = res==="";		
		this.printTest("testunregisterUser", "executed: testLibrary_unregisterUser_address", false);		
		//End of user code
	}

	//Test for Library_addBook_string
	this.testLibrary_addBook_string=function() {
		//	var res = this.test_instance.addBook( p__titel);
		//Start of user code test_Library_addBook_string
		//TODO: implement
//console.log('testLibrary_addBook_string');
//	var p__titel = '';
//	var res = this.test_instance.addBook( p__titel);
//	var state = res==="";		
		this.printTest("testaddBook", "executed: testLibrary_addBook_string", false);		
		//End of user code
	}

	//Test for Library_changeBookState_uint_uint
	this.testLibrary_changeBookState_uint_uint=function() {
		//	var res = this.test_instance.changeBookState( p_id, p__state);
		//Start of user code test_Library_changeBookState_uint_uint
		//TODO : implement this
		//var test = false;		
		//this.testAE("testchangeBookState", "executed: testLibrary_changeBookState_uint_uint",true, test);		
		//End of user code
	}

	//Test for Library_borrowBook_uint_address
	this.testLibrary_borrowBook_uint_address=function() {
		//	var res = this.test_instance.borrowBook( p_id, p__address);
		//Start of user code test_Library_borrowBook_uint_address
		//TODO: implement
//console.log('testLibrary_borrowBook_uint_address');
//	var p_id = '';
//	var p__address = '';
//	var res = this.test_instance.borrowBook( p_id, p__address);
//	var state = res==="";		
		this.printTest("testborrowBook", "executed: testLibrary_borrowBook_uint_address", false);		
		//End of user code
	}
	this.customTests=function() {
		//Start of user code test_Library_custom tests
		//
		//End of user code
	}
}

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
    "outputs": [{"name": "name","type": "string"},{"name": "state","type": "uint256"},{"name": "currentOwner","type": "address"}],
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

/**
* Gui factory Library
**/
function LibraryGuiFactory() {
	this.prefix='';
	
	/**
	* Places the default gui to 'e' or an element with id='Library_gui'
	*/
	this.placeDefaultGui=function(e) {
		if(e==null)
			e = document.getElementById(this.prefix+'Library_gui');
		if(e!=null)
			e.innerHTML = this.createDefaultGui();
		else
			console.log(this.prefix+'Library_gui not found');
	}

	/**
	* The default generated gui with all actions and attributes.
	*/
	this.createDefaultGui=function() {
		return 		'<!-- gui for Library_contract -->'
+		'		<div class="contract" id="'+this.prefix+'Library_contract">'
+		'		Library:'
+		'		  <input type="text" id="'+this.prefix+'Library_address"> <button id="'+this.prefix+'LibraryController.setAddress" onclick="'+this.prefix+'LibraryController.setAddress()">change Library Address</button>'
+		'		  <div class="contract_attributes" id="'+this.prefix+'Library_contract_attributes"> attributes:'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Library_contract_attribute_employeeCount"> employeeCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Library_employeeCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Library_contract_attribute_userCount"> userCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Library_userCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Library_contract_attribute_activeUserCount"> activeUserCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Library_activeUserCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Library_contract_attribute_bookCount"> bookCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Library_bookCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Library_contract_attribute_activeBooksCount"> activeBooksCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Library_activeBooksCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Library_contract_attribute_managerCount"> managerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Library_managerCount_value"> </span>'
+		'		    </div>'
+		'		'
+		'		<div class="Value_Mapping" id="'+this.prefix+'Library_contract_attribute_managers">mapping  managers:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'Library_contract_attribute_managers_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'Library_contract_attribute_address"> bool:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'Library_managers_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Value_Mapping" id="'+this.prefix+'Library_contract_attribute_employees">mapping  employees:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'Library_contract_attribute_employees_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'Library_contract_attribute_address"> bool:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'Library_employees_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_Library_contract_attribute_users">struc mapping  users:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'Library_contract_attribute_users_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_users_userState"> userState:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_users_userState_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_users_userName"> userName:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_users_userName_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_users_userId"> userId:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_users_userId_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_users_borrowedBooks"> borrowedBooks:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_users_borrowedBooks_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_users_borrowedBooksCount"> borrowedBooksCount:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_users_borrowedBooksCount_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Struct_Mapping" id="'+this.prefix+'Struc_Library_contract_attribute_books">struc mapping  books:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'Library_contract_attribute_books_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_books_bookTitel"> bookTitel:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_books_bookTitel_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_books_bookId"> bookId:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_books_bookId_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_books_bookState"> bookState:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_books_bookState_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_books_currentOwner"> currentOwner:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_books_currentOwner_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		<div class="Value_Mapping" id="'+this.prefix+'Library_contract_attribute_usersAdresses">mapping  usersAdresses:'
+		'				<input class="function_input" type="text" id="'+this.prefix+'Library_contract_attribute_usersAdresses_input">(address)'
+		'		    	<div class="Mapping_value" id="'+this.prefix+'Library_contract_attribute_address"> uint:'
+		'		      		<span class="contract_attribute_value" id="'+this.prefix+'Library_usersAdresses_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
+		'		    <button class="function_btn" id="'+this.prefix+'Library_updateAttributes" onclick="'+this.prefix+'LibraryController._updateAttributes()">update Library attributes</button>'
+		'		  </div>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_returnBook_uint_address">'
+		'		<legend>returnBook</legend>'
+		'			  <label class="function_parameter" for="Library_returnBook_uint_address_id">id'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Library_returnBook_uint_address_id"'
+		'				  placeholder="id">'
+		'			</label>'
+		'			  <label class="function_parameter" for="Library_returnBook_uint_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_returnBook_uint_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_returnBook_uint_address" onclick="'+this.prefix+'LibraryController.Library_returnBook_uint_address()">returnBook</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_returnBook_uint_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_getBook_uint">'
+		'		<legend>getBook</legend>'
+		'			  <label class="function_parameter" for="Library_getBook_uint__id">_id'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Library_getBook_uint__id"'
+		'				  placeholder="_id">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_getBook_uint" onclick="'+this.prefix+'LibraryController.Library_getBook_uint()">getBook</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_getBook_uint_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_registerManager_address">'
+		'		<legend>registerManager</legend>'
+		'			  <label class="function_parameter" for="Library_registerManager_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_registerManager_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_registerManager_address" onclick="'+this.prefix+'LibraryController.Library_registerManager_address()">registerManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_registerManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_unregisterManager_address">'
+		'		<legend>unregisterManager</legend>'
+		'			  <label class="function_parameter" for="Library_unregisterManager_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_unregisterManager_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_unregisterManager_address" onclick="'+this.prefix+'LibraryController.Library_unregisterManager_address()">unregisterManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_unregisterManager_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_registerEmployee_address">'
+		'		<legend>registerEmployee</legend>'
+		'			  <label class="function_parameter" for="Library_registerEmployee_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_registerEmployee_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_registerEmployee_address" onclick="'+this.prefix+'LibraryController.Library_registerEmployee_address()">registerEmployee</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_registerEmployee_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_unregisterEmployee_address">'
+		'		<legend>unregisterEmployee</legend>'
+		'			  <label class="function_parameter" for="Library_unregisterEmployee_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_unregisterEmployee_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_unregisterEmployee_address" onclick="'+this.prefix+'LibraryController.Library_unregisterEmployee_address()">unregisterEmployee</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_unregisterEmployee_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_registerUser_address_string">'
+		'		<legend>registerUser</legend>'
+		'			  <label class="function_parameter" for="Library_registerUser_address_string__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_registerUser_address_string__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			  <label class="function_parameter" for="Library_registerUser_address_string__name">_name'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_registerUser_address_string__name"'
+		'				  placeholder="_name">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_registerUser_address_string" onclick="'+this.prefix+'LibraryController.Library_registerUser_address_string()">registerUser</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_registerUser_address_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_unregisterUser_address">'
+		'		<legend>unregisterUser</legend>'
+		'			  <label class="function_parameter" for="Library_unregisterUser_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_unregisterUser_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_unregisterUser_address" onclick="'+this.prefix+'LibraryController.Library_unregisterUser_address()">unregisterUser</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_unregisterUser_address_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_addBook_string">'
+		'		<legend>addBook</legend>'
+		'			  <label class="function_parameter" for="Library_addBook_string__titel">_titel'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_addBook_string__titel"'
+		'				  placeholder="_titel">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_addBook_string" onclick="'+this.prefix+'LibraryController.Library_addBook_string()">addBook</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_addBook_string_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_changeBookState_uint_uint">'
+		'		<legend>changeBookState</legend>'
+		'			  <label class="function_parameter" for="Library_changeBookState_uint_uint_id">id'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Library_changeBookState_uint_uint_id"'
+		'				  placeholder="id">'
+		'			</label>'
+		'			  <label class="function_parameter" for="Library_changeBookState_uint_uint__state">_state'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Library_changeBookState_uint_uint__state"'
+		'				  placeholder="_state">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_changeBookState_uint_uint" onclick="'+this.prefix+'LibraryController.Library_changeBookState_uint_uint()">changeBookState</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_changeBookState_uint_uint_res"></div>'
+		'		  </fieldset>'
+		'		  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_borrowBook_uint_address">'
+		'		<legend>borrowBook</legend>'
+		'			  <label class="function_parameter" for="Library_borrowBook_uint_address_id">id'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Library_borrowBook_uint_address_id"'
+		'				  placeholder="id">'
+		'			</label>'
+		'			  <label class="function_parameter" for="Library_borrowBook_uint_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_borrowBook_uint_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_borrowBook_uint_address" onclick="'+this.prefix+'LibraryController.Library_borrowBook_uint_address()">borrowBook</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_borrowBook_uint_address_res"></div>'
+		'		  </fieldset>'
+		'		'
+		'		</div>'
;
	}

	/**
	* Create the gui for the attributes.
	*/
	this.createAttributesGui=function() {
		return 		'    <div class="contract_attribute" id="'+this.prefix+'Library_contract_attribute_employeeCount"> employeeCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Library_employeeCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Library_contract_attribute_userCount"> userCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Library_userCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Library_contract_attribute_activeUserCount"> activeUserCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Library_activeUserCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Library_contract_attribute_bookCount"> bookCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Library_bookCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Library_contract_attribute_activeBooksCount"> activeBooksCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Library_activeBooksCount_value"> </span>'
+		'		    </div>'
+		'		    <div class="contract_attribute" id="'+this.prefix+'Library_contract_attribute_managerCount"> managerCount:'
+		'		      <span class="contract_attribute_value" id="'+this.prefix+'Library_managerCount_value"> </span>'
+		'		    </div>'
+		'		'
;
	}

	/**
	* Create the gui.
	*/
	this.createPlainGui=function(){
		return this.createAttributesGui()
				+ this.createLibrary_returnBook_uint_addressGui
				+ this.createLibrary_getBook_uintGui
				+ this.createLibrary_registerManager_addressGui
				+ this.createLibrary_unregisterManager_addressGui
				+ this.createLibrary_registerEmployee_addressGui
				+ this.createLibrary_unregisterEmployee_addressGui
				+ this.createLibrary_registerUser_address_stringGui
				+ this.createLibrary_unregisterUser_addressGui
				+ this.createLibrary_addBook_stringGui
				+ this.createLibrary_changeBookState_uint_uintGui
				+ this.createLibrary_borrowBook_uint_addressGui
				;
	}

	/**
	* Create the gui for the function returnBook.
	*/
	this.createLibrary_returnBook_uint_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_returnBook_uint_address">'
+		'		<legend>returnBook</legend>'
+		'			  <label class="function_parameter" for="Library_returnBook_uint_address_id">id'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Library_returnBook_uint_address_id"'
+		'				  placeholder="id">'
+		'			</label>'
+		'			  <label class="function_parameter" for="Library_returnBook_uint_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_returnBook_uint_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_returnBook_uint_address" onclick="'+this.prefix+'LibraryController.Library_returnBook_uint_address()">returnBook</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_returnBook_uint_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function getBook.
	*/
	this.createLibrary_getBook_uintGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_getBook_uint">'
+		'		<legend>getBook</legend>'
+		'			  <label class="function_parameter" for="Library_getBook_uint__id">_id'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Library_getBook_uint__id"'
+		'				  placeholder="_id">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_getBook_uint" onclick="'+this.prefix+'LibraryController.Library_getBook_uint()">getBook</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_getBook_uint_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function registerManager.
	*/
	this.createLibrary_registerManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_registerManager_address">'
+		'		<legend>registerManager</legend>'
+		'			  <label class="function_parameter" for="Library_registerManager_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_registerManager_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_registerManager_address" onclick="'+this.prefix+'LibraryController.Library_registerManager_address()">registerManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_registerManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function unregisterManager.
	*/
	this.createLibrary_unregisterManager_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_unregisterManager_address">'
+		'		<legend>unregisterManager</legend>'
+		'			  <label class="function_parameter" for="Library_unregisterManager_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_unregisterManager_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_unregisterManager_address" onclick="'+this.prefix+'LibraryController.Library_unregisterManager_address()">unregisterManager</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_unregisterManager_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function registerEmployee.
	*/
	this.createLibrary_registerEmployee_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_registerEmployee_address">'
+		'		<legend>registerEmployee</legend>'
+		'			  <label class="function_parameter" for="Library_registerEmployee_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_registerEmployee_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_registerEmployee_address" onclick="'+this.prefix+'LibraryController.Library_registerEmployee_address()">registerEmployee</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_registerEmployee_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function unregisterEmployee.
	*/
	this.createLibrary_unregisterEmployee_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_unregisterEmployee_address">'
+		'		<legend>unregisterEmployee</legend>'
+		'			  <label class="function_parameter" for="Library_unregisterEmployee_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_unregisterEmployee_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_unregisterEmployee_address" onclick="'+this.prefix+'LibraryController.Library_unregisterEmployee_address()">unregisterEmployee</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_unregisterEmployee_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function registerUser.
	*/
	this.createLibrary_registerUser_address_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_registerUser_address_string">'
+		'		<legend>registerUser</legend>'
+		'			  <label class="function_parameter" for="Library_registerUser_address_string__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_registerUser_address_string__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			  <label class="function_parameter" for="Library_registerUser_address_string__name">_name'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_registerUser_address_string__name"'
+		'				  placeholder="_name">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_registerUser_address_string" onclick="'+this.prefix+'LibraryController.Library_registerUser_address_string()">registerUser</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_registerUser_address_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function unregisterUser.
	*/
	this.createLibrary_unregisterUser_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_unregisterUser_address">'
+		'		<legend>unregisterUser</legend>'
+		'			  <label class="function_parameter" for="Library_unregisterUser_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_unregisterUser_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_unregisterUser_address" onclick="'+this.prefix+'LibraryController.Library_unregisterUser_address()">unregisterUser</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_unregisterUser_address_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function addBook.
	*/
	this.createLibrary_addBook_stringGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_addBook_string">'
+		'		<legend>addBook</legend>'
+		'			  <label class="function_parameter" for="Library_addBook_string__titel">_titel'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_addBook_string__titel"'
+		'				  placeholder="_titel">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_addBook_string" onclick="'+this.prefix+'LibraryController.Library_addBook_string()">addBook</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_addBook_string_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function changeBookState.
	*/
	this.createLibrary_changeBookState_uint_uintGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_changeBookState_uint_uint">'
+		'		<legend>changeBookState</legend>'
+		'			  <label class="function_parameter" for="Library_changeBookState_uint_uint_id">id'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Library_changeBookState_uint_uint_id"'
+		'				  placeholder="id">'
+		'			</label>'
+		'			  <label class="function_parameter" for="Library_changeBookState_uint_uint__state">_state'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Library_changeBookState_uint_uint__state"'
+		'				  placeholder="_state">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_changeBookState_uint_uint" onclick="'+this.prefix+'LibraryController.Library_changeBookState_uint_uint()">changeBookState</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_changeBookState_uint_uint_res"></div>'
+		'		  </fieldset>'
;
	}

	/**
	* Create the gui for the function borrowBook.
	*/
	this.createLibrary_borrowBook_uint_addressGui=function() {
		return 		'  <fieldset class="function_execution" id="'+this.prefix+'Library_contract_function_Library_borrowBook_uint_address">'
+		'		<legend>borrowBook</legend>'
+		'			  <label class="function_parameter" for="Library_borrowBook_uint_address_id">id'
+		'				<input class="function_input" type="number" '
+		'		          id="'+this.prefix+'Library_borrowBook_uint_address_id"'
+		'				  placeholder="id">'
+		'			</label>'
+		'			  <label class="function_parameter" for="Library_borrowBook_uint_address__address">_address'
+		'				<input class="function_input" type="text" '
+		'		          id="'+this.prefix+'Library_borrowBook_uint_address__address"'
+		'				  placeholder="_address">'
+		'			</label>'
+		'			<button class="function_btn" id="'+this.prefix+'LibraryController.Library_borrowBook_uint_address" onclick="'+this.prefix+'LibraryController.Library_borrowBook_uint_address()">borrowBook</button>'
+		'			<div class="function_result" id="'+this.prefix+'Library_borrowBook_uint_address_res"></div>'
+		'		  </fieldset>'
;
	}
	/**
	* Create the gui for the users struct element.
	*/
	this.createusersStructGui=function() {
		return 		'<div class="Struct_Mapping" id="'+this.prefix+'Struc_Library_contract_attribute_users">struc mapping  users:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'Library_contract_attribute_users_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_users_userState"> userState:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_users_userState_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_users_userName"> userName:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_users_userName_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_users_userId"> userId:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_users_userId_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_users_borrowedBooks"> borrowedBooks:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_users_borrowedBooks_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_users_borrowedBooksCount"> borrowedBooksCount:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_users_borrowedBooksCount_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
;
	}
	/**
	* Create the gui for the books struct element.
	*/
	this.createbooksStructGui=function() {
		return 		'<div class="Struct_Mapping" id="'+this.prefix+'Struc_Library_contract_attribute_books">struc mapping  books:'
+		'				<input class="function_input" type="number" id="'+this.prefix+'Library_contract_attribute_books_input">(uint)'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_books_bookTitel"> bookTitel:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_books_bookTitel_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_books_bookId"> bookId:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_books_bookId_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_books_bookState"> bookState:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_books_bookState_value"> </span>'
+		'		    	</div>'
+		'		    	<div class="Struct_attribute" id="'+this.prefix+'Library_contract_attribute_books_currentOwner"> currentOwner:'
+		'		      		<span class="Struct_attribute_value" id="'+this.prefix+'Library_books_currentOwner_value"> </span>'
+		'		    	</div>'
+		'		  </div>'
;
	}

	/**
	* Create a div with '@inner' as inner elements.
    * @inner - the inner text
	*/
	this.createSeletonGui=function(inner) {
		return 	'<!-- gui for Library_contract -->'
		+	'	<div class="contract" id="'+this.prefix+'Library_contract">'
		+ inner
		+'</div>';
	}


	//eventguis

	/**
	* Create a gui for the BookSate event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createBookSateLogDataGui = function(prefix, blockHash, blockNumber
	,id	,_state	) {
		return '<div class="eventRow">'
        +'<div class="eventValue">'+id+'</div>'
        +'<div class="eventValue">'+_state+'</div>'
        +' </div>';
	}

	/**
	* Create a gui for the NewBook event.
    * @prefix - a prefix
	* @blockHash - the bolckhash 
	* @blockNumber - the number of the block
	*/
	this.createNewBookLogDataGui = function(prefix, blockHash, blockNumber
	,id	,titel	) {
		return '<div class="eventRow">'
        +'<div class="eventValue">'+id+'</div>'
        +'<div class="eventValue">'+titel+'</div>'
        +' </div>';
	}
	/**
	* Create the gui for the function Struc Library-users.
	*/
	this.createStruc_Library_contract_attribute_usersGui=function(struct) {
		return '<div class="Struct_Mapping" id='+this.prefix+'"Struc_Library_contract_attribute_users">'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Library_contract_attribute_users_userState"> userState:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Library_users_userState_value">'+struct.userState()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Library_contract_attribute_users_userName"> userName:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Library_users_userName_value">'+struct.userName()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Library_contract_attribute_users_userId"> userId:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Library_users_userId_value">'+struct.userId()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Library_contract_attribute_users_borrowedBooks"> borrowedBooks:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Library_users_borrowedBooks_value">'+struct.borrowedBooks()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Library_contract_attribute_users_borrowedBooksCount"> borrowedBooksCount:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Library_users_borrowedBooksCount_value">'+struct.borrowedBooksCount()+'</span>'
    		+'</div>'
  		+'</div>';
	}
	/**
	* Create the gui for the function Struc Library-books.
	*/
	this.createStruc_Library_contract_attribute_booksGui=function(struct) {
		return '<div class="Struct_Mapping" id='+this.prefix+'"Struc_Library_contract_attribute_books">'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Library_contract_attribute_books_bookTitel"> bookTitel:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Library_books_bookTitel_value">'+struct.bookTitel()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Library_contract_attribute_books_bookId"> bookId:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Library_books_bookId_value">'+struct.bookId()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Library_contract_attribute_books_bookState"> bookState:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Library_books_bookState_value">'+struct.bookState()+'</span>'
    		+'</div>'
    		+'<div class="Struct_attribute" id='+this.prefix+'"Library_contract_attribute_books_currentOwner"> currentOwner:'
      		+'	<span class="Struct_attribute_value" id='+this.prefix+'"Library_books_currentOwner_value">'+struct.currentOwner()+'</span>'
    		+'</div>'
  		+'</div>';
	}

}//end guifactory

/**
* Class LibraryController. 
* The controller wrap's the 'instance' contract and binds all actions to document elements.
* Parameters are taken from elements with self.prefix+'functionName_parameterName'
*
* self.prefix+'LibraryController.setAddress' - 
* self.prefix+'Library_updateAttributes'     - 
* self.prefix+'Library_returnBook_uint_address -
* self.prefix+'Library_getBook_uint -
* self.prefix+'Library_registerManager_address -
* self.prefix+'Library_unregisterManager_address -
* self.prefix+'Library_registerEmployee_address -
* self.prefix+'Library_unregisterEmployee_address -
* self.prefix+'Library_registerUser_address_string -
* self.prefix+'Library_unregisterUser_address -
* self.prefix+'Library_addBook_string -
* self.prefix+'Library_changeBookState_uint_uint -
* self.prefix+'Library_borrowBook_uint_address -
*/
function LibraryController() {

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
		var btn = document.getElementById(self.prefix+'LibraryController.setAddress');
		if(btn!=undefined)		
			btn.onclick = this.setAddress;
		else console.log('addres widget not bound');

		var btn = document.getElementById(self.prefix+'Library_updateAttributes');
		if(btn!=undefined)
			btn.onclick = this._updateAttributes;
		else console.log('_updateAttributes widget not bound');
		var btn = document.getElementById(self.prefix+'LibraryController.Library_returnBook_uint_address');
		if(btn!=undefined)
			btn.onclick = this.Library_returnBook_uint_address;
		else console.log('Library_returnBook_uint_address widget not bound');
		var btn = document.getElementById(self.prefix+'LibraryController.Library_getBook_uint');
		if(btn!=undefined)
			btn.onclick = this.Library_getBook_uint;
		else console.log('Library_getBook_uint widget not bound');
		var btn = document.getElementById(self.prefix+'LibraryController.Library_registerManager_address');
		if(btn!=undefined)
			btn.onclick = this.Library_registerManager_address;
		else console.log('Library_registerManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'LibraryController.Library_unregisterManager_address');
		if(btn!=undefined)
			btn.onclick = this.Library_unregisterManager_address;
		else console.log('Library_unregisterManager_address widget not bound');
		var btn = document.getElementById(self.prefix+'LibraryController.Library_registerEmployee_address');
		if(btn!=undefined)
			btn.onclick = this.Library_registerEmployee_address;
		else console.log('Library_registerEmployee_address widget not bound');
		var btn = document.getElementById(self.prefix+'LibraryController.Library_unregisterEmployee_address');
		if(btn!=undefined)
			btn.onclick = this.Library_unregisterEmployee_address;
		else console.log('Library_unregisterEmployee_address widget not bound');
		var btn = document.getElementById(self.prefix+'LibraryController.Library_registerUser_address_string');
		if(btn!=undefined)
			btn.onclick = this.Library_registerUser_address_string;
		else console.log('Library_registerUser_address_string widget not bound');
		var btn = document.getElementById(self.prefix+'LibraryController.Library_unregisterUser_address');
		if(btn!=undefined)
			btn.onclick = this.Library_unregisterUser_address;
		else console.log('Library_unregisterUser_address widget not bound');
		var btn = document.getElementById(self.prefix+'LibraryController.Library_addBook_string');
		if(btn!=undefined)
			btn.onclick = this.Library_addBook_string;
		else console.log('Library_addBook_string widget not bound');
		var btn = document.getElementById(self.prefix+'LibraryController.Library_changeBookState_uint_uint');
		if(btn!=undefined)
			btn.onclick = this.Library_changeBookState_uint_uint;
		else console.log('Library_changeBookState_uint_uint widget not bound');
		var btn = document.getElementById(self.prefix+'LibraryController.Library_borrowBook_uint_address');
		if(btn!=undefined)
			btn.onclick = this.Library_borrowBook_uint_address;
		else console.log('Library_borrowBook_uint_address widget not bound');

	}

	/**
	* Set the address.
	*/
	this.setAddress=function() {
		var _address = document.getElementById(self.prefix+'Library_address');
		if(_address==null)return;

		self.Library_instance = LibraryContract.at(_address.value);
		self.contractAddress = _address.value;
		self._updateAttributes();
	}
	
	/**
	* Update attributes.
	*
	* prefix+'Library_employeeCount_value' - 
	* prefix+'Library_userCount_value' - 
	* prefix+'Library_activeUserCount_value' - 
	* prefix+'Library_bookCount_value' - 
	* prefix+'Library_activeBooksCount_value' - 
	* prefix+'Library_managerCount_value' - 
	**/
	this._updateAttributes=function () {
		if(this.instance===null) return;
		// update attributes
		var employeeCount_res = self.instance.employeeCount();
		var e = document.getElementById(self.prefix+'Library_employeeCount_value');
		if(employeeCount_res!=null && e!=null)
			e.innerText = employeeCount_res;
		else console.log(self.prefix+'Library_employeeCount_value not found');
		var userCount_res = self.instance.userCount();
		var e = document.getElementById(self.prefix+'Library_userCount_value');
		if(userCount_res!=null && e!=null)
			e.innerText = userCount_res;
		else console.log(self.prefix+'Library_userCount_value not found');
		var activeUserCount_res = self.instance.activeUserCount();
		var e = document.getElementById(self.prefix+'Library_activeUserCount_value');
		if(activeUserCount_res!=null && e!=null)
			e.innerText = activeUserCount_res;
		else console.log(self.prefix+'Library_activeUserCount_value not found');
		var bookCount_res = self.instance.bookCount();
		var e = document.getElementById(self.prefix+'Library_bookCount_value');
		if(bookCount_res!=null && e!=null)
			e.innerText = bookCount_res;
		else console.log(self.prefix+'Library_bookCount_value not found');
		var activeBooksCount_res = self.instance.activeBooksCount();
		var e = document.getElementById(self.prefix+'Library_activeBooksCount_value');
		if(activeBooksCount_res!=null && e!=null)
			e.innerText = activeBooksCount_res;
		else console.log(self.prefix+'Library_activeBooksCount_value not found');
		var managerCount_res = self.instance.managerCount();
		var e = document.getElementById(self.prefix+'Library_managerCount_value');
		if(managerCount_res!=null && e!=null)
			e.innerText = managerCount_res;
		else console.log(self.prefix+'Library_managerCount_value not found');
		var e = document.getElementById(self.prefix+'Library_contract_attribute_managers_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var managers_res = self.instance.managers(_key);
			if(managers_res!=null){
				var e1 = document.getElementById(self.prefix+'Library_managers_value');
				if(e1!=null)	
					e1.innerText = managers_res;
			}}}
		var e = document.getElementById(self.prefix+'Library_contract_attribute_employees_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var employees_res = self.instance.employees(_key);
			if(employees_res!=null){
				var e1 = document.getElementById(self.prefix+'Library_employees_value');
				if(e1!=null)	
					e1.innerText = employees_res;
			}}}
		var e = document.getElementById(self.prefix+'Library_contract_attribute_users_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var users_res = self.instance.users(_key);
			if(users_res!=null){
			var e1 = document.getElementById(self.prefix+'Library_users_userState_value');
			if(e1!=null)	
				e1.innerText = users_res[0];
			var e1 = document.getElementById(self.prefix+'Library_users_userName_value');
			if(e1!=null)	
				e1.innerText = users_res[1];
			var e1 = document.getElementById(self.prefix+'Library_users_userId_value');
			if(e1!=null)	
				e1.innerText = users_res[2];
			var e1 = document.getElementById(self.prefix+'Library_users_borrowedBooks_value');
			if(e1!=null)	
				e1.innerText = users_res[3];
			var e1 = document.getElementById(self.prefix+'Library_users_borrowedBooksCount_value');
			if(e1!=null)	
				e1.innerText = users_res[4];
			}}}
		var e = document.getElementById(self.prefix+'Library_contract_attribute_books_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var books_res = self.instance.books(_key);
			if(books_res!=null){
			var e1 = document.getElementById(self.prefix+'Library_books_bookTitel_value');
			if(e1!=null)	
				e1.innerText = books_res[0];
			var e1 = document.getElementById(self.prefix+'Library_books_bookId_value');
			if(e1!=null)	
				e1.innerText = books_res[1];
			var e1 = document.getElementById(self.prefix+'Library_books_bookState_value');
			if(e1!=null)	
				e1.innerText = books_res[2];
			var e1 = document.getElementById(self.prefix+'Library_books_currentOwner_value');
			if(e1!=null)	
				e1.innerText = books_res[3];
			}}}
		var e = document.getElementById(self.prefix+'Library_contract_attribute_usersAdresses_input');
		if(e!=null){
			var _key = e.value;
			if(_key!='') {
			var usersAdresses_res = self.instance.usersAdresses(_key);
			if(usersAdresses_res!=null){
				var e1 = document.getElementById(self.prefix+'Library_usersAdresses_value');
				if(e1!=null)	
					e1.innerText = usersAdresses_res;
			}}}
	}

	//call functions
	
	/**
	* Calls the contract function Library_returnBook.
	*
	* this.prefix+'Library_returnBook_uint_address_id' -
	* this.prefix+'Library_returnBook_uint_address__address' -
	**/
	this.Library_returnBook_uint_address=function() {
		var e = document.getElementById(self.prefix+'Library_returnBook_uint_address_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'Library_returnBook_uint_address_id not found');
		var e = document.getElementById(self.prefix+'Library_returnBook_uint_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Library_returnBook_uint_address__address not found');
		var res = self.instance.returnBook(param_id, param__address);
	}
	
	/**
	* Calls the contract function Library_getBook.
	*
	* this.prefix+'Library_getBook_uint__id' -
	**/
	this.Library_getBook_uint=function() {
		var e = document.getElementById(self.prefix+'Library_getBook_uint__id');
		if(e!=null)
			var param__id = e.value;
		else console.log(self.prefix+'Library_getBook_uint__id not found');
		var res = self.instance.getBook(param__id);
		var e = document.getElementById(self.prefix+'Library_getBook_uint_res');
		if(res!=null && e!=null)
			e.innerText = res;
	}
	
	/**
	* Calls the contract function Library_registerManager.
	*
	* this.prefix+'Library_registerManager_address__address' -
	**/
	this.Library_registerManager_address=function() {
		var e = document.getElementById(self.prefix+'Library_registerManager_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Library_registerManager_address__address not found');
		var res = self.instance.registerManager(param__address);
	}
	
	/**
	* Calls the contract function Library_unregisterManager.
	*
	* this.prefix+'Library_unregisterManager_address__address' -
	**/
	this.Library_unregisterManager_address=function() {
		var e = document.getElementById(self.prefix+'Library_unregisterManager_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Library_unregisterManager_address__address not found');
		var res = self.instance.unregisterManager(param__address);
	}
	
	/**
	* Calls the contract function Library_registerEmployee.
	*
	* this.prefix+'Library_registerEmployee_address__address' -
	**/
	this.Library_registerEmployee_address=function() {
		var e = document.getElementById(self.prefix+'Library_registerEmployee_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Library_registerEmployee_address__address not found');
		var res = self.instance.registerEmployee(param__address);
	}
	
	/**
	* Calls the contract function Library_unregisterEmployee.
	*
	* this.prefix+'Library_unregisterEmployee_address__address' -
	**/
	this.Library_unregisterEmployee_address=function() {
		var e = document.getElementById(self.prefix+'Library_unregisterEmployee_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Library_unregisterEmployee_address__address not found');
		var res = self.instance.unregisterEmployee(param__address);
	}
	
	/**
	* Calls the contract function Library_registerUser.
	*
	* this.prefix+'Library_registerUser_address_string__address' -
	* this.prefix+'Library_registerUser_address_string__name' -
	**/
	this.Library_registerUser_address_string=function() {
		var e = document.getElementById(self.prefix+'Library_registerUser_address_string__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Library_registerUser_address_string__address not found');
		var e = document.getElementById(self.prefix+'Library_registerUser_address_string__name');
		if(e!=null)
			var param__name = e.value;
		else console.log(self.prefix+'Library_registerUser_address_string__name not found');
		var res = self.instance.registerUser(param__address, param__name);
	}
	
	/**
	* Calls the contract function Library_unregisterUser.
	*
	* this.prefix+'Library_unregisterUser_address__address' -
	**/
	this.Library_unregisterUser_address=function() {
		var e = document.getElementById(self.prefix+'Library_unregisterUser_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Library_unregisterUser_address__address not found');
		var res = self.instance.unregisterUser(param__address);
	}
	
	/**
	* Calls the contract function Library_addBook.
	*
	* this.prefix+'Library_addBook_string__titel' -
	**/
	this.Library_addBook_string=function() {
		var e = document.getElementById(self.prefix+'Library_addBook_string__titel');
		if(e!=null)
			var param__titel = e.value;
		else console.log(self.prefix+'Library_addBook_string__titel not found');
		var res = self.instance.addBook(param__titel);
	}
	
	/**
	* Calls the contract function Library_changeBookState.
	*
	* this.prefix+'Library_changeBookState_uint_uint_id' -
	* this.prefix+'Library_changeBookState_uint_uint__state' -
	**/
	this.Library_changeBookState_uint_uint=function() {
		var e = document.getElementById(self.prefix+'Library_changeBookState_uint_uint_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'Library_changeBookState_uint_uint_id not found');
		var e = document.getElementById(self.prefix+'Library_changeBookState_uint_uint__state');
		if(e!=null)
			var param__state = e.value;
		else console.log(self.prefix+'Library_changeBookState_uint_uint__state not found');
		var res = self.instance.changeBookState(param_id, param__state);
	}
	
	/**
	* Calls the contract function Library_borrowBook.
	*
	* this.prefix+'Library_borrowBook_uint_address_id' -
	* this.prefix+'Library_borrowBook_uint_address__address' -
	**/
	this.Library_borrowBook_uint_address=function() {
		var e = document.getElementById(self.prefix+'Library_borrowBook_uint_address_id');
		if(e!=null)
			var param_id = e.value;
		else console.log(self.prefix+'Library_borrowBook_uint_address_id not found');
		var e = document.getElementById(self.prefix+'Library_borrowBook_uint_address__address');
		if(e!=null)
			var param__address = e.value;
		else console.log(self.prefix+'Library_borrowBook_uint_address__address not found');
		var res = self.instance.borrowBook(param_id, param__address);
	}
	
//delegated calls
}// end controller	

/**
* class as GlueCode LibraryManager,
* uses prefix + 'GuiContainer' as target element.
* It combines a LibraryController as 'c' and a LibraryGuiFactory as 'g'.
**/
function LibraryManager(prefix,contract,containerId) {
	this.prefix = prefix;
	var self = this;
	this.c = new LibraryController();
	this.c.prefix=prefix;
	this.c.instance=contract;
	this.c.contractAddress = contract.address;
	this.g = new LibraryGuiFactory();
	this.g.prefix = prefix;
	this.containerId = containerId;
	this.eventlogPrefix = '';
	this.guiFunction = null;
	this.eventBookSate = null;
	this.eventNewBook = null;
	
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
		elemDiv.id= this.prefix +'Library_gui';
		e.appendChild(elemDiv);
		if(this.guiFunction==null)
			elemDiv.innerHTML = this.createGui(this.g);
		else elemDiv.innerHTML = this.guiFunction(this.g);
		
		var e = document.getElementById(this.prefix+'Library_address');
		if(e!=null)
			e.value = this.c.contractAddress;
		else 
			console.log(this.prefix+'Library_address not found');
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
//Start of user code Library_create_gui_js
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
	* Getter for the contract 'Library' instance.
	**/
	this.getContract = function(){
		return this.c.instance;
	}

	/**
	* Watch for the contract events.
	* The events are stored in an element with the id this.eventlogPrefix+'eventLog'.
	**/
	this.watchEvents=function(){
	var event_BookSate = this.getContract().BookSate({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventBookSate;
	event_BookSate.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	var event_NewBook = this.getContract().NewBook({},{fromBlock: 0});
	var elp = this.eventlogPrefix;
	var callback = this.eventNewBook;
	event_NewBook.watch(function(error,result){
	if(!error){
		if(callback!=null)
			callback(result);

		}else
			console.log(error);	
	});
	}

}// end of manager

/**
* Manages a list of LibraryManager uses the guid id to place the gui which is also the eventlogPrefix
*/
function LibraryGuiMananger(guiId){
	this.prefix = guiId;
	this.managers=new Array();	//[];		
	this.guiFunction = null;
	this.eventBookSate = null;
	this.eventNewBook = null;
	this.managerMap = {};
	
	/**
	* Add a contract to this manager.
	* @contract the web3 contract instance
	*/
	this.addManager = function(contract) {
		var m = new LibraryManager(contract.address,contract,this.prefix);
		m.eventlogPrefix = this.prefix;
		m.eventBookSate = this.eventBookSate;
		m.eventNewBook = this.eventNewBook;
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
			elemDiv.id= manager.prefix + 'GuiContainer';//'Library_gui';
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
function LibraryDeployment(guiId){
	this.prefix = guiId;
//Start of user code Library_deployment_attributes_js
//TODO: implement
//End of user code


	/**
	* Construct Library.
	**/
	this.deployLibrary_Library = function(account, code, providedGas){
//		var c = Library.new({
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
		//Start of user code Library_deployDefault
		//TODO: implement
		//End of user code
	}

//Start of user code Library_deployment_js
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
	this.guim = new LibraryGuiMananger(prefix);
	this.guiF = new LibraryGuiFactory();
	this.guiF.prefix = prefix;
	self = this;
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
	this.guim.displaySimpleGui();
	this.guim.updateGui();
	//End of user code
}
	//Start of user code page_Contracts_functions
this.displayManagerGui=function(guiF){
	var txt = guiF.createAttributesGui()+
	guiF.createLibrary_registerEmployee_addressGui()+
	guiF.createLibrary_unregisterEmployee_addressGui()+
	guiF.createLibrary_registerManager_addressGui()+
	guiF.createLibrary_unregisterManager_addressGui();
	return guiF.createSeletonGui(txt);}

this.displayEmployeeGui=function(guiF){
	
	var txt = guiF.createAttributesGui()+
	guiF.createLibrary_addBook_stringGui()+
	guiF.createLibrary_registerUser_address_stringGui()+
	guiF.createLibrary_unregisterUser_addressGui()+
	guiF.createLibrary_borrowBook_uint_addressGui()+
	guiF.createLibrary_returnBook_uint_addressGui();	
	return guiF.createSeletonGui(txt);}

this.changeMode=function(mode){
	if(this.mode==mode) return;
	
	if(mode=='m'){
		this.guim.changeGuiFunction(this.displayManagerGui);
	}
	else
		this.guim.changeGuiFunction(this.displayEmployeeGui);
	
	
	this.guim.clearGui(null);
	this.createDefaultGui();
	this.mode = mode;
	}//
	

this.guim.guiFunction = this.displayEmployeeGui;

this.newBook = function(result){
	console.log('event '+result.args.titel+" "+result.args.id);
	addAsInnerHtml(result.args.id+" "+result.args.titel,'eventLog');
}//
this.guim.eventNewBook = this.newBook;

	//End of user code

}// end of ContractsPage

//Start of user code Contracts_custom_functions
function addAsInnerHtml(txt,_id){
	var e = document.getElementById(_id);
	if(e!==undefined && e!==null){
		var elemDiv = document.createElement('div');
		elemDiv.innerHTML = txt;
		e.appendChild(elemDiv);
	} else
		console.log('element with id not found:'+_id);}//

//End of user code

# contracts

(c) Urs Zeidler


* [Library](#contract-library)


## contract: Library

    overview:
	constructor Library()
	function registerManager(address _address) public  onlyManager 
	function unregisterManager(address _address) public  onlyManager 
	function registerEmployee(address _address) public  onlyManager 
	function unregisterEmployee(address _address) public  onlyManager 
	function registerUser(address _address,string _name) public  onlyEmployee 
	function unregisterUser(address _address) public  onlyEmployee 
	function addBook(string _titel) public  onlyEmployee 
	function changeBookState(uint id,uint _state) public  onlyEmployee 
	function borrowBook(uint id,address _address) public  onlyEmployee 
	function returnBook(uint id,address _address) public  onlyEmployee 
	function getBook(uint _id) public   constant returns (string name,Bookstate state,address currentOwner)



A library can borrow books to registered users.


### Library enums: UserState


name|doc
----|----|----
unknown|
registered|
disabled|
### Library enums: Bookstate


name|doc
----|----|----
unknown|
available|
borrowed|
disabled|

### structs:

LibraryUsers


#### LibraryUsers properties

name|type|visiblity|delegate|doc
----|----|----|----|----
userState|UserState|public||
userName|string|public||
userId|uint|public||
borrowedBooks|uint|public||
borrowedBooksCount|uint|public||


RegisteredBooks


#### RegisteredBooks properties

name|type|visiblity|delegate|doc
----|----|----|----|----
bookTitel|string|public||
bookId|uint|public||
bookState|Bookstate|public||
currentOwner|address|public||



#### Library properties

name|type|visiblity|delegate|doc
----|----|----|----|----
userCount|uint|public||
activeUserCount|uint|public||
bookCount|uint|public||
activeBooksCount|uint|public||
managerCount|uint|public||
employeeCount|uint|public||

#### Library mappings

name|type|mapsTo|visiblity|doc
----|----|----|----|----
managers|address|bool|public|employees|address|bool|public|users|uint|LibraryUsers|public|books|uint|RegisteredBooks|public|usersAdresses|address|uint|public|-

#### Library.Library() public  

The sender will be the first manager.



#### Library.registerManager(address _address) public  onlyManager 

Register a manager.


name|type|direction|doc
----|----|----|----
_address|address|in|

#### Library.unregisterManager(address _address) public  onlyManager 

Unregister a manager.


name|type|direction|doc
----|----|----|----
_address|address|in|

#### Library.registerEmployee(address _address) public  onlyManager 

Register a new employee.


name|type|direction|doc
----|----|----|----
_address|address|in|

#### Library.unregisterEmployee(address _address) public  onlyManager 

Unregister an employee.


name|type|direction|doc
----|----|----|----
_address|address|in|

#### Library.registerUser(address _address,string _name) public  onlyEmployee 

Register a library user.


name|type|direction|doc
----|----|----|----
_address|address|in|The address of the user.
_name|string|in|The name of the user.

#### Library.unregisterUser(address _address) public  onlyEmployee 

Unregister a library user.


name|type|direction|doc
----|----|----|----
_address|address|in|

#### Library.addBook(string _titel) public  onlyEmployee 

Add a book to the library.


name|type|direction|doc
----|----|----|----
_titel|string|in|The titel of the added book.

#### Library.changeBookState(uint id,uint _state) public  onlyEmployee 

Change the book state.


name|type|direction|doc
----|----|----|----
id|uint|in|The id of the book.
_state|uint|in|The new state of the book.

#### Library.borrowBook(uint id,address _address) public  onlyEmployee 

Borrows a book.


name|type|direction|doc
----|----|----|----
id|uint|in|The id of the book.
_address|address|in|The address of the user.

#### Library.returnBook(uint id,address _address) public  onlyEmployee 

Return the book.


name|type|direction|doc
----|----|----|----
id|uint|in|The id of the book.
_address|address|in|The address of the user.

#### Library.getBook(uint _id) public   constant returns (string name,Bookstate state,address currentOwner)


name|type|direction|doc
----|----|----|----
_id|uint|in|
name|string|return|
state|Bookstate|return|
currentOwner|address|return|

#### event BookSate

When a book state changes this event ist called.


name|type|indexed|doc
----|----|----|----
id|uint||The id of the book.
_state|uint||The new state of the book.

#### event NewBook


name|type|indexed|doc
----|----|----|----
id|uint||The id of the book.
titel|string||



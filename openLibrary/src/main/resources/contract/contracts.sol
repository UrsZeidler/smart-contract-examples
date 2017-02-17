/*
*
*
*/
pragma solidity ^0.4.0;
/*
* (c) Urs Zeidler
*/

/*
* A library can borrow books to registered users.
*/
contract Library {
    enum UserState { unknown,registered,disabled }
    enum Bookstate { unknown,available,borrowed,disabled }
    
    struct LibraryUsers {
    	UserState userState;
    	string userName;
    	uint userId;
    	uint[] borrowedBooks;
    	uint borrowedBooksCount;
    }
    
    struct RegisteredBooks {
    	string bookTitel;
    	uint bookId;
    	Bookstate bookState;
    	address currentOwner;
    }

	uint public userCount = 1;
	uint public activeUserCount;
	uint public bookCount;
	uint public activeBooksCount;
	uint public managerCount;
	uint public employeeCount;
	mapping (address=>bool)public managers;
	mapping (address=>bool)public employees;
	mapping (uint=>LibraryUsers)public users;
	mapping (uint=>RegisteredBooks)public books;
	mapping (address=>uint)public usersAdresses;
	// Start of user code Library.attributes
	//TODO: implement
	// End of user code
	
	modifier onlyEmployee
	{
	    if(!employees[msg.sender]) throw;
	    _;
	}
	
	modifier onlyManager
	{
	    if(!managers[msg.sender]) throw;
	    _;
	}
	
	/*
	* When a book state changes this event ist called.
	* 
	* id -The id of the book.
	* _state -The new state of the book.
	*/
	event BookSate(uint id,uint _state);
	
	
	event NewBook(uint id,string titel);
	
	/*
	* The sender will be the first manager.
	*/
	function Library() public   {
		//Start of user code Library.constructor.Library
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Register a manager.
	* 
	* _address -
	*/
	function registerManager(address _address) public  onlyManager  {
		//Start of user code Library.function.registerManager_address
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Unregister a manager.
	* 
	* _address -
	*/
	function unregisterManager(address _address) public  onlyManager  {
		//Start of user code Library.function.unregisterManager_address
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Register a new employee.
	* 
	* _address -
	*/
	function registerEmployee(address _address) public  onlyManager  {
		//Start of user code Library.function.registerEmployee_address
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Unregister an employee.
	* 
	* _address -
	*/
	function unregisterEmployee(address _address) public  onlyManager  {
		//Start of user code Library.function.unregisterEmployee_address
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Register a library user.
	* 
	* _address -The address of the user.
	* _name -The name of the user.
	*/
	function registerUser(address _address,string _name) public  onlyEmployee  {
		//Start of user code Library.function.registerUser_address_string
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Unregister a library user.
	* 
	* _address -
	*/
	function unregisterUser(address _address) public  onlyEmployee  {
		//Start of user code Library.function.unregisterUser_address
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Add a book to the library.
	* 
	* _titel -The titel of the added book.
	*/
	function addBook(string _titel) public  onlyEmployee  {
		//Start of user code Library.function.addBook_string
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Change the book state.
	* 
	* id -The id of the book.
	* _state -The new state of the book.
	*/
	function changeBookState(uint id,uint _state) public  onlyEmployee  {
		//Start of user code Library.function.changeBookState_uint_uint
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Borrows a book.
	* 
	* id -The id of the book.
	* _address -The address of the user.
	*/
	function borrowBook(uint id,address _address) public  onlyEmployee  {
		//Start of user code Library.function.borrowBook_uint_address
		//TODO: implement
		//End of user code
	}
	
	
	/*
	* Return the book.
	* 
	* id -The id of the book.
	* _address -The address of the user.
	*/
	function returnBook(uint id,address _address) public  onlyEmployee  {
		//Start of user code Library.function.returnBook_uint_address
		//TODO: implement
		//End of user code
	}
	
	
	
	function getBook(uint _id) public   constant returns (string name,Bookstate state,address currentOwner) {
		//Start of user code Library.function.getBook_uint
		//TODO: implement
		//End of user code
	}
	
	// Start of user code Library.operations
	//TODO: implement
	// End of user code
}


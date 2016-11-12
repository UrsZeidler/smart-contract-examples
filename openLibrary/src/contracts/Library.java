package .contracts;


/**
* A library can borrow books to registered users.
**/
public interface Library{
	
	Integer userCount();
	
	Integer activeUserCount();
	
	Integer bookCount();
	
	Integer activeBooksCount();

	/**
	* The sender will be the first manager.
	**/
	void Library();
	/**
	* Register a manager.
	* 
	* @param _address -
	**/
	void registerManager(String _address);
	/**
	* Unregister a manager.
	* 
	* @param _address -
	**/
	void unregisterManager(String _address);
	/**
	* Register a new employee.
	* 
	* @param _address -
	**/
	void registerEmployee(String _address);
	/**
	* Unregister an employee.
	* 
	* @param _address -
	**/
	void unregisterEmployee(String _address);
	/**
	* Register a library user.
	* 
	* @param _address -The address of the user.
	* @param _name -The name of the user.
	**/
	void registerUser(String _address,String _name);
	/**
	* Unregister a library user.
	* 
	* @param _address -
	**/
	void unregisterUser(String _address);
	/**
	* Add a book to the library.
	* 
	* @param _titel -The titel of the added book.
	**/
	void addBook(String _titel);
	/**
	* Change the book state.
	* 
	* @param id -The id of the book.
	* @param _state -The new state of the book.
	**/
	void changeBookState(Integer id, _state);
	/**
	* Borrows a book.
	* 
	* @param id -The id of the book.
	* @param _address -The address of the user.
	**/
	void borrowBook(Integer id,String _address);
	/**
	* Return the book.
	* 
	* @param id -The id of the book.
	* @param _address -The address of the user.
	**/
	void returnBook(Integer id,String _address);	
}
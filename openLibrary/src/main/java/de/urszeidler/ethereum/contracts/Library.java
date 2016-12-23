package de.urszeidler.ethereum.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

/**
* A library can borrow books to registered users.
**/
public interface Library{
    enum UserState { unknown,registered,disabled }
    enum Bookstate { unknown,available,borrowed,disabled }
	
	Integer userCount();
	
	Integer activeUserCount();
	
	Integer bookCount();
	
	Integer activeBooksCount();
	
	Integer managerCount();
	
	Integer employeeCount();
	
	Boolean managers(org.adridadou.ethereum.values.EthAddress key);
	
	Boolean employees(org.adridadou.ethereum.values.EthAddress key);
	
	Integer usersAdresses(org.adridadou.ethereum.values.EthAddress key);

	/**
	* Register a manager.
	* 
	* @param _address -
	**/
	void registerManager(org.adridadou.ethereum.values.EthAddress _address);
	/**
	* Unregister a manager.
	* 
	* @param _address -
	**/
	void unregisterManager(org.adridadou.ethereum.values.EthAddress _address);
	/**
	* Register a new employee.
	* 
	* @param _address -
	**/
	void registerEmployee(org.adridadou.ethereum.values.EthAddress _address);
	/**
	* Unregister an employee.
	* 
	* @param _address -
	**/
	void unregisterEmployee(org.adridadou.ethereum.values.EthAddress _address);
	/**
	* Register a library user.
	* 
	* @param _address -The address of the user.
	* @param _name -The name of the user.
	**/
	void registerUser(org.adridadou.ethereum.values.EthAddress _address,String _name);
	/**
	* Unregister a library user.
	* 
	* @param _address -
	**/
	void unregisterUser(org.adridadou.ethereum.values.EthAddress _address);
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
	void changeBookState(Integer id,Integer _state);
	/**
	* Borrows a book.
	* 
	* @param id -The id of the book.
	* @param _address -The address of the user.
	**/
	void borrowBook(Integer id,org.adridadou.ethereum.values.EthAddress _address);
	/**
	* Return the book.
	* 
	* @param id -The id of the book.
	* @param _address -The address of the user.
	**/
	void returnBook(Integer id,org.adridadou.ethereum.values.EthAddress _address);
	
	ReturnGetBook_string_Bookstate_address getBook(Integer _id);
	//Start of user code additional_methods
	org.adridadou.ethereum.values.EthAddress owner();
	Integer[] getBookForUser(Integer uid);
	Integer getBorrowedBooksCount(Integer uid);
	String getUserName(Integer id);
	
	//End of user code
}

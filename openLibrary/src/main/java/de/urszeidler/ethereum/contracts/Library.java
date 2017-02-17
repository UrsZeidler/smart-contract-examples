package de.urszeidler.ethereum.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code


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
	java.util.concurrent.CompletableFuture<Void> registerManager(org.adridadou.ethereum.values.EthAddress _address);
	/**
	* Unregister a manager.
	* 
	* @param _address -
	**/
	java.util.concurrent.CompletableFuture<Void> unregisterManager(org.adridadou.ethereum.values.EthAddress _address);
	/**
	* Register a new employee.
	* 
	* @param _address -
	**/
	java.util.concurrent.CompletableFuture<Void> registerEmployee(org.adridadou.ethereum.values.EthAddress _address);
	/**
	* Unregister an employee.
	* 
	* @param _address -
	**/
	java.util.concurrent.CompletableFuture<Void> unregisterEmployee(org.adridadou.ethereum.values.EthAddress _address);
	/**
	* Register a library user.
	* 
	* @param _address -The address of the user.
	* @param _name -The name of the user.
	**/
	java.util.concurrent.CompletableFuture<Void> registerUser(org.adridadou.ethereum.values.EthAddress _address,String _name);
	/**
	* Unregister a library user.
	* 
	* @param _address -
	**/
	java.util.concurrent.CompletableFuture<Void> unregisterUser(org.adridadou.ethereum.values.EthAddress _address);
	/**
	* Add a book to the library.
	* 
	* @param _titel -The titel of the added book.
	**/
	java.util.concurrent.CompletableFuture<Void> addBook(String _titel);
	/**
	* Change the book state.
	* 
	* @param id -The id of the book.
	* @param _state -The new state of the book.
	**/
	java.util.concurrent.CompletableFuture<Void> changeBookState(Integer id,Integer _state);
	/**
	* Borrows a book.
	* 
	* @param id -The id of the book.
	* @param _address -The address of the user.
	**/
	java.util.concurrent.CompletableFuture<Void> borrowBook(Integer id,org.adridadou.ethereum.values.EthAddress _address);
	/**
	* Return the book.
	* 
	* @param id -The id of the book.
	* @param _address -The address of the user.
	**/
	java.util.concurrent.CompletableFuture<Void> returnBook(Integer id,org.adridadou.ethereum.values.EthAddress _address);
	
	ReturnGetBook_string_Bookstate_address getBook(Integer _id);

	//Start of user code additional_methods
	org.adridadou.ethereum.values.EthAddress owner();
	Integer[] getBookForUser(Integer uid);
	Integer getBorrowedBooksCount(Integer uid);
	String getUserName(Integer id);
	
	//End of user code
}

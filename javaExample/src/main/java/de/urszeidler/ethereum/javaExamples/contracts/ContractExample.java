package de.urszeidler.ethereum.javaExamples.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code


/**
* Shows the basic features.
**/
public interface ContractExample{
    enum ContractState { state1,state2,state3 }
	
	String text();
	/**
	* An attribute which uses getter/setter.
	**/
	Integer number();
	
	Boolean locked();
	
	org.adridadou.ethereum.values.EthAddress creator();
	
	ContractState contractState();

	/**
	* Example for multiple return values.
	* @return
	* _text -
	* _owner -
	* _number -
	* _locked -
	**/
	ReturnContractData_string_address_uint_bool contractData();
	/**
	* Change the intern sate of the contract.
	* 
	* @param _locked -
	**/
	java.util.concurrent.CompletableFuture<Void> changeLocked(Boolean _locked);
	/**
	* Change the state, also an example for emum as parameter.
	* 
	* @param _state -
	**/
	java.util.concurrent.CompletableFuture<Void> changeState(ContractState _state);
	/**
	* Test method for the 'stateModifier' throws if contractState!=ContractState.state1.
	**/
	java.util.concurrent.CompletableFuture<Void> isInState();
	/**
	* Test method for the testmodifer. Throws if locked.
	**/
	java.util.concurrent.CompletableFuture<Void> throwIfLocked();
	
	java.util.concurrent.CompletableFuture<ReturnReturnStateChange_address_uint> returnStateChange();
	/**
	* A const function return a single value.
	* @return
	* _text -
	**/
	String returnLast();

	Integer getNumber();

	java.util.concurrent.CompletableFuture<Void> setNumber (Integer aNumber);

	//Start of user code additional_methods

	//End of user code
}

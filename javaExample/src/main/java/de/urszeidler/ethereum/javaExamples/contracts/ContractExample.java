package de.urszeidler.ethereum.javaExamples.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code



public interface ContractExample{
    enum ContractState { state1,state2,state3 }
	
	String text();
	
	Integer number();
	
	Boolean locked();
	
	org.adridadou.ethereum.values.EthAddress creator();
	
	ContractState contractState();

	
	ReturnContractData_string_address_uint_bool contractData();
	
	java.util.concurrent.CompletableFuture<Void> changeLocked(Boolean _locked);
	
	java.util.concurrent.CompletableFuture<Void> changeState(ContractState _state);
	
	java.util.concurrent.CompletableFuture<Void> isInState();
	
	java.util.concurrent.CompletableFuture<Void> throwIfLocked();

	Integer getNumber();

	java.util.concurrent.CompletableFuture<Void> setNumber (Integer aNumber);

	//Start of user code additional_methods

	//End of user code
}

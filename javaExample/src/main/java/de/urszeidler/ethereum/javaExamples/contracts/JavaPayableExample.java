package de.urszeidler.ethereum.javaExamples.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports
import org.adridadou.ethereum.values.Payable;

//End of user code


/**
* An example for the payable modifier. 
* How to send ether to and from the contract.
* The contract stores the value in the amount mapping.
**/
public interface JavaPayableExample{
	
	java.math.BigInteger amounts(org.adridadou.ethereum.values.EthAddress key);

	/**
	* This send the ether back.
	**/
	java.util.concurrent.CompletableFuture<Void> sendBack();
	/**
	* This method accept ether as it has the payable modifier.
	**/
	org.adridadou.ethereum.values.Payable<Void> recieve();
	/**
	* Relay the amount to the _to parameter.
	* 
	* @param _to -
	* @return
	*  -
	**/
	org.adridadou.ethereum.values.Payable<Boolean> relay(org.adridadou.ethereum.values.EthAddress _to);

	//Start of user code additional_methods

	//End of user code
}

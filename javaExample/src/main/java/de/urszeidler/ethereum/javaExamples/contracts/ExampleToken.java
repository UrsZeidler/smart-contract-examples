package de.urszeidler.ethereum.javaExamples.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.propeller.values.EthAddress;

//Start of user code customized_imports

//End of user code



public interface ExampleToken{
	
	java.math.BigInteger totalTokens();
	
	java.math.BigInteger accountsBalance(org.adridadou.ethereum.propeller.values.EthAddress key);	

	/**
	* Get the total token supply.
	* @return
	* supply -
	**/
	java.math.BigInteger totalSupply();

	/**
	* Get the account balance of another account with address _owner.
	* 
	* @param _owner -
	* @return
	* balance -
	**/
	java.math.BigInteger balanceOf(org.adridadou.ethereum.propeller.values.EthAddress _owner);

	/**
	* Send _value amount of tokens to address _to.
	* 
	* @param _to -
	* @param _value -
	* @return
	* success -
	**/
	java.util.concurrent.CompletableFuture<Boolean> transfer(org.adridadou.ethereum.propeller.values.EthAddress _to,java.math.BigInteger _value);

	/**
	* Send _value amount of tokens from address _from to address _to.
	* 
	* @param _from -
	* @param _to -
	* @param _value -
	* @return
	* success -
	**/
	java.util.concurrent.CompletableFuture<Boolean> transferFrom(org.adridadou.ethereum.propeller.values.EthAddress _from,org.adridadou.ethereum.propeller.values.EthAddress _to,java.math.BigInteger _value);


	//Start of user code additional_methods

	//End of user code
}

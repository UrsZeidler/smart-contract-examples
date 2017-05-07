package de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code


/**
* A contract to manage pocket money for one recipient.
**/
public interface PocketMoneyContract{
	
	org.adridadou.ethereum.values.EthAddress owner();
	
	org.adridadou.ethereum.values.EthAddress donator();
	
	org.adridadou.ethereum.values.EthAddress recipient();
	/**
	* The interval for claiming the amount.
	**/
	java.math.BigInteger claimInterval();
	/**
	* The timestamp of last claimed money.
	**/
	java.math.BigInteger lastClaimed();
	/**
	* The amount per intervall.
	**/
	java.math.BigInteger amount2Claim();
	/**
	* The current amount of the contract.
	**/
	java.math.BigInteger currentAmount();

	/**
	* Receives the money for the past intervals.
	**/
	java.util.concurrent.CompletableFuture<Void> claimPocketMoney();

	java.util.concurrent.CompletableFuture<Void> setOwner (org.adridadou.ethereum.values.EthAddress aOwner);

	java.util.concurrent.CompletableFuture<Void> setDonator (org.adridadou.ethereum.values.EthAddress aDonator);

	java.util.concurrent.CompletableFuture<Void> setRecipient (org.adridadou.ethereum.values.EthAddress aRecipient);

	java.util.concurrent.CompletableFuture<Void> setClaimInterval (java.math.BigInteger aClaimInterval);

	java.util.concurrent.CompletableFuture<Void> setAmount2Claim (java.math.BigInteger aAmount2Claim);

	//Start of user code additional_methods

	//End of user code
}

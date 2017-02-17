package de.urszeidler.ethereum.javaExamples.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports
import org.adridadou.ethereum.values.Payable;

//End of user code



public interface JavaPayableExample{
	
	java.math.BigInteger amounts(org.adridadou.ethereum.values.EthAddress key);

	
	java.util.concurrent.CompletableFuture<Void> sendBack();
	
	Payable<Void> recieve();

	//Start of user code additional_methods

	//End of user code
}

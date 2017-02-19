package de.urszeidler.ethereum.javaExamples.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code



public interface JavaOwnerExample{
	
	org.adridadou.ethereum.values.EthAddress owner();


	java.util.concurrent.CompletableFuture<Void> setOwner (org.adridadou.ethereum.values.EthAddress aOwner);

	//Start of user code additional_methods

	//End of user code
}

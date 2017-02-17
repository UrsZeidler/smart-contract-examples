package de.urszeidler.ethereum.javaExamples.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code



public interface JavaEventExample{
	
	Integer eventCount();

	
	java.util.concurrent.CompletableFuture<Void> raiseEvent(String _text);

	//Start of user code additional_methods

	//End of user code
}

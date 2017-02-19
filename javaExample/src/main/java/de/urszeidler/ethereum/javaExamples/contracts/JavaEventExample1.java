package de.urszeidler.ethereum.javaExamples.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code


/**
* The inheried the event.
**/
public interface JavaEventExample1 extends JavaEventExample{

	/**
	* Raises the Event1 and the Event2.
	**/
	java.util.concurrent.CompletableFuture<Void> raiseEvent2();

	//Start of user code additional_methods

	//End of user code
}

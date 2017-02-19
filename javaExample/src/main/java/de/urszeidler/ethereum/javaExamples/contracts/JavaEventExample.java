package de.urszeidler.ethereum.javaExamples.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code


/**
* Test the event system.
**/
public interface JavaEventExample{
	/**
	* Count the events raised by 'raiseEvent'.
	**/
	Integer eventCount();

	/**
	* The method that raises the events.
	* 
	* @param _text -A text for the event.
	**/
	java.util.concurrent.CompletableFuture<Void> raiseEvent(String _text);

	//Start of user code additional_methods

	//End of user code
}

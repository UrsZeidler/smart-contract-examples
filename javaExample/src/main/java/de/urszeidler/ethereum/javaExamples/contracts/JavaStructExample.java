package de.urszeidler.ethereum.javaExamples.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code



public interface JavaStructExample{
	
	Integer structCount();

	
	java.util.concurrent.CompletableFuture<Void> addStruct(Integer _a1,String _a2);

	//Start of user code additional_methods
	StructTest testStructs(Integer id);
	//End of user code
}

package de.urszeidler.ethereum.javaExamples.contracts;

import java.util.concurrent.CompletableFuture;
import org.adridadou.ethereum.values.EthAddress;

//Start of user code customized_imports

//End of user code



public interface JavaStructExample{
	
	JavaStructExampleTestStruct lastStruct();
	
	Integer structCount();
	
	Integer structCount1();
	
	JavaStructExampleTestStruct1 testStructs1(Integer key);
	
	JavaStructExampleTestStruct testStructs(Integer key);	

	
	java.util.concurrent.CompletableFuture<Void> addStruct(Integer _a1,String _a2);
	
	java.util.concurrent.CompletableFuture<Void> addStruct1(String _text);

	//Start of user code additional_methods
	//End of user code
}

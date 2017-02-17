package de.urszeidler.ethereum.javaExamples.contracts;

import static org.junit.Assert.*;


import de.urszeidler.ethereum.javaExamples.contracts.JavaEventExample1.*;


import java.io.File;
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;
import java.math.*;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.keystore.*;
import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.adridadou.ethereum.values.config.ChainId;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import de.urszeidler.ethereum.javaExamples.AbstractContractTest;
import de.urszeidler.ethereum.javaExamples.EthereumInstance;

// Start of user code JavaEventExample1Test.customImports
import de.urszeidler.ethereum.javaExamples.deployer.ContractsDeployer;
import rx.Subscriber;

// End of user code


/**
 * Test for the JavaEventExample1 contract.
 *
 */
public class JavaEventExample1Test extends JavaEventExampleTest{

	private JavaEventExample1 fixture;
	// Start of user code JavaEventExample1Test.attributes
	//TODO: add custom attributes

	// End of user code

	@Override
	protected String getContractName() {
		return "JavaEventExample1";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
        File contractSrc = new File(this.getClass().getResource("/contracts/contracts.sol").toURI());
        contractSource = SoliditySource.from(contractSrc);
		createFixture();
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		deployer = new ContractsDeployer(ethereum);
		CompiledContract compiledContract = getCompiledContract();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, JavaEventExample1.class));
		//End of user code
	}

	protected void setFixture(JavaEventExample1 f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test method for  raiseEvent2().
	 * see {@link JavaEventExample1#raiseEvent2()}
	 * @throws Exception
	 */
	@Test
	public void testRaiseEvent2() throws Exception {
		//Start of user code testRaiseEvent2
		if(supportEvents()){
			deployer.observeEventEvent1_string_uint(fixtureAddress).subscribe(it-> assertEquals("testEvent2", it.getText()));
			
//			System.out.println("Event1 raised"+it.getText()+it.getIndex()));
			deployer.observeEventEvent2(fixtureAddress).subscribe(new Subscriber<EventEvent2>() {

				@Override
				public void onCompleted() {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onError(Throwable arg0) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onNext(EventEvent2 arg0) {
					System.out.println("Event2:"+arg0);
				}
			});
		}

		System.out.println("Raise Event");
		
		fixture.raiseEvent("testEvent1").get();
		assertEquals(1, fixture.eventCount().intValue());
		
		fixture.raiseEvent2().get();
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}

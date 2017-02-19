package de.urszeidler.ethereum.javaExamples.contracts;

import static org.junit.Assert.*;


import de.urszeidler.ethereum.javaExamples.contracts.JavaEventExample.*;


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

// Start of user code JavaEventExampleTest.customImports
import de.urszeidler.ethereum.javaExamples.contracts.JavaEventExample.*;
import de.urszeidler.ethereum.javaExamples.deployer.ContractsDeployer;

// End of user code


/**
 * Test for the JavaEventExample contract.
 *
 */
public class JavaEventExampleTest extends AbstractContractTest{

	private JavaEventExample fixture;
	// Start of user code JavaEventExampleTest.attributes
	// to register with contracts events we use the deployer
	protected ContractsDeployer deployer;

	// End of user code

	@Override
	protected String getContractName() {
		return "JavaEventExample";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		
		deployer = new ContractsDeployer(ethereum);
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
		CompiledContract compiledContract = getCompiledContract();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, JavaEventExample.class));
		//End of user code
	}

	protected void setFixture(JavaEventExample f) {
		this.fixture = f;
	}


	/**
	 * Test method for  raiseEvent(String _text).
	 * see {@link JavaEventExample#raiseEvent( String)}
	 * @throws Exception
	 */
	@Test
	public void testRaiseEvent_string() throws Exception {
		//Start of user code testRaiseEvent_string
		// we use the deployer to subscribe with the event 
		if(supportEvents()){
			deployer.observeEventEvent1_string_uint(fixtureAddress)//
			  .subscribe(it->assertEquals("testEvent", it.getText()));
		}
		
		fixture.raiseEvent("testEvent").get();
		assertEquals(1, fixture.eventCount().intValue());
		
		
		
		//End of user code
	}
	//Start of user code customTests    
	/**
	 * Not all connections to the ethereum network supports events.
	 * @return
	 */
	protected boolean supportEvents() {
		String property = System.getProperty("EthereumFacadeProvider");
		return "private".equals(property);
	}
	//End of user code
}

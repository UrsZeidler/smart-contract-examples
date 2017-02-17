package de.urszeidler.ethereum.javaExamples.contracts;

import static org.junit.Assert.*;


import de.urszeidler.ethereum.javaExamples.contracts.JavaStructExample.*;


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

// Start of user code JavaStructExampleTest.customImports

// End of user code


/**
 * Test for the JavaStructExample contract.
 *
 */
public class JavaStructExampleTest extends AbstractContractTest{

	private JavaStructExample fixture;
	// Start of user code JavaStructExampleTest.attributes
	//TODO: add custom attributes

	// End of user code

	@Override
	protected String getContractName() {
		return "JavaStructExample";
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
		CompiledContract compiledContract = getCompiledContract();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, JavaStructExample.class));
		//End of user code
	}

	protected void setFixture(JavaStructExample f) {
		this.fixture = f;
	}


	/**
	 * Test method for  addStruct(Integer _a1,String _a2).
	 * see {@link JavaStructExample#addStruct( Integer, String)}
	 * @throws Exception
	 */
	@Test
	public void testAddStruct_uint_string() throws Exception {
		//Start of user code testAddStruct_uint_string
		fixture.addStruct(1, "Test").get();
		
		assertEquals(1, fixture.structCount().intValue());
		
		
		StructTest testStructs = fixture.testStructs(0);
		assertEquals(1, testStructs._a1.intValue());
		assertEquals("Test", testStructs._a2);
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}

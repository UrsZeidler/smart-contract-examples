package de.urszeidler.ethereum.javaExamples.contracts;

import static org.junit.Assert.*;


import de.urszeidler.ethereum.javaExamples.contracts.ContractExample.*;


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

// Start of user code ContractExampleTest.customImports

// End of user code


/**
 * Test for the ContractExample contract.
 *
 */
public class ContractExampleTest extends AbstractContractTest{

	private ContractExample fixture;
	// Start of user code ContractExampleTest.attributes
	// TODO: add custom attributes

	// End of user code

	@Override
	protected String getContractName() {
		return "ContractExample";
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
		// End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		CompiledContract compiledContract = getCompiledContract();
		// TODO: set the constructor args
		String _text = "_text";
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender, _text);
		fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, ContractExample.class));
		// End of user code
	}

	protected void setFixture(ContractExample f) {
		this.fixture = f;
	}


	/**
	 * Test method for  contractData().
	 * see {@link ContractExample#contractData()}
	 * @throws Exception
	 */
	@Test
	public void testContractData() throws Exception {
		//Start of user code testContractData
		assertEquals(10, fixture.number().intValue());
		ReturnContractData_string_address_uint_bool data = fixture.contractData();

		assertEquals("_text", data.get_text());
		assertTrue(data.get_locked());
		fixture.setNumber(11).get();
		assertEquals(11, fixture.number().intValue());
		// End of user code
	}
	/**
	 * Test method for  changeLocked(Boolean _locked).
	 * see {@link ContractExample#changeLocked( Boolean)}
	 * @throws Exception
	 */
	@Test
	public void testChangeLocked_bool() throws Exception {
		//Start of user code testChangeLocked_bool
		assertTrue(fixture.locked());
		fixture.changeLocked(false).get();
		assertFalse(fixture.locked());
		
		// End of user code
	}
	/**
	 * Test method for  changeState(ContractState _state).
	 * see {@link ContractExample#changeState( ContractState)}
	 * @throws Exception
	 */
	@Test
	public void testChangeState_ContractState() throws Exception {
		//Start of user code testChangeState_ContractState
		assertEquals(ContractState.state1, fixture.contractState());
		fixture.changeState(ContractState.state2).get();
		assertEquals(ContractState.state2, fixture.contractState());
		//End of user code
	}
	/**
	 * Test method for  isInState().
	 * see {@link ContractExample#isInState()}
	 * @throws Exception
	 */
	@Test
	public void testIsInState() throws Exception {
		//Start of user code testIsInState
		fixture.isInState().get();
		assertEquals(ContractState.state1, fixture.contractState());
		fixture.changeState(ContractState.state2).get();
		try {
			fixture.isInState().get();
			fail("exception need be be thrown");
		} catch (Exception e) {
		}
		
		fixture.changeState(ContractState.state1).get();
		fixture.isInState().get();
		assertEquals("inState1", fixture.text());
		//End of user code
	}
	/**
	 * Test method for  throwIfLocked().
	 * see {@link ContractExample#throwIfLocked()}
	 * @throws Exception
	 */
	@Test
	public void testThrowIfLocked() throws Exception {
		//Start of user code testThrowIfLocked
		fixture.changeLocked(false).get();
		fixture.throwIfLocked().get();
		assertEquals("not Locked", fixture.text());
		
		fixture.changeLocked(true).get();
		try {
			fixture.throwIfLocked().get();
			fail("exception need be be thrown");
		} catch (Exception e) {
		}
		//End of user code
	}
	//Start of user code customTests
	// End of user code
}

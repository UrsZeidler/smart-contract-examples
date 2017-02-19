package de.urszeidler.ethereum.javaExamples.contracts;

import static org.junit.Assert.*;


import de.urszeidler.ethereum.javaExamples.contracts.ExampleToken.*;


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

// Start of user code ExampleTokenTest.customImports

// End of user code


/**
 * Test for the ExampleToken contract.
 *
 */
public class ExampleTokenTest extends AbstractContractTest{

	private ExampleToken fixture;
	// Start of user code ExampleTokenTest.attributes
	//TODO: add custom attributes

	// End of user code

	@Override
	protected String getContractName() {
		return "ExampleToken";
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
		Integer totalSupply = 1000;
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender,totalSupply);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, ExampleToken.class));
		//End of user code
	}

	protected void setFixture(ExampleToken f) {
		this.fixture = f;
	}


	/**
	 * Test method for  totalSupply().
	 * see {@link ExampleToken#totalSupply()}
	 * @throws Exception
	 */
	@Test
	public void testTotalSupply() throws Exception {
		//Start of user code testTotalSupply
		assertEquals(1000, fixture.totalSupply().intValue());
		assertEquals(1000, fixture.totalTokens().intValue());
		//End of user code
	}
	/**
	 * Test method for  balanceOf(org.adridadou.ethereum.values.EthAddress _owner).
	 * see {@link ExampleToken#balanceOf( org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testBalanceOf_address() throws Exception {
		//Start of user code testBalanceOf_address
		assertEquals(1000, fixture.balanceOf(senderAddress).intValue());
		
		EthAccount testAccount = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
		assertTrue(fixture.transfer(testAccount.getAddress(), BigInteger.valueOf(10L)).get());
		assertEquals(1000-10, fixture.balanceOf(senderAddress).intValue());
		assertEquals(10, fixture.balanceOf(testAccount.getAddress()).intValue());

		//End of user code
	}
	/**
	 * Test method for  transfer(org.adridadou.ethereum.values.EthAddress _to,java.math.BigInteger _value).
	 * see {@link ExampleToken#transfer( org.adridadou.ethereum.values.EthAddress, java.math.BigInteger)}
	 * @throws Exception
	 */
	@Test
	public void testTransfer_address_uint256() throws Exception {
		//Start of user code testTransfer_address_uint256
		EthAccount testAccount = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
		assertEquals(1000, fixture.balanceOf(senderAddress).intValue());
		
		BigInteger value = BigInteger.valueOf(10L);
		assertTrue("The transfer function should return true.", fixture.transfer(testAccount.getAddress(), value).get());
		assertEquals("We have send 10.",10, fixture.balanceOf(testAccount.getAddress()).intValue());
		assertEquals(1000-10, fixture.balanceOf(senderAddress).intValue());

		//End of user code
	}
	/**
	 * Test method for  transferFrom(org.adridadou.ethereum.values.EthAddress _from,org.adridadou.ethereum.values.EthAddress _to,java.math.BigInteger _value).
	 * see {@link ExampleToken#transferFrom( org.adridadou.ethereum.values.EthAddress, org.adridadou.ethereum.values.EthAddress, java.math.BigInteger)}
	 * @throws Exception
	 */
	@Test
	public void testTransferFrom_address_address_uint256() throws Exception {
		//Start of user code testTransferFrom_address_address_uint256
		assertEquals(1000, fixture.balanceOf(senderAddress).intValue());
		
		EthAccount testAccount = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
		
		assertTrue(fixture.transferFrom(senderAddress, testAccount.getAddress(), BigInteger.valueOf(10L)).get());
		
		assertEquals(1000-10, fixture.balanceOf(senderAddress).intValue());
		assertEquals(10, fixture.balanceOf(testAccount.getAddress()).intValue());
		
		assertFalse(fixture.transferFrom(testAccount.getAddress(), senderAddress,BigInteger.valueOf(11L)).get());

		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}

package de.urszeidler.ethereum.javaExamples.contracts;

import static org.junit.Assert.*;


import de.urszeidler.ethereum.javaExamples.contracts.JavaPayableExample.*;


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

// Start of user code JavaPayableExampleTest.customImports
import org.adridadou.ethereum.values.EthValue;

// End of user code


/**
 * Test for the JavaPayableExample contract.
 *
 */
public class JavaPayableExampleTest extends AbstractContractTest{

	private JavaPayableExample fixture;
	// Start of user code JavaPayableExampleTest.attributes
	//TODO: add custom attributes

	// End of user code

	@Override
	protected String getContractName() {
		return "JavaPayableExample";
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
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, JavaPayableExample.class));
		//End of user code
	}

	protected void setFixture(JavaPayableExample f) {
		this.fixture = f;
	}


	/**
	 * Test method for  sendBack().
	 * see {@link JavaPayableExample#sendBack()}
	 * @throws Exception
	 */
	@Test
	public void testSendBack() throws Exception {
		//Start of user code testSendBack
		assertEquals(BigInteger.ZERO, ethereum.getBalance(fixtureAddress).inWei());
		EthValue value = EthValue.wei(10000L);
		fixture.recieve().with(value).get();
		EthValue balance = ethereum.getBalance(fixtureAddress);
		assertEquals(value,balance);
		assertEquals(10000L, fixture.amounts(sender.getAddress()).longValue());
		
		//after we send the ether we want it back
		EthValue balance2 = ethereum.getBalance(sender);
		fixture.sendBack().get();
		int intValue = fixture.amounts(senderAddress).intValue();
		assertEquals(0, intValue);
		
		EthValue minus = balance2.plus(value).minus(ethereum.getBalance(sender));
		System.out.println(minus);
		
		assertEquals(balance2.plus(value), ethereum.getBalance(sender));
		//End of user code
	}
	/**
	 * Test method for  recieve().
	 * see {@link JavaPayableExample#recieve()}
	 * @throws Exception
	 */
	@Test
	public void testRecieve() throws Exception {
		//Start of user code testRecieve
		EthValue value = EthValue.wei(10000L);
//		ethereum.sendEther(sender, fixtureAddress, value);
		fixture.recieve().with(value).get();
		EthValue balance = ethereum.getBalance(fixtureAddress);
		assertEquals(value,balance);
		int intValue = fixture.amounts(sender.getAddress()).intValue();
		
		System.out.println("--->"+ intValue);
		EthValue wei = EthValue.wei(intValue);
		
		
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}

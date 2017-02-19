package de.urszeidler.ethereum.javaExamples.contracts;

import static org.junit.Assert.*;

import de.urszeidler.ethereum.javaExamples.contracts.JavaPayableExample.*;
import de.urszeidler.ethereum.javaExamples.deployer.ContractsDeployer;

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
public class JavaPayableExampleTest extends AbstractContractTest {

	private JavaPayableExample fixture;
	// Start of user code JavaPayableExampleTest.attributes
	private EthAccount testAccount = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
	private EthAccount testAccount1 = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L)));
	private EthAccount testAccount2 = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100002L)));
	private EthAccount testAccount3 = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100003L)));
	private ContractsDeployer deployer;
	// End of user code

	@Override
	protected String getContractName() {
		return "JavaPayableExample";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * 
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		// Start of user code prepareTest
		File contractSrc = new File(this.getClass().getResource("/contracts/contracts.sol").toURI());
		contractSource = SoliditySource.from(contractSrc);
		deployer = new ContractsDeployer(ethereum, contractSrc, false);
		createFixture();
		// End of user code
	}

	/**
	 * Create a new fixture by deploying the contract source.
	 * 
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		// Start of user code createFixture
		CompiledContract compiledContract = getCompiledContract();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, JavaPayableExample.class));
		// End of user code
	}

	protected void setFixture(JavaPayableExample f) {
		this.fixture = f;
	}

	/**
	 * Test method for sendBack(). see {@link JavaPayableExample#sendBack()}
	 * 
	 * @throws Exception
	 */
	@Test
	public void testSendBack() throws Exception {
		// Start of user code testSendBack
		assertEquals(BigInteger.ZERO, ethereum.getBalance(fixtureAddress).inWei());
		EthValue value = EthValue.wei(10000L);
		fixture.recieve().with(value).get();
		EthValue balance = ethereum.getBalance(fixtureAddress);
		assertEquals(value, balance);
		assertEquals(10000L, fixture.amounts(sender.getAddress()).longValue());

		// after we send the ether we want it back
		EthValue balance2 = ethereum.getBalance(sender);
		fixture.sendBack().get();
		int intValue = fixture.amounts(senderAddress).intValue();
		assertEquals(0, intValue);

		EthValue minus = balance2.plus(value).minus(ethereum.getBalance(sender));
		System.out.println(minus);

		assertEquals(balance2.plus(value), ethereum.getBalance(sender));
		// End of user code
	}

	/**
	 * Test method for recieve(). see {@link JavaPayableExample#recieve()}
	 * 
	 * @throws Exception
	 */
	@Test
	public void testRecieve() throws Exception {
		// Start of user code testRecieve
		EthValue value = EthValue.wei(10000L);
		// ethereum.sendEther(sender, fixtureAddress, value);
		fixture.recieve().with(value).get();
		EthValue balance = ethereum.getBalance(fixtureAddress);
		assertEquals(value, balance);
		int intValue = fixture.amounts(sender.getAddress()).intValue();

		System.out.println("--->" + intValue);
		EthValue wei = EthValue.wei(intValue);

		// End of user code
	}

	/**
	 * Test method for relay(org.adridadou.ethereum.values.EthAddress _to). see
	 * {@link JavaPayableExample#relay( org.adridadou.ethereum.values.EthAddress)}
	 * 
	 * @throws Exception
	 */
	@Test
	public void testRelay_address() throws Exception {
		// Start of user code testRelay_address
		EthValue balance_test_account = ethereum.getBalance(testAccount);
		assertEquals(0L, balance_test_account.inWei().longValue());
		EthValue value = EthValue.wei(BigInteger.valueOf(1000L));
		assertTrue(fixture.relay(testAccount.getAddress()).with(value).get());

		assertEquals(value, ethereum.getBalance(testAccount));
		
		// End of user code
	}
	// Start of user code customTests
	@Test
	public void testRecieveFromMultiple() throws Exception {
		EthValue value = EthValue.wei(10000L);
		ethereum.sendEther(sender, testAccount1.getAddress(), value);
		ethereum.sendEther(sender, testAccount2.getAddress(), value);
		ethereum.sendEther(sender, testAccount3.getAddress(), value);
		
		assertEquals(0L, fixture.amounts(testAccount1.getAddress()).longValue());
		assertEquals(0L, fixture.amounts(testAccount2.getAddress()).longValue());
		assertEquals(0L, fixture.amounts(testAccount3.getAddress()).longValue());

		JavaPayableExample contract1 = deployer.createJavaPayableExampleProxy(testAccount1, fixtureAddress);
		JavaPayableExample contract2 = deployer.createJavaPayableExampleProxy(testAccount2, fixtureAddress);
		JavaPayableExample contract3 = deployer.createJavaPayableExampleProxy(testAccount3, fixtureAddress);
		
		contract1.recieve().with(value).get();
		assertEquals(10000L, fixture.amounts(testAccount1.getAddress()).longValue());
		assertEquals(0L, ethereum.getBalance(testAccount1).inWei().longValue());
		contract2.recieve().with(value).get();
		assertEquals(10000L, fixture.amounts(testAccount2.getAddress()).longValue());
		assertEquals(0L, ethereum.getBalance(testAccount2).inWei().longValue());
		contract3.recieve().with(value).get();
		assertEquals(10000L, fixture.amounts(testAccount3.getAddress()).longValue());
		assertEquals(0L, ethereum.getBalance(testAccount3).inWei().longValue());
		
		contract1.sendBack().get();
		assertEquals(0L, fixture.amounts(testAccount1.getAddress()).longValue());
		assertEquals(10000L, ethereum.getBalance(testAccount1).inWei().longValue());
		contract2.sendBack().get();
		assertEquals(0L, fixture.amounts(testAccount2.getAddress()).longValue());
		assertEquals(10000L, ethereum.getBalance(testAccount2).inWei().longValue());
		contract3.sendBack().get();
		assertEquals(0L, fixture.amounts(testAccount3.getAddress()).longValue());
		assertEquals(10000L, ethereum.getBalance(testAccount3).inWei().longValue());
		
	}
	// End of user code
}

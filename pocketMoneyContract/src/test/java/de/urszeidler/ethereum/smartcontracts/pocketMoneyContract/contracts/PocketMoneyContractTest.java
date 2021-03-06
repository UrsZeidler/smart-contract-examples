package de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts;

// Start of user code PocketMoneyContractTest.customImports
import static org.junit.Assert.*;

import java.io.File;
import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.propeller.keystore.AccountProvider;
import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.values.EthAccount;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.adridadou.ethereum.propeller.values.EthValue;
import org.adridadou.ethereum.propeller.values.SoliditySource;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.Test;

import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.AbstractContractTest;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.EthereumInstance;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts.EventPocketMoneyClaimed_address_uint_uint_uint_bool;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts.EventPocketMoneyDonated_address_uint_uint;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts.PocketMoneyContract;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.deployer.ContractsDeployer;
import rx.Observable;

// End of user code


/**
 * Test for the PocketMoneyContract contract.
 *
 */
public class PocketMoneyContractTest extends AbstractContractTest{

 
	private PocketMoneyContract fixture;
	// Start of user code PocketMoneyContractTest.attributes

	private EthAccount recipient = AccountProvider.fromPrivateKey((BigInteger.valueOf(100001L)));
	private EthAccount recipient1 = AccountProvider.fromPrivateKey((BigInteger.valueOf(200001L)));
	private EthAccount wrongRecipient = AccountProvider.fromPrivateKey((BigInteger.valueOf(100002L)));
	private EthAccount wrongDonator = AccountProvider.fromPrivateKey((BigInteger.valueOf(100003L)));
	private ContractsDeployer deployer;
	// End of user code

	@Override
	protected String getContractName() {
		return "PocketMoneyContract";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "contracts.sol:PocketMoneyContract";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		initTest();
		File contractSrc = new File(this.getClass().getResource("/contracts/combined.json").toURI());
		contractSource = SoliditySource.from(contractSrc);
		deployer = new ContractsDeployer(ethereum,contractSrc,true);
		createFixture();
		// End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		SolidityContractDetails compiledContract = getCompiledContract("/contracts/combined.json");

//		 SolidityContractDetails compiledContract = getCompiledContract();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, PocketMoneyContract.class));
		// End of user code
	}

	protected void setFixture(PocketMoneyContract f) {
		this.fixture = f;
	}


	/**
	 * Test method for  claimPocketMoney().
	 * see {@link PocketMoneyContract#claimPocketMoney()}
	 * @throws Exception
	 */
	@Test
	public void testClaimPocketMoney() throws Exception {
		//Start of user code testClaimPocketMoney
		testDonateAmount();
		BigInteger claimInterval = BigInteger.valueOf(100L);
		fixture.setClaimInterval(claimInterval).get();

		Observable<EventPocketMoneyClaimed_address_uint_uint_uint_bool> observable = deployer
				.observeEventPocketMoneyClaimed_address_uint_uint_uint_bool(fixtureAddress);
		observable.subscribe(e -> System.out.println("EventPocketMoneyClaimed " + e));

		PocketMoneyContract moneyContract = deployer.createPocketMoneyContractProxy(recipient, fixtureAddress);
		moneyContract.claimPocketMoney().get();
		assertEquals(BigInteger.valueOf(0L), ethereum.getBalance(recipient).inWei());

		wait100Mili();
		moneyContract.claimPocketMoney().get();
		assertEquals(BigInteger.valueOf(1L), ethereum.getBalance(recipient).inWei());

		wait100Mili();
		moneyContract.claimPocketMoney().get();
		assertEquals(BigInteger.valueOf(2L), ethereum.getBalance(recipient).inWei());

		wait100Mili();
		moneyContract.claimPocketMoney().get();
		assertEquals(BigInteger.valueOf(3L), ethereum.getBalance(recipient).inWei());

		wait100Mili();
		wait100Mili();
		ethereum.sendEther(sender, sender.getAddress(), EthValue.wei(10));
		moneyContract.claimPocketMoney().get();
		assertEquals(BigInteger.valueOf(5L), ethereum.getBalance(recipient).inWei());

		// End of user code
	}
	
	//Start of user code customTests

	/**
	 * @throws InterruptedException 
	 * 
	 */
	private void wait100Mili() throws InterruptedException {
		if (isStandaloneChain()) {
			int i = 0;
			while (i < 7) {
				ethereum.sendEther(sender, sender.getAddress(), EthValue.wei(10));
				i++;
			}
		}else
			Thread.sleep(100L);
	}


	@Test
	public void testConstructor() throws Exception {
		assertEquals(BigInteger.ZERO, fixture.amount2Claim());
		assertEquals(BigInteger.ZERO, fixture.claimInterval());
		assertEquals(BigInteger.ZERO, fixture.currentAmount());
		assertEquals(BigInteger.ZERO, fixture.lastClaimed());
		assertEquals(BigInteger.ZERO, ethereum.getBalance(fixtureAddress).inWei());
		assertEquals(sender.getAddress(), fixture.owner());
		assertEquals(EthAddress.empty(), fixture.donator());
		assertEquals(EthAddress.empty(), fixture.recipient());
	}

	@Test
	public void testInitalizeContract() throws Exception {
		BigInteger amount2Claim = BigInteger.valueOf(1L);
		BigInteger claimInterval = BigInteger.valueOf(1L);
		fixture.setAmount2Claim(amount2Claim).get();
		fixture.setDonator(sender.getAddress()).get();
		fixture.setClaimInterval(claimInterval).get();
		fixture.setRecipient(recipient.getAddress()).get();

		assertEquals(amount2Claim, fixture.amount2Claim());
		assertEquals(sender.getAddress(), fixture.donator());
		assertEquals(claimInterval, fixture.claimInterval());
		assertEquals(recipient.getAddress(), fixture.recipient());
		assertEquals(BigInteger.ZERO, fixture.currentAmount());
		assertEquals(BigInteger.ZERO, fixture.lastClaimed());
		assertEquals(BigInteger.ZERO, ethereum.getBalance(fixtureAddress).inWei());
	}

	@Test
	public void testDonateAmount() throws Exception {
		testInitalizeContract();
		Observable<EventPocketMoneyDonated_address_uint_uint> observable = deployer
				.observeEventPocketMoneyDonated_address_uint_uint(fixtureAddress);
		observable.subscribe(e -> System.out.println("EventPocketMoneyDonated_" + e));

		EthValue ether = EthValue.ether(1L);
		EthereumInstance.getInstance().getEthereum().sendEther(sender, fixtureAddress, ether).get();

		assertEquals(ether.inWei(), fixture.currentAmount());
		assertEquals(ether.inWei(), ethereum.getBalance(fixtureAddress).inWei());
		assertNotEquals(BigInteger.ZERO, fixture.lastClaimed());
	}

	@Test
	public void testDonateAmount_again() throws Exception {
		testDonateAmount();
		BigInteger claimed = fixture.lastClaimed();

		EthValue ether = EthValue.ether(1L);
		EthereumInstance.getInstance().getEthereum().sendEther(sender, fixtureAddress, ether).get();

		assertEquals(ether.inWei().add(ether.inWei()), fixture.currentAmount());
		assertEquals(ether.inWei().add(ether.inWei()), ethereum.getBalance(fixtureAddress).inWei());
		assertEquals(claimed, fixture.lastClaimed());
	}

	@Test(expected = Exception.class)
	public void testDonateAmount_wrongDonator() throws Exception {
		testDonateAmount();
		EthValue ether = EthValue.ether(1L);
		EthereumInstance.getInstance().getEthereum().sendEther(wrongDonator, fixtureAddress, ether).get();
	}

	@Test(expected = Exception.class)
	public void testClaimPocketMoney_wrongRecipient() throws Exception {
		PocketMoneyContract moneyContract = deployer.createPocketMoneyContractProxy(wrongRecipient, fixtureAddress);
		moneyContract.claimPocketMoney().get();
	}

	@Test
	public void testOnlyOwner() throws Exception {
		PocketMoneyContract moneyContract = deployer.createPocketMoneyContractProxy(wrongRecipient, fixtureAddress);

		try {
			moneyContract.setAmount2Claim(BigInteger.ONE).get();
			fail("should fail");
		} catch (Exception e) {
		}
		try {
			moneyContract.setClaimInterval(BigInteger.ONE).get();
			fail("should fail");
		} catch (Exception e) {
		}
		try {
			moneyContract.setDonator(fixtureAddress).get();
			fail("should fail");
		} catch (Exception e) {
		}
		try {
			moneyContract.setOwner(fixtureAddress).get();
			fail("should fail");
		} catch (Exception e) {
		}
		try {
			moneyContract.setRecipient(fixtureAddress).get();
			fail("should fail");
		} catch (Exception e) {
		}

	}
	// End of user code
}

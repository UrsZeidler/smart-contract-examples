package de.urszeidler.ethereum.smartcontracts.pocketMoneyContract;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.propeller.EthereumFacade;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.adridadou.ethereum.propeller.values.EthValue;
import org.apache.commons.io.IOUtils;
import org.junit.Before;
import org.junit.Test;

import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts.PocketMoneyContract;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.deployer.ContractsDeployer;

public class PocketMoneyContractManagerTest extends AbstractContractTest {

	private PockeMoneyContractManager manager;
	private ContractsDeployer deployer;

	@Before
	public void setUp() throws Exception {
		initTest();
		
		manager = new PockeMoneyContractManager();
		manager.setSender(sender);
//		manager.setEthereum(ethereum);
		
		System.setProperty("NoExit", "1");
		deployer = new ContractsDeployer(ethereum,"/contracts/combined.json",true);
	}

	@Test
	public void testSetPoketMoneyContractParameters() throws IOException, InterruptedException, ExecutionException {
		manager.deployContract();
		manager.listContract(null);
		System.out.println();
		
		manager.setPoketMoneyContractParameters(BigInteger.ONE, BigInteger.ONE, sender.getAddress(), sender.getAddress());
		PocketMoneyContract contract = manager.getManager().contractInstance;
		
		assertEquals(BigInteger.ONE, contract.amount2Claim());
		assertEquals(BigInteger.ONE,contract.claimInterval());
//		assertEquals(BigInteger.ZERO,contract.currentAmount());
//		assertEquals(BigInteger.ZERO, contract.lastClaimed());
		assertEquals(BigInteger.ZERO, ethereum.getBalance(manager.getManager().contractAddress).inWei());
		assertEquals(sender.getAddress(), contract.owner());
		assertEquals(sender.getAddress(), contract.donator());
		assertEquals(sender.getAddress(),contract.recipient());

		manager.listContract(null);
		System.out.println();
		
	}

	@Test
	public void testListContract() throws IOException, InterruptedException, ExecutionException {
		manager.deployContract();
		String address = manager.getManager().contractAddress.withLeading0x();
		manager.listContract(address);
		System.out.println();
		
	}

	@Test
	public void testDeployContract() throws IOException, InterruptedException, ExecutionException {
		manager.deployContract();
		manager.listContract(null);
		System.out.println();
		
		PocketMoneyContract contract = manager.getManager().contractInstance;
		
		assertEquals(BigInteger.ZERO, contract.amount2Claim());
		assertEquals(BigInteger.ZERO,contract.claimInterval());
		assertEquals(BigInteger.ZERO,contract.currentAmount());
		assertEquals(BigInteger.ZERO, contract.lastClaimed());
		assertEquals(BigInteger.ZERO, ethereum.getBalance(manager.getManager().contractAddress).inWei());
		assertEquals(sender.getAddress(), contract.owner());
		assertEquals(EthAddress.empty(), contract.donator());
		assertEquals(EthAddress.empty(),contract.recipient());

	}

	@Test
	public void testSendWeiToContract() throws Exception {
		manager.deployContract();

		manager.setPoketMoneyContractParameters(BigInteger.ONE, BigInteger.valueOf(10L), sender.getAddress(), sender.getAddress());
		manager.listContract(null);
		System.out.println();
		
		BigInteger amount = BigInteger.valueOf(100000L);
		manager.sendWeiToContract(manager.getManager().contractAddress.withLeading0x(), amount);
		System.out.println();
		
		PocketMoneyContract contract = manager.getManager().contractInstance;
		assertEquals(amount,   contract.currentAmount());
		assertEquals(amount,  ethereum.getBalance(manager.getManager().contractAddress).inWei());
	}
	
	@Test
	public void testClaim() throws Exception {
		testSendWeiToContract();
		EthValue balance = ethereum.getBalance(sender.getAddress());
		manager.claimMoney(manager.getManager().contractAddress.withLeading0x());
		
		EthValue new_balance = ethereum.getBalance(sender.getAddress());
		System.out.println(balance+":"+new_balance);
//		assertEquals(BigDecimal.ZERO, manager.getManager().contractInstance.currentAmount());
	}
	
	@Test
	public void testCommandlineDeploy() throws Exception {
		String[] cl = {"-d","-wca", "ca.txt"};
		PockeMoneyContractManager.main(cl);
		
		File file = new File("ca.txt");
		String ca = IOUtils.toString(new FileInputStream(file), EthereumFacade.CHARSET);

		EthAddress address = EthAddress.of(ca);
		PocketMoneyContract fixture = deployer.createPocketMoneyContractProxy(sender, address);
		
		assertEquals(BigInteger.ZERO, fixture.amount2Claim());
		assertEquals(BigInteger.ZERO,fixture.claimInterval());
		assertEquals(BigInteger.ZERO,fixture.currentAmount());
		assertEquals(BigInteger.ZERO, fixture.lastClaimed());
		assertEquals(BigInteger.ZERO, ethereum.getBalance(address).inWei());
		assertEquals(sender.getAddress(), fixture.owner());
		assertEquals(EthAddress.empty(), fixture.donator());
		assertEquals(EthAddress.empty(),fixture.recipient());
	}
	
	@Test
	public void testCommandlineList() throws Exception {
		testCommandlineDeploy();
		File file = new File("ca.txt");
		String ca = IOUtils.toString(new FileInputStream(file), EthereumFacade.CHARSET);

		String[] cl = {"-l",ca};
		PockeMoneyContractManager.main(cl);
	}

	@Test
	public void testCommandlineSet() throws Exception {
		testCommandlineDeploy();
		File file = new File("ca.txt");
		String ca = IOUtils.toString(new FileInputStream(file), EthereumFacade.CHARSET);

		String[] cl = {"-s","10","100",sender.getAddress().withLeading0x(),sender.getAddress().withLeading0x(),ca};
		PockeMoneyContractManager.main(cl);
		EthAddress address = EthAddress.of(ca);
		PocketMoneyContract fixture = deployer.createPocketMoneyContractProxy(sender, address);
		
		assertEquals(BigInteger.valueOf(10L), fixture.amount2Claim());
		assertEquals(BigInteger.valueOf(100L),fixture.claimInterval());
		assertEquals(BigInteger.ZERO,fixture.currentAmount());
		assertEquals(BigInteger.ZERO, fixture.lastClaimed());
		assertEquals(BigInteger.ZERO, ethereum.getBalance(address).inWei());
		assertEquals(sender.getAddress(), fixture.owner());
		assertEquals(sender.getAddress(), fixture.donator());
		assertEquals(sender.getAddress(),fixture.recipient());
	}

	@Test
	public void testCommandlinePay() throws Exception {
		testCommandlineSet();
		
		File file = new File("ca.txt");
		String ca = IOUtils.toString(new FileInputStream(file), EthereumFacade.CHARSET);

		String[] cl = {"-p",ca,"10000"};
		PockeMoneyContractManager.main(cl);
		EthAddress address = EthAddress.of(ca);
		PocketMoneyContract fixture = deployer.createPocketMoneyContractProxy(sender, address);

		EthValue ether = EthValue.wei(10000);
		
		assertEquals(ether.inWei(), fixture.currentAmount());
		assertEquals(ether.inWei(), ethereum.getBalance(address).inWei());
		assertNotEquals(BigInteger.ZERO, fixture.lastClaimed());
	}
	
	@Test
	public void testPrintHelp() throws Exception {
		String[] cl = {"-h"};
		PockeMoneyContractManager.main(cl);
	}
	
	@Override
	protected String getContractName() {
		return "";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "";
	}

}

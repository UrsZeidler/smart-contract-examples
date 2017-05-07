package de.urszeidler.ethereum.smartcontracts.pockeMoneyContract;

import static org.junit.Assert.*;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.EthValue;
import org.junit.Before;
import org.junit.Test;

import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.PockeMoneyContractManager;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts.PocketMoneyContract;

public class PockeMoneyContractManagerTest extends AbstractContractTest {

	private PockeMoneyContractManager manager;

	@Before
	public void setUp() throws Exception {
		initTest();
		
		manager = new PockeMoneyContractManager();
		manager.setSender(sender);
		manager.setEthereum(ethereum);

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
	
//	@Test
//	public void testPrintHelp() throws Exception {
//		String[] cl = {"-h"};
//		PockeMoneyContractManager.main(cl);
//	}
	
	@Override
	protected String getContractName() {
		return "";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "";
	}

}

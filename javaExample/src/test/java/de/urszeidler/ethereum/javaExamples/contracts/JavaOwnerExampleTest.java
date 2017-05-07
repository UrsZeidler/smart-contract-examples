package de.urszeidler.ethereum.javaExamples.contracts;

// Start of user code JavaOwnerExampleTest.customImports
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import java.io.File;
import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.Test;

import de.urszeidler.ethereum.javaExamples.AbstractContractTest;
import de.urszeidler.ethereum.javaExamples.deployer.ContractsDeployer;

// End of user code


/**
 * Test for the JavaOwnerExample contract.
 *
 */
public class JavaOwnerExampleTest extends AbstractContractTest{

 
	private JavaOwnerExample fixture;
	// Start of user code JavaOwnerExampleTest.attributes
	private EthAccount testAccount = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
	private ContractsDeployer deployer;
	// End of user code

	@Override
	protected String getContractName() {
		return "JavaOwnerExample";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "contracts.sol:JavaOwnerExample";
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
        deployer = new ContractsDeployer(ethereum);
		createFixture();
		//End of user code
	}


	/**
	 * Create a new fixture by deploying the contract source.
	 * @throws Exception
	 */
	protected void createFixture() throws Exception {
		//Start of user code createFixture
		CompiledContract compiledContract = getCompiledContract("/contracts/combined.json");
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, JavaOwnerExample.class));
		//End of user code
	}

	protected void setFixture(JavaOwnerExample f) {
		this.fixture = f;
	}


	//Start of user code customTests   
	
	@Test
	public void testConstructor() throws Exception {
		assertEquals(senderAddress, fixture.owner());
	}
	
	@Test
	public void testChangeOwner() throws Exception {
		assertEquals(senderAddress, fixture.owner());
		fixture.setOwner(testAccount.getAddress()).get();
		assertEquals(testAccount.getAddress(), fixture.owner());
		
		try {
			fixture.setOwner(sender.getAddress()).get();
			fail("not allowed to change the owner");
		} catch (Exception e) {
		}
		//now we access the contract with another account, the new owner
		JavaOwnerExample testAccountFixture = deployer.createJavaOwnerExampleProxy(testAccount, fixtureAddress);
		testAccountFixture.setOwner(senderAddress).get();
		assertEquals(senderAddress, fixture.owner());
		
		try {
			testAccountFixture.setOwner(testAccount.getAddress()).get();
			fail("not allowed to change the owner");
		} catch (Exception e) {
		}
	}
	//End of user code
}

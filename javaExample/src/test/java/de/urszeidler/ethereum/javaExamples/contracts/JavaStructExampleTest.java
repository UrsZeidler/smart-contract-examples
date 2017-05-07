package de.urszeidler.ethereum.javaExamples.contracts;

// Start of user code JavaStructExampleTest.customImports
import static org.junit.Assert.assertEquals;

import java.io.File;
import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.junit.Before;
import org.junit.Test;

import de.urszeidler.ethereum.javaExamples.AbstractContractTest;

// End of user code


/**
 * Test for the JavaStructExample contract.
 *
 */
public class JavaStructExampleTest extends AbstractContractTest{

 
	private JavaStructExample fixture;
	// Start of user code JavaStructExampleTest.attributes

	// End of user code

	@Override
	protected String getContractName() {
		return "JavaStructExample";
	}

	@Override
	protected String getQuallifiedContractName() {
		return "contracts.sol:JavaStructExample";
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
		CompiledContract compiledContract = getCompiledContract("/contracts/combined.json");
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
		assertEquals(0, fixture.structCount().intValue());
		fixture.addStruct(1, "Test").get();
		
		assertEquals(1, fixture.structCount().intValue());
		
		
		JavaStructExampleTestStruct testStructs = fixture.testStructs(0);
		assertEquals(1, testStructs.getAttribute1().intValue());
		assertEquals("Test", testStructs.getAttribute2());
		
		JavaStructExampleTestStruct lastStruct = fixture.lastStruct();
		assertEquals(testStructs, lastStruct);
		//End of user code
	}
	/**
	 * Test method for  addStruct1(String _text).
	 * see {@link JavaStructExample#addStruct1( String)}
	 * @throws Exception
	 */
	@Test
	public void testAddStruct1_string() throws Exception {
		//Start of user code testAddStruct1_string
		assertEquals(0, fixture.structCount1().intValue());
		String text= "test2";
		fixture.addStruct1(text).get();
		assertEquals(1, fixture.structCount1().intValue());
		JavaStructExampleTestStruct1 testStructs1 = fixture.testStructs1(0);
		assertEquals(text, testStructs1.getText());
		assertEquals(senderAddress, testStructs1.getSender());
		
		System.out.println(testStructs1);
		
		//assertEquals(1, fixture.s);
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}

## java generation example

This is a simple example how to model and use the generated java code of [uml2solidity](https://github.com/UrsZeidler/uml2solidity) the java code uses the [eth-contract-api](https://github.com/adridadou/eth-contract-api) to access the contract code.

The _de.urszeidler.ethereum.javaExamples.contracts_ package contains the generated interfaces and the tests describes how to use them.

Lookup the [interfaces](https://github.com/UrsZeidler/smart-contract-examples/tree/master/javaExample/src/main/java/de/urszeidler/ethereum/javaExamples/contracts) and the [test code](https://github.com/UrsZeidler/smart-contract-examples/tree/master/javaExample/src/test/java/de/urszeidler/ethereum/javaExamples/contracts) in the repository.
 
The model to generate the code looks like this:

 ![](https://github.com/UrsZeidler/smart-contract-examples/blob/master/javaExample/doc/ClassDiagram.PNG)
 
### ContractExample

Contains the basic features of a smart contract like fields enums and modifiers.

The contract code:

```javascript
contract ContractExample {
    enum ContractState { state1,state2,state3 }

	string public text;
	uint public number;
	bool public locked;
	address public creator;
	ContractState public contractState;
	// Start of user code ContractExample.attributes
	//TODO: implement
	// End of user code
	
	modifier testmodifier
	{
	    if(locked) throw;
	    _;
	}
	
	modifier stateModifier(ContractState _state)
	{
	    if(_state!=contractState) throw;
	    _;
	}
	
	
	function ContractExample(string _text) public   {
		//Start of user code ContractExample.constructor.ContractExample_string
		text = _text;
		number = 10;
		creator = msg.sender;
		locked = true;
		//End of user code
	}
	
	
	
	function contractData() public   constant returns (string _text,address _owner,uint _number,bool _locked) {
		//Start of user code ContractExample.function.contractData
		return (text,creator,number,locked);
		//End of user code
	}
	
	
	
	function changeLocked(bool _locked) public   {
		//Start of user code ContractExample.function.changeLocked_bool
		locked = _locked;
		//End of user code
	}
	
	
	
	function changeState(ContractState _state) public   {
		//Start of user code ContractExample.function.changeState_ContractState
		contractState = _state;
		//End of user code
	}
	
	
	
	function isInState() public  stateModifier(ContractState.state1)  {
		//Start of user code ContractExample.function.isInState
		text = "inState1";
		//End of user code
	}
	
	
	
	function throwIfLocked() public  testmodifier  {
		//Start of user code ContractExample.function.throwIfLocked
		text = "not Locked";
		//End of user code
	}
	
	// getNumber getter for the field number
	function getNumber() constant returns(uint) {
		return number;
	}
	// setNumber setter for the field number
	function setNumber (uint aNumber) {
		number = aNumber;
	}
	
	// Start of user code ContractExample.operations
	//TODO: implement
	// End of user code
}
```

Leads to the following java interface:

```java         
public interface ContractExample{
    enum ContractState { state1,state2,state3 }
	
	String text();
	
	Integer number();
	
	Boolean locked();
	
	org.adridadou.ethereum.values.EthAddress creator();
	
	ContractState contractState();

	
	ReturnContractData_string_address_uint_bool contractData();
	
	java.util.concurrent.CompletableFuture<Void> changeLocked(Boolean _locked);
	
	java.util.concurrent.CompletableFuture<Void> changeState(ContractState _state);
	
	java.util.concurrent.CompletableFuture<Void> isInState();
	
	java.util.concurrent.CompletableFuture<Void> throwIfLocked();

	Integer getNumber();

	java.util.concurrent.CompletableFuture<Void> setNumber (Integer aNumber);

	//Start of user code additional_methods

	//End of user code
}
```
 
To see how to use the interface take a look at the junit tests:

```java    
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
```  
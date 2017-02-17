## java generation example

This is a simple example how to model and use the generated java code of [uml2solidity](https://github.com/UrsZeidler/uml2solidity) the java code uses the [eth-contract-api](https://github.com/adridadou/eth-contract-api) to access the contract code. A detailed description for the generated code is [here](https://github.com/UrsZeidler/uml2solidity/wiki/JavaCode).

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


### JavaStructExample

```javascript
contract JavaStructExample {
    
    struct TestStruct {
    	uint attribute1;
    	string attribute2;
    }

	uint public structCount;
	mapping (uint=>TestStruct)public testStructs;
	// Start of user code JavaStructExample.attributes
	//TODO: implement
	// End of user code
	
	
	
	function addStruct(uint _a1,string _a2) public   {
		//Start of user code JavaStructExample.function.addStruct_uint_string
		testStructs[structCount].attribute1 = _a1;
		testStructs[structCount].attribute2 = _a2;
		structCount++;
		//End of user code
	}
	
	// Start of user code JavaStructExample.operations
	//TODO: implement
	// End of user code
}
```  

```java 
public interface JavaStructExample{
	
	Integer structCount();

	
	java.util.concurrent.CompletableFuture<Void> addStruct(Integer _a1,String _a2);

	//Start of user code additional_methods
	StructTest testStructs(Integer id);
	//End of user code
}
``` 

and can be used like this:

```java 
/**
 * Test for the JavaStructExample contract.
 *
 */
public class JavaStructExampleTest extends AbstractContractTest{

	private JavaStructExample fixture;
	// Start of user code JavaStructExampleTest.attributes
	//TODO: add custom attributes

	// End of user code

	@Override
	protected String getContractName() {
		return "JavaStructExample";
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
		fixture.addStruct(1, "Test").get();
		
		assertEquals(1, fixture.structCount().intValue());
		
		
		StructTest testStructs = fixture.testStructs(0);
		assertEquals(1, testStructs._a1.intValue());
		assertEquals("Test", testStructs._a2);
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
``` 

### JavaStructExample

```javascript
contract JavaEventExample {

	uint public eventCount;
	// Start of user code JavaEventExample.attributes
	//TODO: implement
	// End of user code
	
	
	event Event1(string text,uint index);
	
	
	
	function raiseEvent(string _text) public   {
		//Start of user code JavaEventExample.function.raiseEvent_string
		Event1(_text,eventCount);
		eventCount++;
		//End of user code
	}
	
	// Start of user code JavaEventExample.operations
	//TODO: implement
	// End of user code
}


contract JavaEventExample1 is JavaEventExample {

	// Start of user code JavaEventExample1.attributes
	//TODO: implement
	// End of user code
	
	
	event Event2();
	
	
	
	function raiseEvent2() public   {
		//Start of user code JavaEventExample1.function.raiseEvent2
		Event1("test1",1);
		Event2();
		//End of user code
	}
	
	// Start of user code JavaEventExample1.operations
	//TODO: implement
	// End of user code
}
``` 

```java 
public interface JavaEventExample{
	
	Integer eventCount();

	
	java.util.concurrent.CompletableFuture<Void> raiseEvent(String _text);

	//Start of user code additional_methods

	//End of user code
}
```
and 

```java 
public interface JavaEventExample1 extends JavaEventExample{

	
	java.util.concurrent.CompletableFuture<Void> raiseEvent2();

	//Start of user code additional_methods

	//End of user code
}
```

```java 
/**
 * Test for the JavaEventExample contract.
 *
 */
public class JavaEventExampleTest extends AbstractContractTest{

	private JavaEventExample fixture;
	// Start of user code JavaEventExampleTest.attributes
	protected ContractsDeployer deployer;
	//TODO: add custom attributes

	// End of user code

	@Override
	protected String getContractName() {
		return "JavaEventExample";
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		
		deployer = new ContractsDeployer(ethereum);
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
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, JavaEventExample.class));
		//End of user code
	}

	protected void setFixture(JavaEventExample f) {
		this.fixture = f;
	}


	/**
	 * Test method for  raiseEvent(String _text).
	 * see {@link JavaEventExample#raiseEvent( String)}
	 * @throws Exception
	 */
	@Test
	public void testRaiseEvent_string() throws Exception {
		//Start of user code testRaiseEvent_string
		if(supportEvents()){
			deployer.observeEventEvent1_string_uint(fixtureAddress).subscribe(it->assertEquals("testEvent", it.getText()));
			
			//System.out.println("Event1 raised"+it.getText()+it.getIndex()));
		}
		
		fixture.raiseEvent("testEvent").get();
		assertEquals(1, fixture.eventCount().intValue());
		
		
		
		//End of user code
	}
	//Start of user code customTests    
	protected boolean supportEvents() {
		String property = System.getProperty("EthereumFacadeProvider");
		return "private".equals(property);
	}
	//End of user code
}
```

```java
/**
 * Test for the JavaEventExample1 contract.
 *
 */
public class JavaEventExample1Test extends JavaEventExampleTest{

	private JavaEventExample1 fixture;
	// Start of user code JavaEventExample1Test.attributes
	//TODO: add custom attributes

	// End of user code

	@Override
	protected String getContractName() {
		return "JavaEventExample1";
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
		deployer = new ContractsDeployer(ethereum);
		CompiledContract compiledContract = getCompiledContract();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
        fixtureAddress = address.get();
		setFixture(ethereum.createContractProxy(compiledContract, fixtureAddress, sender, JavaEventExample1.class));
		//End of user code
	}

	protected void setFixture(JavaEventExample1 f) {
		this.fixture = f;
		super.setFixture(f);
	}


	/**
	 * Test method for  raiseEvent2().
	 * see {@link JavaEventExample1#raiseEvent2()}
	 * @throws Exception
	 */
	@Test
	public void testRaiseEvent2() throws Exception {
		//Start of user code testRaiseEvent2
		if(supportEvents()){
			deployer.observeEventEvent1_string_uint(fixtureAddress).subscribe(it-> assertEquals("testEvent2", it.getText()));
			
//			System.out.println("Event1 raised"+it.getText()+it.getIndex()));
			deployer.observeEventEvent2(fixtureAddress).subscribe(new Subscriber<EventEvent2>() {

				@Override
				public void onCompleted() {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onError(Throwable arg0) {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void onNext(EventEvent2 arg0) {
					System.out.println("Event2:"+arg0);
				}
			});
		}

		System.out.println("Raise Event");
		
		fixture.raiseEvent("testEvent1").get();
		assertEquals(1, fixture.eventCount().intValue());
		
		fixture.raiseEvent2().get();
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
```
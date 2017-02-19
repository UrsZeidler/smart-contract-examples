## java generation example

This is a simple example how to model and use the generated java code of [uml2solidity](https://github.com/UrsZeidler/uml2solidity). The java code uses the [eth-contract-api](https://github.com/adridadou/eth-contract-api) to access the smart contract on the blockchain. A detailed description for the generated code is [here](https://github.com/UrsZeidler/uml2solidity/wiki/JavaCode).

The _de.urszeidler.ethereum.javaExamples.contracts_ package contains the generated interfaces and the tests describes how to use them.

Lookup the [interfaces](https://github.com/UrsZeidler/smart-contract-examples/tree/master/javaExample/src/main/java/de/urszeidler/ethereum/javaExamples/contracts) the [tests](https://github.com/UrsZeidler/smart-contract-examples/tree/master/javaExample/src/test/java/de/urszeidler/ethereum/javaExamples/contracts) and the [solidity code](https://github.com/UrsZeidler/smart-contract-examples/blob/master/javaExample/src/main/resources/contracts/contracts.sol) in the repository.

#### toc

* [ContractExample](https://github.com/UrsZeidler/smart-contract-examples/tree/master/javaExample#contractexample)
* [JavaStructExample](https://github.com/UrsZeidler/smart-contract-examples/tree/master/javaExample#javastructexample)
* [JavaEventExample](https://github.com/UrsZeidler/smart-contract-examples/tree/master/javaExample#javaeventexample)
* [JavaPayableExample](https://github.com/UrsZeidler/smart-contract-examples/tree/master/javaExample#javapayableexample)
 
The model to generate the code looks like this:

 ![](https://github.com/UrsZeidler/smart-contract-examples/blob/master/javaExample/doc/ClassDiagram.PNG)


 
### ContractExample

Contains the basic features of a smart contract like fields enums and modifiers.

The contract code:

```javascript
/*
* Shows the basic features.
*/
contract ContractExample {
    enum ContractState { state1,state2,state3 }

	string public text;
	uint public number;
	bool public locked;
	address public creator;
	ContractState public contractState;
	// Start of user code ContractExample.attributes
	// End of user code
	
	modifier stateModifier(ContractState _state)
	{
	    if(_state!=contractState) throw;
	    _;
	}
	
	modifier testmodifier
	{
	    if(locked) throw;
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
	
	
	/*
	* Example for multiple return values.
	* returns
	* _text -
	* _owner -
	* _number -
	* _locked -
	*/
	function contractData() public   constant returns (string _text,address _owner,uint _number,bool _locked) {
		//Start of user code ContractExample.function.contractData
		return (text,creator,number,locked);
		//End of user code
	}
	
	
	/*
	* Change the intern sate of the contract.
	* 
	* _locked -
	*/
	function changeLocked(bool _locked) public   {
		//Start of user code ContractExample.function.changeLocked_bool
		locked = _locked;
		//End of user code
	}
	
	
	/*
	* Change the state, also an example for emum as parameter.
	* 
	* _state -
	*/
	function changeState(ContractState _state) public   {
		//Start of user code ContractExample.function.changeState_ContractState
		contractState = _state;
		//End of user code
	}
	
	
	/*
	* Test method for the 'stateModifier' throws if contractState!=ContractState.state1.
	*/
	function isInState() public  stateModifier(ContractState.state1)  {
		//Start of user code ContractExample.function.isInState
		text = "inState1";
		//End of user code
	}
	
	
	/*
	* Test method for the testmodifer. Throws if locked.
	*/
	function throwIfLocked() public  testmodifier  {
		//Start of user code ContractExample.function.throwIfLocked
		text = "not Locked";
		//End of user code
	}
	
	
	
	function returnStateChange() public  returns (address _creator,uint _time) {
		//Start of user code ContractExample.function.returnStateChange
		locked = !locked;
		_creator = creator;
		_time = block.number;
		//End of user code
	}
	
	
	/*
	* A const function return a single value.
	* returns
	* _text -
	*/
	function returnLast() public   constant returns (string _text) {
		//Start of user code ContractExample.function.returnLast
		return text;
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
	// End of user code
}
```

Leads to the following java interface:

```java         
/**
* Shows the basic features.
**/
public interface ContractExample{
    enum ContractState { state1,state2,state3 }
	
	String text();
	/**
	* An attribute which uses getter/setter.
	**/
	Integer number();
	
	Boolean locked();
	
	org.adridadou.ethereum.values.EthAddress creator();
	
	ContractState contractState();

	/**
	* Example for multiple return values.
	* @return
	* _text -
	* _owner -
	* _number -
	* _locked -
	**/
	ReturnContractData_string_address_uint_bool contractData();
	/**
	* Change the intern sate of the contract.
	* 
	* @param _locked -
	**/
	java.util.concurrent.CompletableFuture<Void> changeLocked(Boolean _locked);
	/**
	* Change the state, also an example for emum as parameter.
	* 
	* @param _state -
	**/
	java.util.concurrent.CompletableFuture<Void> changeState(ContractState _state);
	/**
	* Test method for the 'stateModifier' throws if contractState!=ContractState.state1.
	**/
	java.util.concurrent.CompletableFuture<Void> isInState();
	/**
	* Test method for the testmodifer. Throws if locked.
	**/
	java.util.concurrent.CompletableFuture<Void> throwIfLocked();
	
	java.util.concurrent.CompletableFuture<ReturnReturnStateChange_address_uint> returnStateChange();
	/**
	* A const function return a single value.
	* @return
	* _text -
	**/
	String returnLast();

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
		//you could also use the precompiled json
		CompiledContract compiledContract = getCompiledContract("/contracts/combined.json");
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
		// can be called when in state1
		fixture.isInState().get();
		assertEquals(ContractState.state1, fixture.contractState());
		// now we change the state to state2 and expect an exception when calling isInState
		fixture.changeState(ContractState.state2).get();
		try {
			fixture.isInState().get();
			fail("The stateModifier need to throw when not in state1.");
		} catch (Exception e) {
		}
		// after changing back to state1 we can call isInState
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
	/**
	 * Test method for  returnStateChange().
	 * see {@link ContractExample#returnStateChange()}
	 * @throws Exception
	 */
	@Test
	public void testReturnStateChange() throws Exception {
		//Start of user code testReturnStateChange
		Boolean locked = fixture.locked();
		//TODO: need to investigate
		
//		ReturnReturnStateChange_address_uint stateChange = fixture.returnStateChange().get();
//		assertTrue(locked!=fixture.locked());
//		assertEquals(senderAddress, stateChange.get_creator());
//		System.out.println(stateChange);
		//End of user code
	}
	/**
	 * Test method for  returnLast().
	 * see {@link ContractExample#returnLast()}
	 * @throws Exception
	 */
	@Test
	public void testReturnLast() throws Exception {
		//Start of user code testReturnLast
		//simple example for a const return function
		fixture.isInState().get();
		assertEquals("inState1", fixture.returnLast());
		//End of user code
	}
	//Start of user code customTests
	// End of user code
}
```  


### JavaStructExample

The java struct example shows how to use structs in the java code.

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

### JavaEventExample

The event examples show how to subscribe to events and how to receive them. Note that not all of the blockchain implementations supports events.

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
The corresponding java interface:

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

And the test code :
Note to subscribe with a smart contract event we use the generated `ContractsDeployer´.

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

....

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
Note that the JavaEventExample1Test extends the JavaEventExampleTest.

```java
/**
 * Test for the JavaEventExample1 contract.
 *
 */
public class JavaEventExample1Test extends JavaEventExampleTest{

....

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

### JavaPayableExample

The payable examples shows how to send ether to a contract. Note that the payable modifier comes from the imported solidity type model and is not modeled in our model. 

```javascript
contract JavaPayableExample {

	mapping (address=>uint256)public amounts;
	// Start of user code JavaPayableExample.attributes
	// End of user code
	
	
	
	function sendBack() public   {
		//Start of user code JavaPayableExample.function.sendBack
		uint a = amounts[msg.sender];
		amounts[msg.sender] = 0;
		msg.sender.send(a);
		//End of user code
	}
	
	
	
	function recieve() public  payable  {
		//Start of user code JavaPayableExample.function.recieve
		amounts[msg.sender] += msg.value;
		
		//End of user code
	}
	
	// Start of user code JavaPayableExample.operations
	//TODO: implement
	// End of user code
}
```

The corresponding interface need to return a Payable.

```java
public interface JavaPayableExample{
	
	java.math.BigInteger amounts(org.adridadou.ethereum.values.EthAddress key);

	
	java.util.concurrent.CompletableFuture<Void> sendBack();
	
	Payable<Void> recieve();

	//Start of user code additional_methods

	//End of user code
}
```
And the test shows how to use the Payable:

```java
/**
 * Test for the JavaPayableExample contract.
 *
 */
public class JavaPayableExampleTest extends AbstractContractTest{

....

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
		fixture.recieve().with(value).get();
		EthValue balance = ethereum.getBalance(fixtureAddress);
		assertEquals(value,balance);
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}
```


package de.urszeidler.ethereum.contracts;

import static org.junit.Assert.*;


import de.urszeidler.ethereum.contracts.Library.*;


import java.io.File;
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;
import java.math.*;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.keystore.*;
import org.adridadou.ethereum.provider.MainEthereumFacadeProvider;
import org.adridadou.ethereum.provider.RopstenEthereumFacadeProvider;
import org.adridadou.ethereum.provider.GenericRpcEthereumFacadeProvider;
import org.adridadou.ethereum.provider.StandaloneEthereumFacadeProvider;
import org.adridadou.ethereum.provider.TestnetEthereumFacadeProvider;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.adridadou.ethereum.values.config.ChainId;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import de.urszeidler.ethereum.EthereumInstance;

/**
 * Test for the Library contract.
 *
 */
public class LibraryTest{
	private static EthereumFacade ethereum;
	private static EthAccount sender;

	private Library fixture;
	private EthAddress fixtureAddress;
	private SoliditySource contractSource;
	// Start of user code LibraryTest.attributes
	private EthAccount employeeAccount = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L)));
	private String employeeAddress = employeeAccount.getAddress().withLeading0x();
	private EthAccount userAccount = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100002L)));
	private String userAddress = userAccount.getAddress().withLeading0x();
	private EthAccount userAccount1 = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100003L)));
	private String userAddress1 = userAccount1.getAddress().withLeading0x();
	private EthAccount userAccount2 = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100004L)));
	private String userAddress2 = userAccount2.getAddress().withLeading0x();
	//in the BlockchainProxyTest the sender address is hard coded
	private String senderAddressS = "5db10750e8caff27f906b41c71b3471057dd2004";
	private EthAddress senderAddress = EthAddress.of(senderAddressS);
	// End of user code

	/**
	 * Setup up the blockchain. Add the 'EthereumFacadeProvider' property to use 
	 * another block chain implemenation or network.
	 */
	@BeforeClass
	public static void setup() {
		ethereum = EthereumInstance.getInstance().getEthereum();

	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest
		
		String property = System.getProperty("EthereumFacadeProvider");
		if(property!=null){
			if (property.equalsIgnoreCase("main")) {

			}else if (property.equalsIgnoreCase("test")) {

			}else if (property.equalsIgnoreCase("rpc")|| property.equalsIgnoreCase("ropsten") || property.equalsIgnoreCase("InfuraRopsten")) {
				SecureKey key2 = new FileSecureKey(new File("/home/urs/.ethereum/testnet/keystore/UTC--2015-12-15T13-55-38.006995319Z--ba7b29b63c00dff8614f8d8a6bf34e94e853b2d3"));
				EthAccount decode = key2.decode("n");
				sender = decode;
				senderAddressS = sender.getAddress().withLeading0x();
				System.out.println(senderAddressS+"->"+ethereum.getBalance(decode));
				

			}else if (property.equalsIgnoreCase("private")){
				EthAccount user = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L)));
				userAddress = user.getAddress().withLeading0x();
	
				
				sender = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
				senderAddressS = sender.getAddress().withLeading0x();
			}
		}
//		SecureKey key2 = new FileSecureKey(new File("/home/urs/.ethereum/testnet/keystore/UTC--2015-12-15T13-55-38.006995319Z--ba7b29b63c00dff8614f8d8a6bf34e94e853b2d3"));
//		EthAccount decode = key2.decode("n");
//		sender = decode;
//		System.out.println("amoun: "+ethereum.getBalance(sender));
		
		//sender = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
		
//		senderAddressS = sender.getAddress().withLeading0x();
//		senderAddress = sender.getAddress();
		
		
        File contractSrc = new File(this.getClass().getResource("/mix/contracts.sol").toURI());
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
        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Library", sender);
        fixtureAddress = address.get();
        fixture = ethereum
                .createContractProxy(contractSource, "Library", address.get(), sender, Library.class);
		//End of user code
	}

	protected void setFixture(Library f) {
		this.fixture = f;
	}


	/**
	 * Test the constructor for the Library contract.
	 * @throws Exception
	 */
	@Test
	public void testConstructor() throws Exception {
		//Start of user code testConstructor

        CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Library", sender
				);
        fixture = ethereum
                .createContractProxy(contractSource, "Library", address.get(), sender, Library.class);

		assertEquals(0, fixture.activeBooksCount().intValue());
		assertEquals(0, fixture.activeUserCount().intValue());
		assertEquals(0, fixture.bookCount().intValue());
		assertEquals(1, fixture.managerCount().intValue());
		
		assertTrue(fixture.managers(senderAddress));
//		System.out.println(fixture.owner());
		//End of user code
	}


	/**
	 * Test method for  registerManager(org.adridadou.ethereum.values.EthAddress _address).
	 * see {@link Library#registerManager( org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testRegisterManager_address() throws Exception {
		//Start of user code testRegisterManager_address
		assertEquals(1, fixture.managerCount().intValue());
		String address = "0x01";
//		fixture.registerManager(EthAddress.of(address));
//		ethereum.events().observeBlocks().doOnCompleted(new Action0(
//				) {
//			
//			public void call() {
//				System.out.println("--->");
//				
//			}
//		});
		fixture.registerManager(userAccount1.getAddress());
//		registerManager.thenAccept(new Consumer<Void>() {
//
//			public void accept(Void t) {
//				System.out.println("Manager called");
//				ethereum.events().observeBlocks().subscribe(new Action1<OnBlockParameters>() {
//
//					public void call(OnBlockParameters t) {
//						System.out.println("block:"+t);//8I1BRqsyU7ZCOyGT4TNi
//						
//					}
//				});
//				
//			}
//		});
		System.out.println(fixture.managerCount().intValue());

		
//		System.out.println(fixture.managerCount().intValue());
//		Thread.sleep(2000L);
//		System.out.println(fixture.managerCount().intValue());
//		Thread.sleep(2000L);
//		System.out.println(fixture.managerCount().intValue());
//		Thread.sleep(2000L);
//		System.out.println(fixture.managerCount().intValue());
//		Thread.sleep(2000L);
//		System.out.println(fixture.managerCount().intValue());
//		Thread.sleep(2000L);
//		System.out.println(fixture.managerCount().intValue());
//		Thread.sleep(2000L);
//		System.out.println(fixture.managerCount().intValue());
//		Thread.sleep(2000L);
//		System.out.println(fixture.managerCount().intValue());
//		Thread.sleep(2000L);
//		System.out.println(fixture.managerCount().intValue());
//		Thread.sleep(2000L);
//		System.out.println(fixture.managerCount().intValue());
//		Thread.sleep(2000L);
//		System.out.println(fixture.managerCount().intValue());
//		Thread.sleep(2000L);
		
		assertEquals(2, fixture.managerCount().intValue());
		
		//End of user code
	}
	/**
	 * Test method for  unregisterManager(org.adridadou.ethereum.values.EthAddress _address).
	 * see {@link Library#unregisterManager( org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testUnregisterManager_address() throws Exception {
		//Start of user code testUnregisterManager_address
		assertEquals(1, fixture.managerCount().intValue());
//		EthAddress address = EthAddress.of("0x01");
		String address = "0x01";
		fixture.registerManager(userAccount1.getAddress());
		
		assertEquals(2, fixture.managerCount().intValue());
		fixture.unregisterManager(userAccount1.getAddress());
		assertEquals(1, fixture.managerCount().intValue());
		
		//End of user code
	}
	/**
	 * Test method for  registerEmployee(org.adridadou.ethereum.values.EthAddress _address).
	 * see {@link Library#registerEmployee( org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testRegisterEmployee_address() throws Exception {
		//Start of user code testRegisterEmployee_address
		assertEquals(0, fixture.employeeCount().intValue());
		assertFalse(fixture.employees(employeeAccount.getAddress()));
		fixture.registerEmployee(employeeAccount.getAddress());
		
		assertTrue(fixture.employees(employeeAccount.getAddress()));
		
		assertEquals(1, fixture.employeeCount().intValue());
		
		assertFalse(fixture.employees(senderAddress));
		fixture.registerEmployee(senderAddress);
		assertEquals(2, fixture.employeeCount().intValue());

		//End of user code
	}
	/**
	 * Test method for  unregisterEmployee(org.adridadou.ethereum.values.EthAddress _address).
	 * see {@link Library#unregisterEmployee( org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testUnregisterEmployee_address() throws Exception {
		//Start of user code testUnregisterEmployee_address
		assertEquals(0, fixture.employeeCount().intValue());
		EthAddress address = userAccount1.getAddress();
		assertFalse(fixture.employees(address));
		fixture.registerEmployee(address);
		
		assertEquals(1, fixture.employeeCount().intValue());
		assertTrue(fixture.employees(address));
		
		fixture.unregisterEmployee(address);
		fixture.unregisterEmployee(address);
		assertFalse(fixture.employees(address));
		assertEquals(0, fixture.employeeCount().intValue());

		//End of user code
	}
	/**
	 * Test method for  registerUser(org.adridadou.ethereum.values.EthAddress _address,String _name).
	 * see {@link Library#registerUser( org.adridadou.ethereum.values.EthAddress, String)}
	 * @throws Exception
	 */
	@Test
	public void testRegisterUser_address_string() throws Exception {
		//Start of user code testRegisterUser_address_string
		System.out.println("register user 1 and 2");
		Integer usersAdresses = fixture.usersAdresses(userAccount.getAddress());
		System.out.println("id:"+usersAdresses);
		
		
		assertFalse(fixture.employees(senderAddress));		
		fixture.registerEmployee(senderAddress);
		assertTrue(fixture.employees(senderAddress));
		assertEquals(1, fixture.employeeCount().intValue());
		
		assertEquals(0, fixture.activeUserCount().intValue());		
		assertEquals(1, fixture.userCount().intValue());
//		EthAccount ethAccount = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(1001L)));
//		userAddress = ethAccount.getAddress().withLeading0x();
		fixture.registerUser(userAccount.getAddress(), "Testuser1");
			
		System.out.println(userAddress+" ->"+ fixture.usersAdresses(userAccount.getAddress()));
		
		assertEquals(1, fixture.activeUserCount().intValue());	
//		EthAccount ethAccount1 = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(1002L)));
//		String address1 = ethAccount1.getAddress().withLeading0x();
		fixture.registerUser(userAccount1.getAddress(), "Testuser2");
		System.out.println(userAddress1+" ->"+ fixture.usersAdresses(userAccount.getAddress()));
		
		assertEquals(2, fixture.activeUserCount().intValue());		
		assertEquals(3, fixture.userCount().intValue());
		
		System.out.println("user0: "+fixture.getUserName(0));
		System.out.println("user1: "+fixture.getUserName(1));
		//End of user code
	}
	/**
	 * Test method for  unregisterUser(org.adridadou.ethereum.values.EthAddress _address).
	 * see {@link Library#unregisterUser( org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testUnregisterUser_address() throws Exception {
		//Start of user code testUnregisterUser_address
		fixture.registerEmployee(senderAddress);

		assertEquals(0, fixture.activeUserCount().intValue());		
		assertEquals(1, fixture.userCount().intValue());
		fixture.registerUser(userAccount2.getAddress(), "Testuser3");
		
		assertEquals(1, fixture.activeUserCount().intValue());		
		assertEquals(2, fixture.userCount().intValue());
		
		Integer usersAdresses = fixture.usersAdresses(userAccount2.getAddress());
		assertEquals(1, usersAdresses.intValue());
		fixture.unregisterUser(userAccount2.getAddress());
		
		assertEquals(2, fixture.userCount().intValue());
		assertEquals(0, fixture.activeUserCount().intValue());		
		//End of user code
	}
	/**
	 * Test method for  addBook(String _titel).
	 * see {@link Library#addBook( String)}
	 * @throws Exception
	 */
	@Test
	public void testAddBook_string() throws Exception {
		//Start of user code testAddBook_string
		fixture.registerEmployee(senderAddress);

		String _titel = "a Titel";
		assertEquals(0, fixture.bookCount().intValue());
		fixture.addBook(_titel);
		assertEquals(1, fixture.bookCount().intValue());
		assertEquals(1, fixture.activeBooksCount().intValue());
		
		ReturnGetBook_string_Bookstate_address book = fixture.getBook(0);
		assertEquals(_titel, book.getName());
		assertEquals(Bookstate.available, book.getState());
		
		//End of user code
	}
	/**
	 * Test method for  changeBookState(Integer id,Integer _state).
	 * see {@link Library#changeBookState( Integer, Integer)}
	 * @throws Exception
	 */
	@Test
	public void testChangeBookState_uint_uint() throws Exception {
		//Start of user code testChangeBookState_uint_uint
		fixture.registerEmployee(senderAddress);

		assertEquals(0, fixture.bookCount().intValue());
		fixture.addBook("a Titel");
		assertEquals(1, fixture.bookCount().intValue());
		assertEquals(1, fixture.activeBooksCount().intValue());

		fixture.changeBookState(0, 3);
		ReturnGetBook_string_Bookstate_address book = fixture.getBook(0);
		
		assertEquals(Bookstate.disabled, book.getState());		
		assertEquals(0, fixture.activeBooksCount().intValue());
		
		
		//End of user code
	}
	/**
	 * Test method for  borrowBook(Integer id,org.adridadou.ethereum.values.EthAddress _address).
	 * see {@link Library#borrowBook( Integer, org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testBorrowBook_uint_address() throws Exception {
		//Start of user code testBorrowBook_uint_address
		testRegisterUser_address_string();
		String _titel = "a Titel";
		fixture.addBook(_titel);
		fixture.addBook("second book");

		fixture.borrowBook(0, userAccount.getAddress());
		ReturnGetBook_string_Bookstate_address book1 = fixture.getBook(1);
		fixture.borrowBook(1, userAccount.getAddress());
		
		ReturnGetBook_string_Bookstate_address book = fixture.getBook(0);
		//assertEquals(2, book.getState().ordinal());
			System.out.println("Books sate:"+ book);
			System.out.println("Books available:"+ fixture.activeBooksCount());
		
		Integer[] bookForUser = fixture.getBookForUser(1);
		System.out.println("books: "+Arrays.stream(bookForUser).map(i -> i.toString()).collect(Collectors.joining(",")));
		
		System.out.println("user: "+fixture.getUserName(1));
		System.out.println("books borrowed: "+fixture.getBorrowedBooksCount(1));
		//End of user code
	}
	/**
	 * Test method for  returnBook(Integer id,org.adridadou.ethereum.values.EthAddress _address).
	 * see {@link Library#returnBook( Integer, org.adridadou.ethereum.values.EthAddress)}
	 * @throws Exception
	 */
	@Test
	public void testReturnBook_uint_address() throws Exception {
		//Start of user code testReturnBook_uint_address
		testBorrowBook_uint_address();
		fixture.returnBook(0, userAccount.getAddress());
		
		ReturnGetBook_string_Bookstate_address book =fixture.getBook(0);
		assertEquals(Bookstate.available, book.getState());
		
		//End of user code
	}
	/**
	 * Test method for  getBook(Integer _id).
	 * see {@link Library#getBook( Integer)}
	 * @throws Exception
	 */
	@Test
	public void testGetBook_uint() throws Exception {
		//Start of user code testGetBook_uint
		testAddBook_string();
		
		ReturnGetBook_string_Bookstate_address book = fixture.getBook(0);
		assertEquals("a Titel", book.getName());
		
		
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}

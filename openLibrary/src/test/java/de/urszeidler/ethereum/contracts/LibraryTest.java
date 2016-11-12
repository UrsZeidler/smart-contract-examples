package de.urszeidler.ethereum.contracts;

import static org.junit.Assert.*;


import java.io.File;
import java.util.concurrent.CompletableFuture;

import org.adridadou.ethereum.EthAccount;
import org.adridadou.ethereum.EthAddress;
import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.SoliditySource;
import org.adridadou.ethereum.provider.EthereumFacadeProvider;
import org.adridadou.ethereum.provider.MainEthereumFacadeProvider;
import org.adridadou.ethereum.provider.MordenEthereumFacadeProvider;
import org.adridadou.ethereum.provider.RpcEthereumFacadeProvider;
import org.adridadou.ethereum.provider.StandaloneEthereumFacadeProvider;
import org.adridadou.ethereum.provider.TestnetEthereumFacadeProvider;
import org.ethereum.crypto.ECKey;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

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
	private String employeeAddress;
	private String userAddress;
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
		ECKey key = new ECKey();
		sender = new EthAccount(key);
		String property = System.getProperty("EthereumFacadeProvider");
		EthereumFacadeProvider efp = new StandaloneEthereumFacadeProvider();
		if(property!=null){
			if (property.equalsIgnoreCase("main")) {
				efp = new MainEthereumFacadeProvider();
			}else if (property.equalsIgnoreCase("test")) {
				efp = new TestnetEthereumFacadeProvider();
			}else if (property.equalsIgnoreCase("morden")) {
				efp = new MordenEthereumFacadeProvider();
			}else if (property.equalsIgnoreCase("rcp")) {
				RpcEthereumFacadeProvider rcp = new RpcEthereumFacadeProvider();
				String url = System.getProperty("rcp-url");
				ethereum = rcp.create(url);
				return;//as this currently breaks the hierarchy
			}
		}
		
		ethereum = efp.create();//new EthereumFacade(bcProxy);
	}

	/**
	 * Read the contract from the file and deploys the contract code.
	 * @throws Exception
	 */
	@Before
	public void prepareTest() throws Exception {
		//Start of user code prepareTest

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
		
		assertTrue(fixture.managers(senderAddressS));
//		System.out.println(fixture.owner());
		//End of user code
	}


	/**
	 * Test method for  registerManager(String _address).
	 * see {@link Library#registerManager( String)}
	 * @throws Exception
	 */
	@Test
	public void testRegisterManager_address() throws Exception {
		//Start of user code testRegisterManager_address
		assertEquals(1, fixture.managerCount().intValue());
		String address = "0x01";
//		fixture.registerManager(EthAddress.of(address));
		fixture.registerManager(address);
		
		assertEquals(2, fixture.managerCount().intValue());
		
		//End of user code
	}
	/**
	 * Test method for  unregisterManager(String _address).
	 * see {@link Library#unregisterManager( String)}
	 * @throws Exception
	 */
	@Test
	public void testUnregisterManager_address() throws Exception {
		//Start of user code testUnregisterManager_address
		assertEquals(1, fixture.managerCount().intValue());
//		EthAddress address = EthAddress.of("0x01");
		String address = "0x01";
		fixture.registerManager(address);
		
		assertEquals(2, fixture.managerCount().intValue());
		fixture.unregisterManager(address);
		assertEquals(1, fixture.managerCount().intValue());
		
		//End of user code
	}
	/**
	 * Test method for  registerEmployee(String _address).
	 * see {@link Library#registerEmployee( String)}
	 * @throws Exception
	 */
	@Test
	public void testRegisterEmployee_address() throws Exception {
		//Start of user code testRegisterEmployee_address
		assertEquals(0, fixture.employeeCount().intValue());
		employeeAddress = "0x01";
		assertFalse(fixture.employees(employeeAddress));
		fixture.registerEmployee(employeeAddress);
		
		assertTrue(fixture.employees(employeeAddress));
		
		assertEquals(1, fixture.employeeCount().intValue());
		
		assertFalse(fixture.employees(senderAddressS));
		fixture.registerEmployee(senderAddressS);
		assertEquals(2, fixture.employeeCount().intValue());

		//End of user code
	}
	/**
	 * Test method for  unregisterEmployee(String _address).
	 * see {@link Library#unregisterEmployee( String)}
	 * @throws Exception
	 */
	@Test
	public void testUnregisterEmployee_address() throws Exception {
		//Start of user code testUnregisterEmployee_address
		assertEquals(0, fixture.employeeCount().intValue());
		String address = "0x01";
		fixture.registerEmployee(address);
		
		assertEquals(1, fixture.employeeCount().intValue());
		fixture.unregisterEmployee(address);
		assertEquals(0, fixture.employeeCount().intValue());

		//End of user code
	}
	/**
	 * Test method for  registerUser(String _address,String _name).
	 * see {@link Library#registerUser( String, String)}
	 * @throws Exception
	 */
	@Test
	public void testRegisterUser_address_string() throws Exception {
		//Start of user code testRegisterUser_address_string
		assertFalse(fixture.employees(senderAddressS));		
		fixture.registerEmployee(senderAddressS);
		assertTrue(fixture.employees(senderAddressS));
		assertEquals(1, fixture.employeeCount().intValue());
		
		assertEquals(0, fixture.activeUserCount().intValue());		
		assertEquals(0, fixture.userCount().intValue());
		userAddress = "0x02";
		fixture.registerUser(userAddress, "Testuser1");

		assertEquals(1, fixture.activeUserCount().intValue());		
		String address1 = "0x03";
		fixture.registerUser(address1, "Testuser1");
		
		assertEquals(2, fixture.activeUserCount().intValue());		
		assertEquals(2, fixture.userCount().intValue());
		
		//End of user code
	}
	/**
	 * Test method for  unregisterUser(String _address).
	 * see {@link Library#unregisterUser( String)}
	 * @throws Exception
	 */
	@Test
	public void testUnregisterUser_address() throws Exception {
		//Start of user code testUnregisterUser_address
		fixture.registerEmployee(senderAddressS);

		assertEquals(0, fixture.activeUserCount().intValue());		
		assertEquals(0, fixture.userCount().intValue());
		String address = "0x02";
		fixture.registerUser(address, "Testuser1");
		
		assertEquals(1, fixture.activeUserCount().intValue());		
		assertEquals(1, fixture.userCount().intValue());
		fixture.unregisterUser(address);
		
		assertEquals(1, fixture.userCount().intValue());
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
		fixture.registerEmployee(senderAddressS);

		String _titel = "a Titel";
		assertEquals(0, fixture.bookCount().intValue());
		fixture.addBook(_titel);
		assertEquals(1, fixture.bookCount().intValue());
		assertEquals(1, fixture.activeBooksCount().intValue());
		
		ReturnGetBook_string_uint_address book = fixture.getBook(0);
		assertEquals(_titel, book.getName());
		assertEquals(1, book.getState().intValue());
		
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
		fixture.registerEmployee(senderAddressS);

		assertEquals(0, fixture.bookCount().intValue());
		fixture.addBook("a Titel");
		assertEquals(1, fixture.bookCount().intValue());
		assertEquals(1, fixture.activeBooksCount().intValue());

		fixture.changeBookState(0, 3);
		ReturnGetBook_string_uint_address book = fixture.getBook(0);
		
		assertEquals(3, book.getState().intValue());		
		assertEquals(0, fixture.activeBooksCount().intValue());
		
		
		//End of user code
	}
	/**
	 * Test method for  borrowBook(Integer id,String _address).
	 * see {@link Library#borrowBook( Integer, String)}
	 * @throws Exception
	 */
	@Test
	public void testBorrowBook_uint_address() throws Exception {
		//Start of user code testBorrowBook_uint_address
		testRegisterUser_address_string();
		String _titel = "a Titel";
		fixture.addBook(_titel);

		fixture.borrowBook(0, userAddress);
		
		 ReturnGetBook_string_uint_address book = fixture.getBook(0);
		assertEquals(2, book.getState().intValue());
		
		//End of user code
	}
	/**
	 * Test method for  returnBook(Integer id,String _address).
	 * see {@link Library#returnBook( Integer, String)}
	 * @throws Exception
	 */
	@Test
	public void testReturnBook_uint_address() throws Exception {
		//Start of user code testReturnBook_uint_address
		testBorrowBook_uint_address();
		fixture.returnBook(0, userAddress);
		
		ReturnGetBook_string_uint_address book =fixture.getBook(0);
		assertEquals(1, book.getState().intValue());
		
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
		
		ReturnGetBook_string_uint_address book = fixture.getBook(0);
		assertEquals("a Titel", book.getName());
		
		
		//End of user code
	}
	//Start of user code customTests    
	//End of user code
}

package de.urszeidler.ethereum.smartcontracts.pocketMoneyContract;

// Start of user code AbstractContractTest.customImports

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.math.BigInteger;
import java.net.URISyntaxException;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.apache.commons.io.IOUtils;
import org.ethereum.crypto.ECKey;
import org.ethereum.solidity.compiler.CompilationResult;
import org.ethereum.solidity.compiler.CompilationResult.ContractMetadata;
import org.junit.BeforeClass;
import org.spongycastle.util.encoders.Hex;

// End of user code

/**
 * The basic test.
 *
 */
public abstract class AbstractContractTest {

	protected static EthereumFacade ethereum;
	protected static EthAccount sender;
	protected static EthAddress senderAddress;

	protected EthAddress fixtureAddress;
	protected SoliditySource contractSource;

	// Start of user code AbstractContractTest.customFields
	//TODO: add custom attributes
	// End of user code

	/**
	 * @return the basic contract name
	 */
	protected abstract String getContractName();
	
	/**
	 * @return the contract file together with the contract name
	 */
	protected abstract String getQuallifiedContractName();

	/**
	 * Setup up the blockchain. Add the 'EthereumFacadeProvider' property to use 
	 * another block chain implementation or network.
	 * @throws Exception 
	 */
	@BeforeClass
	public static void setup() throws Exception{
		ethereum = EthereumInstance.getInstance().getEthereum();
		initTest();
	}

	protected static void initTest() throws Exception {
		// Start of user code AbstractContractTest.initTest

		String property = System.getProperty(EthereumInstance.PROP_ETHEREUM_FACADE_PROVIDER);
		if (EthereumInstance.ALL_TESTNET.contains(property)) {

		} else if (EthereumInstance.EI_PRIVATE.equalsIgnoreCase(property)) {
			sender = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
			senderAddress = sender.getAddress();
		}

		if (sender == null) {// the account for the standalone blockchain
			sender = new EthAccount(
					ECKey.fromPrivate(Hex.decode("3ec771c31cac8c0dba77a69e503765701d3c2bb62435888d4ffa38fed60c445c")));
			senderAddress = sender.getAddress();
		}
		// End of user code
	}

	/**
	 * Returns the already compiled contact.
	 * 
	 * @param filePath the filename and path of the combined json
	 * @return the contract data (bin, abi)
	 * @throws URISyntaxException
	 * @throws FileNotFoundException
	 * @throws IOException
	 */
	protected CompiledContract getCompiledContract(String filePath) throws URISyntaxException, FileNotFoundException, IOException {
		File file = new File(this.getClass().getResource(filePath).toURI());
		String rawJson = IOUtils.toString(new FileInputStream(file), EthereumFacade.CHARSET);
		CompilationResult result = CompilationResult.parse(rawJson);
		
		ContractMetadata contractMetadata = result.contracts.get(getContractName());
		if (contractMetadata == null) {
			Optional<String> optional = result.contracts.keySet().stream()
					.filter(s -> s.endsWith(getQuallifiedContractName())).findFirst();
			if (optional.isPresent())
				contractMetadata = result.contracts.get(optional.get());
		}
		return CompiledContract.from(contractSource, getContractName(), contractMetadata);
	}

	/**
	 * Returns the compiled contract from the 'contractSource'. The name is
	 * defined in the concrete test case.
	 * 
	 * @return the compiled contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract getCompiledContract() throws InterruptedException, ExecutionException {
		Map<String, CompiledContract> map = ethereum.compile(contractSource).get();
		CompiledContract contract = map.get(getContractName());
		if (contract == null)
			throw new IllegalArgumentException(
					"The contract '" + getContractName() + "' is not present is the map of contracts:" + map);
		return contract;
	}

	// Start of user code AbstractContractTest.customMethods
	//TODO: add custom methods
	// End of user code
}
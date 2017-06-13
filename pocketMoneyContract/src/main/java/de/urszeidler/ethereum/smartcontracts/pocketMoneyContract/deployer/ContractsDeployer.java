package de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.deployer;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.propeller.EthereumFacade;
import org.adridadou.ethereum.propeller.solidity.SolidityContractDetails;
import org.adridadou.ethereum.propeller.solidity.SolidityEvent;
import org.adridadou.ethereum.propeller.values.EthAccount;
import org.adridadou.ethereum.propeller.values.EthAddress;
import org.adridadou.ethereum.propeller.values.SoliditySource;
import org.adridadou.ethereum.propeller.values.SoliditySourceFile;
import org.apache.commons.io.IOUtils;
import org.ethereum.solidity.compiler.CompilationResult;
import org.ethereum.solidity.compiler.CompilationResult.ContractMetadata;

import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.EthereumInstance;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.EthereumInstance.DeployDuo;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts.EventPocketMoneyClaimed_address_uint_uint_uint_bool;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts.EventPocketMoneyDonated_address_uint_uint;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts.PocketMoneyContract;
import rx.Observable;


/**
 * The deployer for the contracts package.
 *
 */
public class ContractsDeployer {

	private EthereumFacade ethereum;
	private SoliditySourceFile contractSource;
	private CompilationResult compiledContracts;
	private Map<String, SolidityContractDetails> contracts = new HashMap<>();
	private static String filename = "/contracts/contracts.sol";

	/**
	 * Create an instance of the deployer with the default contract code file.
	 * 
	 * @param ethereum
	 */
	public ContractsDeployer(EthereumFacade ethereum) {
		this(ethereum,filename,false);
	}

	/**
	 * Create an instance of the deployer.
	 * 
	 * @param ethereum
	 * @param contractSourceFile
	 * @param compiled is the source code already compiled
	 */
	public ContractsDeployer(EthereumFacade ethereum, String contractSourceFile, boolean compiled) {
		this.ethereum = ethereum;
		setContractSource(contractSourceFile, compiled);
	}

	/**
	 * Create an instance of the deployer.
	 * 
	 * @param ethereum
	 * @param contractSourceFile
	 */
	public ContractsDeployer(EthereumFacade ethereum, File contractSourceFile, boolean compiled) {
		this.ethereum = ethereum;
		if (!compiled)
			contractSource = SoliditySource.from(contractSourceFile);
		else {
			try {
				String rawJson = IOUtils.toString(new FileInputStream(contractSourceFile), EthereumFacade.CHARSET);
				compiledContracts = CompilationResult.parse(rawJson);
			} catch (FileNotFoundException e) {
				throw new IllegalArgumentException(e);
			} catch (IOException e) {
				throw new IllegalArgumentException(e);
			}
		}
	}

	/**
	 * Change the contract source.
	 * 
	 * @param contractSourceFile
	 * @param compiled
	 */
	public void setContractSource(String contractSourceFile, boolean compiled) {
		try {
			if (!compiled) {
		        File contractSrc = new File(this.getClass().getResource(contractSourceFile).toURI());
				contractSource = SoliditySource.from(contractSrc);
			} else {
				String rawJson = IOUtils.toString(this.getClass().getResourceAsStream(contractSourceFile),
						EthereumFacade.CHARSET);
				compiledContracts = CompilationResult.parse(rawJson);
			}
		} catch (IOException | URISyntaxException e) {
			throw new IllegalArgumentException(e);
		}
	}


	/**
	 * Deploys a 'PocketMoneyContract' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployPocketMoneyContract(EthAccount sender) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractPocketMoneyContract();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}

	/**
	 * Deploys a 'PocketMoneyContract' on the blockchain and wrapps the contract proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface
	 */
	public DeployDuo<PocketMoneyContract> createPocketMoneyContract(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployPocketMoneyContract(sender);
		return new EthereumInstance.DeployDuo<PocketMoneyContract>(address.get(), createPocketMoneyContractProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'PocketMoneyContract' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public PocketMoneyContract createPocketMoneyContractProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractPocketMoneyContract();
		PocketMoneyContract pocketmoneycontract = ethereum.createContractProxy(compiledContract, address, sender, PocketMoneyContract.class);
		return pocketmoneycontract;
	}

	/**
	 * Return the compiled contract for the contract 'PocketMoneyContract', when in source the contract code gets compiled.
	 * @return the compiled contract for 'PocketMoneyContract'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails compiledContractPocketMoneyContract() throws InterruptedException, ExecutionException {
		String contractName = "PocketMoneyContract";
		String quallifiedName = "contracts.sol:PocketMoneyContract";
		return getCompiledContract(contractName, quallifiedName);
	}

	/**
	 *  Create an observable for the event PocketMoneyClaimed of the contract PocketMoneyContract
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventPocketMoneyClaimed_address_uint_uint_uint_bool> observeEventPocketMoneyClaimed_address_uint_uint_uint_bool(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractPocketMoneyContract();
		Optional<SolidityEvent<EventPocketMoneyClaimed_address_uint_uint_uint_bool>> eventDefinition = ethereum.findEventDefinition(compiledContract, "PocketMoneyClaimed", EventPocketMoneyClaimed_address_uint_uint_uint_bool.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'PocketMoneyClaimed' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 *  Create an observable for the event PocketMoneyDonated of the contract PocketMoneyContract
	 *  deployed at the given address.
	 *
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventPocketMoneyDonated_address_uint_uint> observeEventPocketMoneyDonated_address_uint_uint(EthAddress address) throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = compiledContractPocketMoneyContract();
		Optional<SolidityEvent<EventPocketMoneyDonated_address_uint_uint>> eventDefinition = ethereum.findEventDefinition(compiledContract, "PocketMoneyDonated", EventPocketMoneyDonated_address_uint_uint.class);
		if(!eventDefinition.isPresent())
			throw new IllegalArgumentException("Event 'PocketMoneyDonated' not found in contract definition."); 
			
		return ethereum.observeEvents(eventDefinition.get(), address);
	}

	/**
	 * Get the compiled contract by name or qualified name.
	 * @param contractName
	 * @param qualifiedName
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public SolidityContractDetails getCompiledContract(String contractName, String qualifiedName)
			throws InterruptedException, ExecutionException {
		SolidityContractDetails compiledContract = contracts.get(qualifiedName == null ? contractName : qualifiedName);
		if (compiledContract != null)
			return compiledContract;

		if (compiledContracts == null) {
			org.adridadou.ethereum.propeller.solidity.CompilationResult compilationResult = ethereum
					.compile(contractSource);
			Optional<SolidityContractDetails> contract = compilationResult.findContract(contractName);
			if (contract.isPresent()) {
				compiledContract = contract.get();
			} else {
				contract = compilationResult.findContract(qualifiedName);
				if (contract.isPresent())
					compiledContract = contract.get();
			}
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get(contractName);
			if (contractMetadata == null) {
				if (qualifiedName == null || qualifiedName.isEmpty())
					throw new IllegalArgumentException("Qualified name must not be null or empty.");

				Optional<String> optional = compiledContracts.contracts.keySet().stream()
						.filter(s -> s.endsWith(qualifiedName)).findFirst();
				if (optional.isPresent()) {
					contractMetadata = compiledContracts.contracts.get(optional.get());
				}
			}
			compiledContract = new SolidityContractDetails(contractMetadata.abi, contractMetadata.bin,
					contractMetadata.metadata);
		}
		if (compiledContract == null)
			throw new IllegalArgumentException(
					"Contract code for '" + contractName + "/" + qualifiedName + "' not found");

		contracts.put(qualifiedName == null ? contractName : qualifiedName, compiledContract);
		return compiledContract;
	}
}

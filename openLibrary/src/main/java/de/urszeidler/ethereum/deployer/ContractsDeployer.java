package de.urszeidler.ethereum.deployer;

import rx.Observable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.values.CompiledContract;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;
import org.apache.commons.io.IOUtils;
import org.ethereum.solidity.compiler.CompilationResult;
import org.ethereum.solidity.compiler.CompilationResult.ContractMetadata;


import de.urszeidler.ethereum.EthereumInstance;
import de.urszeidler.ethereum.EthereumInstance.DeployDuo;

import de.urszeidler.ethereum.contracts.*;




/**
 * The deployer for the contracts package.
 *
 */
public class ContractsDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private CompilationResult compiledContracts;
	private static String filename = "/contract/contracts.sol";

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
				contractSource = SoliditySource.from(this.getClass().getResourceAsStream(contractSourceFile));
			} else {
				String rawJson = IOUtils.toString(this.getClass().getResourceAsStream(contractSourceFile),
						EthereumFacade.CHARSET);
				compiledContracts = CompilationResult.parse(rawJson);
			}
		} catch (IOException e) {
			throw new IllegalArgumentException(e);
		}
	}


	/**
	 * Deploys a 'Library' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployLibrary(EthAccount sender) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractLibrary();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}

	/**
	 * Deploys a 'Library' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface
	 */
	public DeployDuo<Library> createLibrary(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployLibrary(sender);
		return new EthereumInstance.DeployDuo<Library>(address.get(), createLibraryProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'Library' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Library createLibraryProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractLibrary();
		Library library = ethereum.createContractProxy(compiledContract, address, sender, Library.class);
		return library;
	}

	/**
	 * Return the compiled contract for the contract 'Library', when in source the contract code is compiled.
	 * @return the compiled contract for 'Library'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractLibrary() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("Library");
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("Library");
			if (contractMetadata == null)
				throw new IllegalArgumentException("Contract code for 'Library' not found");
			compiledContract = CompiledContract.from(null, "Library", contractMetadata);
		}
		return compiledContract;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventBookSate_uint_uint> observeEventBookSate_uint_uint(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractLibrary();
		Observable<EventBookSate_uint_uint> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "BookSate", EventBookSate_uint_uint.class);
		return observeEvents;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventNewBook_uint_string> observeEventNewBook_uint_string(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractLibrary();
		Observable<EventNewBook_uint_string> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "NewBook", EventNewBook_uint_string.class);
		return observeEvents;
	}


}

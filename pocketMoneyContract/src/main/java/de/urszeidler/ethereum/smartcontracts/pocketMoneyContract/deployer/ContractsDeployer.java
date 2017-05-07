package de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.deployer;

import rx.Observable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Map;
import java.util.Optional;
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

import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.EthereumInstance;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.EthereumInstance.DeployDuo;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts.*;




/**
 * The deployer for the contracts package.
 *
 */
public class ContractsDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private CompilationResult compiledContracts;
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
	 * Deploys a 'PocketMoneyContract' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployPocketMoneyContract(EthAccount sender) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractPocketMoneyContract();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}

	/**
	 * Deploys a 'PocketMoneyContract' on the blockchain and wrapps the contcat proxy.
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
		CompiledContract compiledContract = compiledContractPocketMoneyContract();
		PocketMoneyContract pocketmoneycontract = ethereum.createContractProxy(compiledContract, address, sender, PocketMoneyContract.class);
		return pocketmoneycontract;
	}

	/**
	 * Return the compiled contract for the contract 'PocketMoneyContract', when in source the contract code is compiled.
	 * @return the compiled contract for 'PocketMoneyContract'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractPocketMoneyContract() throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = null;
		if (compiledContracts == null){
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get("PocketMoneyContract");
			if (compiledContract == null) {
				Optional<String> optional = contracts.keySet().stream().filter(s -> s.endsWith("contracts.sol:PocketMoneyContract"))
						.findFirst();
				if (optional.isPresent())
					compiledContract = contracts.get(optional.get());
			}
		} else {
			ContractMetadata contractMetadata = compiledContracts.contracts.get("PocketMoneyContract");
			if (contractMetadata == null) {
				Optional<String> optional = compiledContracts.contracts.keySet().stream()
						.filter(s -> s.endsWith("contracts.sol:PocketMoneyContract")).findFirst();
				if (optional.isPresent())
					contractMetadata = compiledContracts.contracts.get(optional.get());
			}
			compiledContract = CompiledContract.from(null, "PocketMoneyContract", contractMetadata);
		}
		if(compiledContract == null)
			throw new IllegalArgumentException("Contract code for 'PocketMoneyContract' not found");

		return compiledContract;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventPocketMoneyClaimed_address_uint_uint_uint_bool> observeEventPocketMoneyClaimed_address_uint_uint_uint_bool(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractPocketMoneyContract();
		Observable<EventPocketMoneyClaimed_address_uint_uint_uint_bool> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "PocketMoneyClaimed", EventPocketMoneyClaimed_address_uint_uint_uint_bool.class);
		return observeEvents;
	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventPocketMoneyDonated_address_uint_uint> observeEventPocketMoneyDonated_address_uint_uint(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractPocketMoneyContract();
		Observable<EventPocketMoneyDonated_address_uint_uint> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "PocketMoneyDonated", EventPocketMoneyDonated_address_uint_uint.class);
		return observeEvents;
	}


}

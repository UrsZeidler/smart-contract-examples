package de.urszeidler.ethereum.javaExamples.deployer;

import rx.Observable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Map;
import java.util.HashMap;
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


import de.urszeidler.ethereum.javaExamples.EthereumInstance;
import de.urszeidler.ethereum.javaExamples.EthereumInstance.DeployDuo;

import de.urszeidler.ethereum.javaExamples.contracts.*;




/**
 * The deployer for the contracts package.
 *
 */
public class ContractsDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private CompilationResult compiledContracts;
	private Map<String,CompiledContract> contracts = new HashMap<String, CompiledContract>();
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
	 * Deploys a 'JavaEventExample' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployJavaEventExample(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractJavaEventExample();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'JavaEventExample' on the blockchain and wrapps the contract proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<JavaEventExample> createJavaEventExample(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployJavaEventExample(sender);
		return new EthereumInstance.DeployDuo<JavaEventExample>(address.get(), createJavaEventExampleProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'JavaEventExample' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public JavaEventExample createJavaEventExampleProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractJavaEventExample();
		JavaEventExample javaeventexample = ethereum.createContractProxy(compiledContract, address, sender, JavaEventExample.class);
		return javaeventexample;
	}

	/**
	 * Return the compiled contract for the contract 'JavaEventExample', when in source the contract code gets compiled.
	 * @return the compiled contract for 'JavaEventExample'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractJavaEventExample() throws InterruptedException, ExecutionException {
		String contractName = "JavaEventExample";
		String quallifiedName = "contracts.sol:JavaEventExample";
		return getCompiledContract(contractName, quallifiedName);

	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventEvent1_string_uint> observeEventEvent1_string_uint(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractJavaEventExample();
		Observable<EventEvent1_string_uint> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "Event1", EventEvent1_string_uint.class);
		return observeEvents;
	}


	/**
	 * Deploys a 'JavaStructExample' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployJavaStructExample(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractJavaStructExample();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'JavaStructExample' on the blockchain and wrapps the contract proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<JavaStructExample> createJavaStructExample(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployJavaStructExample(sender);
		return new EthereumInstance.DeployDuo<JavaStructExample>(address.get(), createJavaStructExampleProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'JavaStructExample' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public JavaStructExample createJavaStructExampleProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractJavaStructExample();
		JavaStructExample javastructexample = ethereum.createContractProxy(compiledContract, address, sender, JavaStructExample.class);
		return javastructexample;
	}

	/**
	 * Return the compiled contract for the contract 'JavaStructExample', when in source the contract code gets compiled.
	 * @return the compiled contract for 'JavaStructExample'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractJavaStructExample() throws InterruptedException, ExecutionException {
		String contractName = "JavaStructExample";
		String quallifiedName = "contracts.sol:JavaStructExample";
		return getCompiledContract(contractName, quallifiedName);

	}


	/**
	 * Deploys a 'JavaEventExample1' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployJavaEventExample1(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractJavaEventExample1();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'JavaEventExample1' on the blockchain and wrapps the contract proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<JavaEventExample1> createJavaEventExample1(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployJavaEventExample1(sender);
		return new EthereumInstance.DeployDuo<JavaEventExample1>(address.get(), createJavaEventExample1Proxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'JavaEventExample1' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public JavaEventExample1 createJavaEventExample1Proxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractJavaEventExample1();
		JavaEventExample1 javaeventexample1 = ethereum.createContractProxy(compiledContract, address, sender, JavaEventExample1.class);
		return javaeventexample1;
	}

	/**
	 * Return the compiled contract for the contract 'JavaEventExample1', when in source the contract code gets compiled.
	 * @return the compiled contract for 'JavaEventExample1'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractJavaEventExample1() throws InterruptedException, ExecutionException {
		String contractName = "JavaEventExample1";
		String quallifiedName = "contracts.sol:JavaEventExample1";
		return getCompiledContract(contractName, quallifiedName);

	}
	/**
	 * 
	 * @param address
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public Observable<EventEvent2> observeEventEvent2(EthAddress address) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractJavaEventExample1();
		Observable<EventEvent2> observeEvents = ethereum.observeEvents(compiledContract.getAbi(), address, "Event2", EventEvent2.class);
		return observeEvents;
	}


	/**
	 * Deploys a 'ContractExample' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @param _text 
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployContractExample(EthAccount sender, String _text) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractContractExample();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender, _text);
		return address;
	}

	/**
	 * Deploys a 'ContractExample' on the blockchain and wrapps the contract proxy.
	 *  
	 * @param sender the sender address
	 * @param _text 
	 * @return the contract interface
	 */
	public DeployDuo<ContractExample> createContractExample(EthAccount sender, String _text) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployContractExample(sender, _text);
		return new EthereumInstance.DeployDuo<ContractExample>(address.get(), createContractExampleProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'ContractExample' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public ContractExample createContractExampleProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractContractExample();
		ContractExample contractexample = ethereum.createContractProxy(compiledContract, address, sender, ContractExample.class);
		return contractexample;
	}

	/**
	 * Return the compiled contract for the contract 'ContractExample', when in source the contract code gets compiled.
	 * @return the compiled contract for 'ContractExample'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractContractExample() throws InterruptedException, ExecutionException {
		String contractName = "ContractExample";
		String quallifiedName = "contracts.sol:ContractExample";
		return getCompiledContract(contractName, quallifiedName);

	}


	/**
	 * Deploys a 'ExampleToken' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @param _totalTokens 
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployExampleToken(EthAccount sender, java.math.BigInteger _totalTokens) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractExampleToken();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender, _totalTokens);
		return address;
	}

	/**
	 * Deploys a 'ExampleToken' on the blockchain and wrapps the contract proxy.
	 *  
	 * @param sender the sender address
	 * @param _totalTokens 
	 * @return the contract interface
	 */
	public DeployDuo<ExampleToken> createExampleToken(EthAccount sender, java.math.BigInteger _totalTokens) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployExampleToken(sender, _totalTokens);
		return new EthereumInstance.DeployDuo<ExampleToken>(address.get(), createExampleTokenProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'ExampleToken' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public ExampleToken createExampleTokenProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractExampleToken();
		ExampleToken exampletoken = ethereum.createContractProxy(compiledContract, address, sender, ExampleToken.class);
		return exampletoken;
	}

	/**
	 * Return the compiled contract for the contract 'ExampleToken', when in source the contract code gets compiled.
	 * @return the compiled contract for 'ExampleToken'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractExampleToken() throws InterruptedException, ExecutionException {
		String contractName = "ExampleToken";
		String quallifiedName = "contracts.sol:ExampleToken";
		return getCompiledContract(contractName, quallifiedName);

	}


	/**
	 * Deploys a 'JavaPayableExample' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployJavaPayableExample(EthAccount sender) throws InterruptedException, ExecutionException{
		CompiledContract compiledContract = compiledContractJavaPayableExample();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}


	/**
	 * Deploys a 'JavaPayableExample' on the blockchain and wrapps the contract proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface and the deployed address
	 */
	public DeployDuo<JavaPayableExample> createJavaPayableExample(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployJavaPayableExample(sender);
		return new EthereumInstance.DeployDuo<JavaPayableExample>(address.get(), createJavaPayableExampleProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'JavaPayableExample' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public JavaPayableExample createJavaPayableExampleProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractJavaPayableExample();
		JavaPayableExample javapayableexample = ethereum.createContractProxy(compiledContract, address, sender, JavaPayableExample.class);
		return javapayableexample;
	}

	/**
	 * Return the compiled contract for the contract 'JavaPayableExample', when in source the contract code gets compiled.
	 * @return the compiled contract for 'JavaPayableExample'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractJavaPayableExample() throws InterruptedException, ExecutionException {
		String contractName = "JavaPayableExample";
		String quallifiedName = "contracts.sol:JavaPayableExample";
		return getCompiledContract(contractName, quallifiedName);

	}


	/**
	 * Deploys a 'JavaOwnerExample' on the blockchain.
	 * 
	 * @param sender
	 *            the sender address
	 * @return the address of the deployed contract
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompletableFuture<EthAddress> deployJavaOwnerExample(EthAccount sender) throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractJavaOwnerExample();
		CompletableFuture<EthAddress> address = ethereum.publishContract(compiledContract, sender);
		return address;
	}

	/**
	 * Deploys a 'JavaOwnerExample' on the blockchain and wrapps the contract proxy.
	 *  
	 * @param sender the sender address
	 * @return the contract interface
	 */
	public DeployDuo<JavaOwnerExample> createJavaOwnerExample(EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployJavaOwnerExample(sender);
		return new EthereumInstance.DeployDuo<JavaOwnerExample>(address.get(), createJavaOwnerExampleProxy(sender, address.get()));
	}

	/**
	 * Create a proxy for a deployed 'JavaOwnerExample' contract.
	 *  
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public JavaOwnerExample createJavaOwnerExampleProxy(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		CompiledContract compiledContract = compiledContractJavaOwnerExample();
		JavaOwnerExample javaownerexample = ethereum.createContractProxy(compiledContract, address, sender, JavaOwnerExample.class);
		return javaownerexample;
	}

	/**
	 * Return the compiled contract for the contract 'JavaOwnerExample', when in source the contract code gets compiled.
	 * @return the compiled contract for 'JavaOwnerExample'.
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract compiledContractJavaOwnerExample() throws InterruptedException, ExecutionException {
		String contractName = "JavaOwnerExample";
		String quallifiedName = "contracts.sol:JavaOwnerExample";
		return getCompiledContract(contractName, quallifiedName);

	}


	/**
	 * Get the compiled contract by name or qualified name.
	 * @param contractName
	 * @param qualifiedName
	 * @return
	 * @throws InterruptedException
	 * @throws ExecutionException
	 */
	public CompiledContract getCompiledContract(String contractName, String qualifiedName)
			throws InterruptedException, ExecutionException {
		CompiledContract compiledContract = contracts.get(qualifiedName==null ? contractName : qualifiedName);
		if(compiledContract!=null)
			return compiledContract;
		
		if (compiledContracts == null) {
			Map<String, CompiledContract> contracts = ethereum.compile(contractSource).get();
			compiledContract = contracts.get(contractName);
			if (compiledContract == null) {
				if (qualifiedName == null || qualifiedName.isEmpty())
					throw new IllegalArgumentException("Qualified name must not be null or empty.");

				Optional<String> optional = contracts.keySet().stream().filter(s -> {
					return s.endsWith(qualifiedName);
				}).findFirst();
				if (optional.isPresent())
					compiledContract = contracts.get(optional.get());
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
					compiledContract = CompiledContract.from(null, contractName, contractMetadata);
				}
			} else
				compiledContract = CompiledContract.from(null, contractName, contractMetadata);
		}
		if (compiledContract == null)
			throw new IllegalArgumentException(
					"Contract code for '" + contractName + "/" + qualifiedName + "' not found");

		contracts.put(qualifiedName==null ? contractName : qualifiedName, compiledContract);
		return compiledContract;
	}
}

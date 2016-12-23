package de.urszeidler.ethereum.deployer;

import java.io.File;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.SoliditySource;

import de.urszeidler.ethereum.contracts.*;


/**
 * The deployer for the contracts package.
 *
 */
public class ContractsDeployer {

	private EthereumFacade ethereum;
	private SoliditySource contractSource;
	private static String filename = "/mix/contracts.sol";

	public ContractsDeployer(EthereumFacade ethereum) {
		this(ethereum,filename);
	}
	
	public ContractsDeployer(EthereumFacade ethereum,String contractSourceFile) {
		this.ethereum = ethereum;
		try {
			contractSource = SoliditySource
					.from(new File(this.getClass().getResource(contractSourceFile).toURI()));
		} catch (URISyntaxException e) {
			throw new IllegalArgumentException(e);
		}
	}


	/**
	 * Deploys a 'Library' on the blockchain.
	 *  
	 * @param ethereum the blockchain
	 * @param sender the sender address
	 * @return the address of the deployed contract
	 */
	public CompletableFuture<EthAddress> deployLibrary(EthAccount sender) {
		CompletableFuture<EthAddress> address = ethereum.publishContract(contractSource, "Library", sender);
		return address;
	}

	/**
	 * Deploys a 'Library' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param ethereum the blockchain
	 * @param sender the sender address
	 * @return the contract interface
	 */
	public Library createLibrary( EthAccount sender) throws IOException, InterruptedException, ExecutionException {
		CompletableFuture<EthAddress> address = deployLibrary(sender);
		return createLibrary(sender, address.get());
	}

	/**
	 * Deploys a 'Library' on the blockchain and wrapps the contcat proxy.
	 *  
	 * @param ethereum the blockchain
	 * @param sender the sender address
	 * @param address the address of the contract
	 * @return the contract interface
	 */
	public Library createLibrary(EthAccount sender, EthAddress address) throws IOException, InterruptedException, ExecutionException {
		return ethereum.createContractProxy(contractSource, "Library", address, sender, Library.class);
	}

}

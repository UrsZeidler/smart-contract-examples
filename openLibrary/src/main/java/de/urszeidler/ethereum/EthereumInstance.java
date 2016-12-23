package de.urszeidler.ethereum;

import java.math.BigInteger;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.provider.MainEthereumFacadeProvider;
import org.adridadou.ethereum.provider.PrivateEthereumFacadeProvider;
import org.adridadou.ethereum.provider.PrivateNetworkConfig;
import org.adridadou.ethereum.provider.RopstenEthereumFacadeProvider;
import org.adridadou.ethereum.provider.GenericRpcEthereumFacadeProvider;
import org.adridadou.ethereum.provider.InfuraRopstenEthereumFacadeProvider;
import org.adridadou.ethereum.provider.StandaloneEthereumFacadeProvider;
import org.adridadou.ethereum.provider.TestnetEthereumFacadeProvider;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthValue;
import org.adridadou.ethereum.values.config.ChainId;
import org.adridadou.ethereum.values.config.InfuraKey;
import org.ethereum.crypto.ECKey;

/**
 * A simple singleton to control the access for the ethereum instance.<br/>
 * The created instance is controllable by system a system property 'EthereumFacadeProvider'.
 */
public class EthereumInstance{

	private static EthereumInstance instance;
	private static Lock instanceLock = new ReentrantLock();
	
	private EthereumFacade ethereum;

	private EthereumInstance() {
		try {
			setup();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * Get the etherreum instance, will wait until the instance is available.
	 * @return the instance
	 */
	public static EthereumInstance getInstance() {
		instanceLock.lock();
		try {
			if (instance == null) {
				instance = new EthereumInstance();
			}
		} finally {
			instanceLock.unlock();
		}
		return instance;
	}

	/**
	 * Setup up the blockchain. Add the 'EthereumFacadeProvider' property to use 
	 * another block chain implementation or network.
	 * @throws Exception 
	 */
	private void setup() throws Exception {
		String property = System.getProperty("EthereumFacadeProvider");
		if(property!=null){
			if (property.equalsIgnoreCase("main")) {
				ethereum = new MainEthereumFacadeProvider().create();
			}else if (property.equalsIgnoreCase("test")) {
				ethereum = new TestnetEthereumFacadeProvider().create();
			}else if (property.equalsIgnoreCase("ropsten")) {
				ethereum = new RopstenEthereumFacadeProvider().create();
			}else if (property.equalsIgnoreCase("InfuraRopsten")) {
				InfuraRopstenEthereumFacadeProvider ethereumFacadeProvider = new InfuraRopstenEthereumFacadeProvider();
				String apiKey = System.getProperty("apiKey");
				ethereum = ethereumFacadeProvider.create(new InfuraKey(apiKey));
			}else if (property.equalsIgnoreCase("rpc")) {
				GenericRpcEthereumFacadeProvider rcp = new GenericRpcEthereumFacadeProvider();
				String url = System.getProperty("rpc-url");
				String chainId = System.getProperty("chain-id");
				ethereum = rcp.create(url, new ChainId((byte) Integer.parseInt(chainId)));
			}else if (property.equalsIgnoreCase("private")){
				PrivateEthereumFacadeProvider provider = new PrivateEthereumFacadeProvider();
				PrivateNetworkConfig config = PrivateNetworkConfig.config();
				config.initialBalance(new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L))), EthValue.ether(10L));
				config.initialBalance(new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100001L))), EthValue.ether(11L));
				config.initialBalance(new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100002L))), EthValue.ether(12L));
				ethereum = provider.create(config);
			}
		}else{
			ethereum = new StandaloneEthereumFacadeProvider().create();
		}
	}

	public EthereumFacade getEthereum() {
		return ethereum;
	}

}

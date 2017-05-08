/**
 * 
 */
package de.urszeidler.ethereum.smartcontracts.pocketMoneyContract;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.adridadou.ethereum.EthereumFacade;
import org.adridadou.ethereum.keystore.FileSecureKey;
import org.adridadou.ethereum.keystore.SecureKey;
import org.adridadou.ethereum.values.EthAccount;
import org.adridadou.ethereum.values.EthAddress;
import org.adridadou.ethereum.values.EthValue;
import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.HelpFormatter;
import org.apache.commons.cli.Option;
import org.apache.commons.cli.OptionGroup;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.ParseException;
import org.apache.commons.io.IOUtils;
import org.ethereum.crypto.ECKey;
import org.spongycastle.util.encoders.Hex;

import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.EthereumInstance.DeployDuo;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts.PocketMoneyContract;
import de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.deployer.ContractsDeployer;

/**
 * @author
 *
 */
public class PockeMoneyContractManager {

	private EthereumFacade ethereum;
	private ContractsDeployer deployer;
	private long millis;
	private EthAccount sender;
	private DeployDuo<PocketMoneyContract> manager;

	private interface DoAndWaitOneTime<T> {
		boolean isDone();

		CompletableFuture<T> doIt();
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Options options = createOptions();
		CommandLineParser parser = new DefaultParser();
		int returnValue = 0;
		try {
			CommandLine commandLine = parser.parse(options, args);
			if (commandLine.hasOption("h")) {
				printHelp(options);
				return;
			}

			String managerAddress = null;
			String senderKey = null;
			String senderPass = null;
			if (commandLine.hasOption("sk"))
				senderKey = commandLine.getOptionValue("sk");
			if (commandLine.hasOption("sp"))
				senderPass = commandLine.getOptionValue("sp");

			PockeMoneyContractManager manager = new PockeMoneyContractManager();

			try {
				manager.init(senderKey, senderPass, managerAddress);
				if (commandLine.hasOption("f")) {
					String[] values = commandLine.getOptionValues("f");

					String filename = values[0];
					String isCompiled = values[1];
					manager.deployer.setContractSource(filename, Boolean.parseBoolean(isCompiled));
				}
				if (commandLine.hasOption("millis")) {
					manager.setMillis(Long.parseLong(commandLine.getOptionValue("millis")));
				}

				if (commandLine.hasOption("d")) {
					manager.deployContract();
				} else if (commandLine.hasOption("l")) {
					String[] values = commandLine.getOptionValues("l");
					String address = values[0];
					manager.listContract(address);
				}else if(commandLine.hasOption("p")){
					String[] values = commandLine.getOptionValues("p");
					String address = values[0];
					String wei = values[1];

					manager.sendWeiToContract( address ,BigInteger.valueOf(Long.valueOf(wei)));
				}else if (commandLine.hasOption("c")){
					String[] values = commandLine.getOptionValues("c");
					String address = values[0];
					
					manager.claimMoney(address);
					
				}else if (commandLine.hasOption("s")) {
					String[] values = commandLine.getOptionValues("s");
					String amount2Claim = values[0];
					String claimInterval = values[1];
					String donator = values[2];
					String recipient = values[3];

					if (manager.manager == null) {
						String address = values[4];
						manager.setManager(address);
					}

					manager.setPoketMoneyContractParameters(BigInteger.valueOf(Long.valueOf(amount2Claim)),
							BigInteger.valueOf(Long.valueOf(claimInterval)), EthAddress.of(donator),
							EthAddress.of(recipient));

				}

				
				if(manager.getManager()!=null && commandLine.hasOption("wca")){
					String[] values = commandLine.getOptionValues("wca");
					String filename = values[0];

					File file = new File(filename);
					IOUtils.write(manager.getManager().contractAddress.withLeading0x(), new FileOutputStream(file),"UTF-8");
				}
			} catch (Exception e) {
				System.out.println(e.getMessage());
				printHelp(options);
				returnValue = 10;
			}

		} catch (ParseException e1) {
			System.out.println(e1.getMessage());
			System.out.println("Commandline: "+args);
			printHelp(options);
			returnValue = 10;
		}
		
		//prevent from exit the vm
		if(System.getProperty("NoExit")==null)
			System.exit(returnValue);
	}

	public void claimMoney(String address) throws IOException, InterruptedException, ExecutionException {
		setManager(address);
		EthValue balance = ethereum.getBalance(sender);
		
		PocketMoneyContract contract = manager.contractInstance;
		doAndWait("claiming money: ", new DoAndWaitOneTime<Void>() {

			@Override
			public boolean isDone() {
				return !ethereum.getBalance(sender).equals(balance);
			}

			@Override
			public CompletableFuture<Void> doIt() {
				return contract.claimPocketMoney();
			}
		});
		
	}

	public void sendWeiToContract(String address, BigInteger wei) throws IOException, InterruptedException, ExecutionException {
		setManager(address);
		ethereum.sendEther(sender, manager.contractAddress,EthValue.wei(wei)).get();
		listContract(null);
	}

	public void setPoketMoneyContractParameters(BigInteger amount2Claim, BigInteger claimInterval, EthAddress donator,
			EthAddress recipient) throws InterruptedException, ExecutionException {
		if (manager == null)
			return;

		PocketMoneyContract contract = manager.contractInstance;

		doAndWait("set amount2Claim: ", new DoAndWaitOneTime<Void>() {

			@Override
			public boolean isDone() {
				return contract.amount2Claim().equals(amount2Claim);
			}

			@Override
			public CompletableFuture<Void> doIt() {
				return contract.setAmount2Claim(amount2Claim);
			}
		});

		doAndWait("set claimInterval: ", new DoAndWaitOneTime<Void>() {

			@Override
			public boolean isDone() {
				return contract.claimInterval().equals(claimInterval);
			}

			@Override
			public CompletableFuture<Void> doIt() {
				return contract.setClaimInterval(claimInterval);
			}
		});

		doAndWait("set donator: ", new DoAndWaitOneTime<Void>() {

			@Override
			public boolean isDone() {
				return contract.donator().equals(donator);
			}

			@Override
			public CompletableFuture<Void> doIt() {
				return contract.setDonator(donator);
			}
		});

		doAndWait("set recipient: ", new DoAndWaitOneTime<Void>() {

			@Override
			public boolean isDone() {
				return contract.recipient().equals(recipient);
			}

			@Override
			public CompletableFuture<Void> doIt() {
				return contract.setRecipient(recipient);
			}
		});

	}

	public void listContract(String address) throws IOException, InterruptedException, ExecutionException {
		if(address!=null)
			setManager(address);
		PocketMoneyContract contract = manager.contractInstance;

		System.out.println("Owner: " + contract.owner());
		System.out.println("recipient: " + contract.recipient() + " donator: " + contract.donator());
		System.out.println("amount2Claim: " + contract.amount2Claim() + " claimInterval" + contract.claimInterval()
				+ " currentAmount: " + contract.currentAmount() + " lastClaimed: " + contract.lastClaimed());

	}

	public void deployContract() throws IOException, InterruptedException, ExecutionException {
		DeployDuo<PocketMoneyContract> moneyContract = deployer.createPocketMoneyContract(sender);
		manager = moneyContract;
	}

	private void setManager(String cdatabaseAddress) throws IOException, InterruptedException, ExecutionException {
		manager = new DeployDuo<PocketMoneyContract>(EthAddress.of(cdatabaseAddress), null);
		manager.contractInstance = deployer.createPocketMoneyContractProxy(sender, manager.contractAddress);
	}

	private void init(String senderKey, String senderPass, String managerAddress) throws Exception {
		ethereum = EthereumInstance.getInstance().getEthereum();
		String property = System.getProperty("EthereumFacadeProvider");
		// testnetProvider
		if (property != null && (property.equalsIgnoreCase("rpc") || property.equalsIgnoreCase("ropsten")
				|| property.equalsIgnoreCase("InfuraRopsten"))) {

			millis = 2000L;
		} else if (property != null && property.equalsIgnoreCase("private")) {
			sender = new EthAccount(ECKey.fromPrivate(BigInteger.valueOf(100000L)));
			millis = 100L;
		} else {
			sender = new EthAccount(
					ECKey.fromPrivate(Hex.decode("3ec771c31cac8c0dba77a69e503765701d3c2bb62435888d4ffa38fed60c445c")));
			millis = 10L;
		}

		if (senderKey != null && !senderKey.isEmpty() && sender == null) {
			sender = unlockAccount(senderKey, senderPass);
		}
		deployer = new ContractsDeployer(ethereum);
		if (managerAddress != null) {
			setManager(managerAddress);
		}
	}

	/**
	 * Unlocks an account.
	 * 
	 * @param pathname
	 *            the key file
	 * @param pass
	 *            the pass to unlocl
	 * @return the account
	 * @throws Exception
	 */
	private EthAccount unlockAccount(String pathname, String pass) throws Exception {
		SecureKey key2 = new FileSecureKey(new File(pathname));
		System.out.println("unlock key: " + pathname);
		EthAccount decode = key2.decode(pass);
		String senderAddressS = decode.getAddress().withLeading0x();
		EthValue balance = ethereum.getBalance(decode);
		System.out.println("Sender address and amount:" + senderAddressS + "->" + balance);
		return decode;
	}

	private void doAndWait(String message, DoAndWaitOneTime<?> action) throws InterruptedException, ExecutionException {
		System.out.println(message);
		doAndWait(action);
	}

	private void doAndWait(DoAndWaitOneTime<?> action) throws InterruptedException, ExecutionException {
		int timeOut = 0;
		if (!action.isDone()) {
			action.doIt().get();
			while (!action.isDone() && timeOut++ < 200)
				synchronized (this) {
					System.out.print(".");
					wait(millis);
				}
		}
		System.out.println();
		if (timeOut >= 200)
			System.out.println("Timeout:" + action);
	}

	private static Options createOptions() {
		Options options = new Options();

		// OptionGroup keyOptionGroup = new OptionGroup();
		// keyOptionGroup.setRequired(false);
		options.addOption(Option//
				.builder("f")//
				.desc("Set the contract source or the compiled json.")//
				.longOpt("file")//
				.hasArg()//
				.argName("file alreadyCompiled").numberOfArgs(2).build());

		options.addOption(Option//
				.builder("sk")//
				.desc("Set the sender key file.")//
				.longOpt("senderKey")//
				.hasArg()//
				.argName("keyFile")//
				.numberOfArgs(1).build());
		options.addOption(Option//
				.builder("sp")//
				.desc("Set the pass of the key of the sender.")//
				.longOpt("senderPass")//
				.hasArg()//
				.argName("password").numberOfArgs(1).build());
		options.addOption(Option//
				.builder("millis")//
				.desc("The millisec to wait between checking the action.")//
				.hasArg()//
				.argName("millisec").numberOfArgs(1).build());
		options.addOption(Option//
				.builder("wca")//
				.longOpt("writeContractAddress")//
				.desc("Write contract to file.")//
				.hasArg()//
				.argName("filename").numberOfArgs(1).build());

		OptionGroup helpOptionGroup = new OptionGroup();
		helpOptionGroup.addOption(Option.builder("h")//
				.desc("show help and usage")//
				.hasArg(false).build());

		OptionGroup actionOptionGroup = new OptionGroup();
		actionOptionGroup.setRequired(true);
		actionOptionGroup.addOption(Option//
				.builder("d")//
				.longOpt("deploy")//
				.desc("Deploys the contract.")//
				.build());
		actionOptionGroup.addOption(Option//
				.builder("p")//
				.longOpt("pay")//
				.desc("Pay in wei.")//
				.hasArg()//
				.argName("address,wei").numberOfArgs(2).build());
		actionOptionGroup.addOption(Option//
				.builder("l")//
				.longOpt("list")//
				.desc("List the contract properties.")//
				.hasArg()//
				.argName("address").numberOfArgs(1).build());
		actionOptionGroup.addOption(Option//
				.builder("c")//
				.longOpt("claim")//
				.desc("Claim the money.")//
				.hasArg()//
				.argName("address").numberOfArgs(1).build());
		actionOptionGroup.addOption(Option//
				.builder("s")//
				.longOpt("set")//
				.desc("Set contract parameters.")//
				.hasArg()//
				.argName("amount2claim,interval,donator,recipient,address").numberOfArgs(5).build());

		options.addOptionGroup(actionOptionGroup);
		// options.addOptionGroup(keyOptionGroup);
		options.addOptionGroup(helpOptionGroup);
		return options;
	}

	/**
	 * @param options
	 */
	private static void printHelp(Options options) {
		System.out.println("used EthereumFacadeProvider:" + System.getProperty("EthereumFacadeProvider") + "\n\n");

		StringBuffer buffer = new StringBuffer();
		buffer.append("change the ethereum client via -DEthereumFacadeProvider=<type>\n")//
				.append("type : main - the main net\n")//
				.append("       test - the test net\n")//
				.append("       ropsten - the ropsten net\n")//
				.append("       private - the private net\n")//
				.append("       InfuraRopsten - the ropsten net via Infrua\n")//
				.append("       InfuraMain - the main net via Infrua\n")//
				.append("           -DapiKey=<key> - the the api key for the service\n")//
				.append("       rpc - connect via rpc\n")//
				.append("          -Drpc-url=<url> - the url of the rpc server\n")//
				.append("          -Dchain-id=<id> - the chain id (0 for the main chain and 3 for ropsten)\n")//
				.append("\n");

		HelpFormatter formatter = new HelpFormatter();
		String header = "\nA contract to manage pocket money for one recipent (c) Urs Zeidler 2017\n";
		String footer = "\nexample: \n\n" + buffer.toString();
		formatter.printHelp(150, "pocketMoneyContract.sh", header, options, footer, true);
	}

	public void setMillis(long millis) {
		this.millis = millis;
	}

	public void setSender(EthAccount sender) {
		this.sender = sender;
	}

	public void setEthereum(EthereumFacade ethereum) {
		this.ethereum = ethereum;
		deployer = new ContractsDeployer(ethereum);
	}

	public DeployDuo<PocketMoneyContract> getManager() {
		return manager;
	}

}

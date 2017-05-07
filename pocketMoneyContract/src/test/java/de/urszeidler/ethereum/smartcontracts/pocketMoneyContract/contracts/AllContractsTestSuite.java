package de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.contracts;

import org.junit.runners.Suite;
import org.junit.runner.RunWith;

@RunWith(Suite.class)
@Suite.SuiteClasses({
PocketMoneyContractTest.class
//Start of user code customTests   
,de.urszeidler.ethereum.smartcontracts.pocketMoneyContract.PocketMoneyContractManagerTest.class
//End of user code
})
public class AllContractsTestSuite {
}

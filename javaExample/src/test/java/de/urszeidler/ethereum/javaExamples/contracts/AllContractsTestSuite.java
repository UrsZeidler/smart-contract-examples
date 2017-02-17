package de.urszeidler.ethereum.javaExamples.contracts;

import org.junit.runners.Suite;
import org.junit.runner.RunWith;

@RunWith(Suite.class)
@Suite.SuiteClasses({
JavaEventExampleTest.class
,JavaStructExampleTest.class
,JavaEventExample1Test.class
,ContractExampleTest.class
,ExampleTokenTest.class
,JavaPayableExampleTest.class
//Start of user code customTests    
//End of user code
})
public class AllContractsTestSuite {
}

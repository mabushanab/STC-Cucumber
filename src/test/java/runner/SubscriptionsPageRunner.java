package runner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import io.cucumber.testng.CucumberOptions;


@CucumberOptions(tags = {"@KSA_Subscription_Page,@BAH_Subscription_Page,@KUW_Subscription_Page"},glue = {"stepdefs"}, plugin = {"html:Test_Report","json:target/json-cucumber-reports/SubscriptionPage/cukejson.json",
		"testng:target/testng-cucumber-reports/SubscriptionPage/cuketestng.xml" }, features = {"features/SubscriptionPage"})
public class SubscriptionsPageRunner extends AbstractTestNGCucumberParallelTests {
	
	@BeforeClass
	public static void before() {
		System.out.println("Before - "+System.currentTimeMillis());
	}
	
	@AfterClass
	public static void after() {
		System.out.println("After - "+System.currentTimeMillis());
	}

}

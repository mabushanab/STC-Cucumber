package stepdefs;

import java.io.IOException;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;

import ApplicationPages.SubscriptionPage;
import WebConnector.webconnector;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.BeforeStep;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class SubscriptionPageSteps extends webconnector {
    private SubscriptionPage subscriptionPage;
	private String scenDesc;

    public SubscriptionPageSteps() {
        this.subscriptionPage = new SubscriptionPage();
    }
    
    @Before
	public void before(Scenario scenario) {
		this.scenDesc = scenario.getName();
		setUpDriver();
	}
    
    @After
    public void after(Scenario scenario){
    	closeDriver(scenario);
    }
	
	@BeforeStep
	public void beforeStep() throws InterruptedException {
		Thread.sleep(2000);
	}

    @Given("^User Navigate To Subscription Page (.*)$")
    public void aUserNavigateToSubscriptionTypePage(String Country) throws InvalidFormatException, IOException {
        this.subscriptionPage.goToSubscriptionsURL(Country);
    }
    
    @Then("^User Note Type (.*) is Exist$")
    public void aUserVerifySubscriptionType(String Type) throws InvalidFormatException, IOException {
        this.subscriptionPage.verifySubscriptionType(Type);
    }
    
    
    @Then("^User Note The Price (.*) for The Type (.*) with The Country (.*) is correct$")
    public void aUserVerifySubscriptionTypePrice(String Price ,String Type, String Country) throws InvalidFormatException, IOException {
        this.subscriptionPage.verifySubscriptionPrice(Type, Country, Price);
    }

    @Then("^User Note Type (.*) Currency is (.*) for the Country (.*)$")
    public void aUserVerifySubscriptionTypeCurruncy(String Country,String Currency,String Type) throws InvalidFormatException, IOException {
        this.subscriptionPage.verifySubscriptionCurruncy(Type,Currency,Country);
    }
    
    @Then("^User Note (.*) Flag$")
    public void aUserVerifySubscriptionCuntoryFlag(String Country) throws InvalidFormatException, IOException {
        this.subscriptionPage.verifySubscriptionFlag(Country);
    }
}

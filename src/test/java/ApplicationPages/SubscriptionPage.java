package ApplicationPages;

import static WebConnector.webconnector.driver;

import java.io.IOException;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.openqa.selenium.NotFoundException;
import org.openqa.selenium.support.ui.ExpectedConditions;

import WebConnector.webconnector;
import junit.framework.Assert;

public class SubscriptionPage {
	webconnector wc = new webconnector();

	public void goToSubscriptionsURL(String Country) throws InvalidFormatException, IOException {
		switch (Country) {
		case "KSA":
			try {
				driver.get(webconnector.prop.getProperty("KSA_Subscriptions_URL"));
				wc.waitForCondition("PageLoad", "", 60);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			break;
		case "BAH":
			try {
				driver.get(webconnector.prop.getProperty("BAH_Subscriptions_URL"));
				wc.waitForCondition("PageLoad", "", 60);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			break;
		case "KUW":
			try {
				driver.get(webconnector.prop.getProperty("KUW_Subscriptions_URL"));
				wc.waitForCondition("PageLoad", "", 60);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			break;
		default:
			Assert.assertFalse("The Country " + Country + " is Not Exist", true);
		}
	}

	public void verifySubscriptionType(String Type) {

		switch (Type) {
		case "LITE":
			try {
				Assert.assertEquals("LITE", wc.FindAnElement("Lite_text").getText());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			break;
		case "CLASSIC":
			try {
				Assert.assertEquals("CLASSIC", wc.FindAnElement("Classic_text").getText());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			break;
		case "PREMIUM":
			try {
				Assert.assertEquals("PREMIUM", wc.FindAnElement("Premium_text").getText());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			break;
		default:
			Assert.assertFalse("The Type " + Type + " is Not Exist", true);
		}

	}

	public void verifySubscriptionCurruncy(String Country, String currency, String Type) {

		switch (Country) {
		case "KSA":
			try {
				Assert.assertEquals(currency, wc.getElementText("LiteCurrency_text").substring(0, 3));
				Assert.assertEquals(currency, wc.getElementText("ClassicCurrency_text").substring(0, 3));
				Assert.assertEquals(currency, wc.getElementText("PremiumCurrency_text").substring(0, 3));
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			break;
		case "BAH":
			try {
				Assert.assertEquals(currency, wc.getElementText("LiteCurrency_text").substring(0, 3));
				Assert.assertEquals(currency, wc.getElementText("ClassicCurrency_text").substring(0, 3));
				Assert.assertEquals(currency, wc.getElementText("PremiumCurrency_text").substring(0, 3));
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			break;
		case "KUW":
			try {
				Assert.assertEquals(currency, wc.getElementText("LiteCurrency_text").substring(0, 3));
				Assert.assertEquals(currency, wc.getElementText("ClassicCurrency_text").substring(0, 3));
				Assert.assertEquals(currency, wc.getElementText("PremiumCurrency_text").substring(0, 3));
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			break;
		default:
			System.out.println("The Type " + Type);
			System.out.println("The currency " + currency);
			System.out.println("The Country " + Country);
			Assert.assertFalse("The Type " + Type + " is Not Exist", true);
		}
	}

	public void verifySubscriptionPrice(String Type, String Country, String Price) {
		switch (Country) {
		case "KSA":
			switch (Type) {
			case "LITE":
				try {
					Assert.assertEquals(Price, wc.getElementText("LitePrice_text"));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				break;
			case "CLASSIC":
				try {
					Assert.assertEquals(Price, wc.getElementText("ClassicPrice_text"));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				break;
			case "PREMIUM":
				try {
					Assert.assertEquals(Price, wc.getElementText("PremiumPrice_text"));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				break;
			default:
				Assert.assertFalse("The Type " + Type + " is Not Exist", true);
			}
			break;
		case "BAH":
			switch (Type) {
			case "LITE":
				try {
					Assert.assertEquals(Price, wc.getElementText("LitePrice_text"));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				break;
			case "CLASSIC":
				try {
					Assert.assertEquals(Price, wc.getElementText("ClassicPrice_text"));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				break;
			case "PREMIUM":
				try {
					Assert.assertEquals(Price, wc.getElementText("PremiumPrice_text"));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				break;
			default:
				Assert.assertFalse("The Type " + Type + " is Not Exist", true);
			}
			break;
		case "KUW":
			switch (Type) {
			case "LITE":
				try {
					Assert.assertEquals(Price, wc.getElementText("LitePrice_text"));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				break;
			case "CLASSIC":
				try {
					Assert.assertEquals(Price, wc.getElementText("ClassicPrice_text"));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				break;
			case "PREMIUM":
				try {
					Assert.assertEquals(Price, wc.getElementText("PremiumPrice_text"));
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				break;
			default:
				Assert.assertFalse("The Type " + Type + " is Not Exist", true);
			}
			break;
		default:
			Assert.assertFalse("The Country " + Country + " is Not Exist", true);
		}
	}

	public void verifySubscriptionFlag(String Country) {

		switch (Country) {
		case "KSA":
			try {
				wc.PerformActionOnElement("KSA_Flag", "WaitForElementDisplay", "");
			} catch (Exception e) {
				Assert.assertFalse("The Element is not exist", true);
				e.printStackTrace();
			}
			break;
		case "BAH":
			try {
				wc.PerformActionOnElement("BAH_Flag", "WaitForElementDisplay", "");
			} catch (Exception e) {
				Assert.assertFalse("The Element is not exist", true);
				e.printStackTrace();
			}
			break;
		case "KUW":
			try {
				wc.PerformActionOnElement("KUW_Flag", "WaitForElementDisplay", "");
			} catch (Exception e) {
				Assert.assertFalse("The Element is not exist", true);
				e.printStackTrace();
			}
			break;
		default:
			Assert.assertFalse("The Country " + Country + " is Not Exist", true);
		}

	}

}
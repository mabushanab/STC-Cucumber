Feature: KUW Page Verifications

  @KUW_Subscription_Page
  Scenario Outline: Check KUW Types
  	Given User Navigate To Subscription Page <Country>
  	Then User Note Type <Type> is Exist
  	Then User Note The Price <Price> for The Type <Type> with The Country <Country> is correct
  	Then User Note Type <Type> Currency is <Currency> for the Country <Country>
  	Then User Note <Country> Flag
  	
  	Examples:
  	| Type    | Country | Price   | Currency |
  	| LITE    | KUW     | 1.2     | KWD      |
    | CLASSIC | KUW     | 2.5     | KWD      |
  	| PREMIUM | KUW 	| 4.8     | KWD      |

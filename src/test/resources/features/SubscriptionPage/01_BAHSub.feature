Feature: BAH Page Verifications

  @BAH_Subscription_Page
  Scenario Outline: Check BAH Types
  	Given User Navigate To Subscription Page <Country>
  	Then User Note Type <Type> is Exist
  	Then User Note The Price <Price> for The Type <Type> with The Country <Country> is correct
  	Then User Note Type <Type> Currency is <Currency> for the Country <Country>
  	Then User Note <Country> Flag
  	
  	Examples:
  	| Type    | Country | Price | Currency |
  	| LITE    | BAH     | 2     | BHD      |
    | CLASSIC | BAH     | 3     | BHD      |
  	| PREMIUM | BAH 	| 6	    | BHD      |

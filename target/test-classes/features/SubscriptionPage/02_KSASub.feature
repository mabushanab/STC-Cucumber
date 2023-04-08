Feature: KSA Page Verifications

  @KSA_Subscription_Page
  Scenario Outline: Check KSA Types
  	Given User Navigate To Subscription Page <Country>
  	Then User Note Type <Type> is Exist
  	Then User Note The Price <Price> for The Type <Type> with The Country <Country> is correct
  	Then User Note Type <Type> Currency is <Currency> for the Country <Country>
  	Then User Note <Country> Flag
  	
  	Examples:
  	| Type    | Country | Price | Currency |
  	| LITE    | KSA     | 15    | SAR      |
    | CLASSIC | KSA     | 25    | SAR      |
  	| PREMIUM | KSA 	| 60	| SAR      |

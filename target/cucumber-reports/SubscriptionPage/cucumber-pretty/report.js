$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SubscriptionPage/01_BAHSub.feature");
formatter.feature({
  "name": "BAH Page Verifications",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check BAH Types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BAH_Subscription_Page"
    }
  ]
});
formatter.step({
  "name": "User Navigate To Subscription Page \u003cCountry\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "User Note Type \u003cType\u003e is Exist",
  "keyword": "Then "
});
formatter.step({
  "name": "User Note The Price \u003cPrice\u003e for The Type \u003cType\u003e with The Country \u003cCountry\u003e is correct",
  "keyword": "Then "
});
formatter.step({
  "name": "User Note Type \u003cType\u003e Currency is \u003cCurrency\u003e for the Country \u003cCountry\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "User Note \u003cCountry\u003e Flag",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Type",
        "Country",
        "Price",
        "Currency"
      ]
    },
    {
      "cells": [
        "LITE",
        "BAH",
        "2",
        "BHD"
      ]
    },
    {
      "cells": [
        "CLASSIC",
        "BAH",
        "3",
        "BHD"
      ]
    },
    {
      "cells": [
        "PREMIUM",
        "BAH",
        "6",
        "BHD"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check BAH Types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BAH_Subscription_Page"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate To Subscription Page BAH",
  "keyword": "Given "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserNavigateToSubscriptionTypePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type LITE is Exist",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note The Price 2 for The Type LITE with The Country BAH is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypePrice(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type LITE Currency is BHD for the Country BAH",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypeCurruncy(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note BAH Flag",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionCuntoryFlag(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check BAH Types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BAH_Subscription_Page"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate To Subscription Page BAH",
  "keyword": "Given "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserNavigateToSubscriptionTypePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type CLASSIC is Exist",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note The Price 3 for The Type CLASSIC with The Country BAH is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypePrice(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type CLASSIC Currency is BHD for the Country BAH",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypeCurruncy(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note BAH Flag",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionCuntoryFlag(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check BAH Types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BAH_Subscription_Page"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate To Subscription Page BAH",
  "keyword": "Given "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserNavigateToSubscriptionTypePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type PREMIUM is Exist",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note The Price 6 for The Type PREMIUM with The Country BAH is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypePrice(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type PREMIUM Currency is BHD for the Country BAH",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypeCurruncy(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note BAH Flag",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionCuntoryFlag(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/SubscriptionPage/02_KSASub.feature");
formatter.feature({
  "name": "KSA Page Verifications",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check KSA Types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@KSA_Subscription_Page"
    }
  ]
});
formatter.step({
  "name": "User Navigate To Subscription Page \u003cCountry\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "User Note Type \u003cType\u003e is Exist",
  "keyword": "Then "
});
formatter.step({
  "name": "User Note The Price \u003cPrice\u003e for The Type \u003cType\u003e with The Country \u003cCountry\u003e is correct",
  "keyword": "Then "
});
formatter.step({
  "name": "User Note Type \u003cType\u003e Currency is \u003cCurrency\u003e for the Country \u003cCountry\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "User Note \u003cCountry\u003e Flag",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Type",
        "Country",
        "Price",
        "Currency"
      ]
    },
    {
      "cells": [
        "LITE",
        "KSA",
        "15",
        "SAR"
      ]
    },
    {
      "cells": [
        "CLASSIC",
        "KSA",
        "25",
        "SAR"
      ]
    },
    {
      "cells": [
        "PREMIUM",
        "KSA",
        "60",
        "SAR"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check KSA Types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@KSA_Subscription_Page"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate To Subscription Page KSA",
  "keyword": "Given "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserNavigateToSubscriptionTypePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type LITE is Exist",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note The Price 15 for The Type LITE with The Country KSA is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypePrice(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type LITE Currency is SAR for the Country KSA",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypeCurruncy(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note KSA Flag",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionCuntoryFlag(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check KSA Types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@KSA_Subscription_Page"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate To Subscription Page KSA",
  "keyword": "Given "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserNavigateToSubscriptionTypePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type CLASSIC is Exist",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note The Price 25 for The Type CLASSIC with The Country KSA is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypePrice(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type CLASSIC Currency is SAR for the Country KSA",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypeCurruncy(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note KSA Flag",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionCuntoryFlag(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check KSA Types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@KSA_Subscription_Page"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate To Subscription Page KSA",
  "keyword": "Given "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserNavigateToSubscriptionTypePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type PREMIUM is Exist",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note The Price 60 for The Type PREMIUM with The Country KSA is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypePrice(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type PREMIUM Currency is SAR for the Country KSA",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypeCurruncy(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note KSA Flag",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionCuntoryFlag(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/SubscriptionPage/03_KUWSub.feature");
formatter.feature({
  "name": "KUW Page Verifications",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check KUW Types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@KUW_Subscription_Page"
    }
  ]
});
formatter.step({
  "name": "User Navigate To Subscription Page \u003cCountry\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "User Note Type \u003cType\u003e is Exist",
  "keyword": "Then "
});
formatter.step({
  "name": "User Note The Price \u003cPrice\u003e for The Type \u003cType\u003e with The Country \u003cCountry\u003e is correct",
  "keyword": "Then "
});
formatter.step({
  "name": "User Note Type \u003cType\u003e Currency is \u003cCurrency\u003e for the Country \u003cCountry\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "User Note \u003cCountry\u003e Flag",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Type",
        "Country",
        "Price",
        "Currency"
      ]
    },
    {
      "cells": [
        "LITE",
        "KUW",
        "1.2",
        "KWD"
      ]
    },
    {
      "cells": [
        "CLASSIC",
        "KUW",
        "2.5",
        "KWD"
      ]
    },
    {
      "cells": [
        "PREMIUM",
        "KUW",
        "4.8",
        "KWD"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check KUW Types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@KUW_Subscription_Page"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate To Subscription Page KUW",
  "keyword": "Given "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserNavigateToSubscriptionTypePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type LITE is Exist",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note The Price 1.2 for The Type LITE with The Country KUW is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypePrice(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type LITE Currency is KWD for the Country KUW",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypeCurruncy(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note KUW Flag",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionCuntoryFlag(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check KUW Types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@KUW_Subscription_Page"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate To Subscription Page KUW",
  "keyword": "Given "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserNavigateToSubscriptionTypePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type CLASSIC is Exist",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note The Price 2.5 for The Type CLASSIC with The Country KUW is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypePrice(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type CLASSIC Currency is KWD for the Country KUW",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypeCurruncy(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note KUW Flag",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionCuntoryFlag(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check KUW Types",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@KUW_Subscription_Page"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Navigate To Subscription Page KUW",
  "keyword": "Given "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserNavigateToSubscriptionTypePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type PREMIUM is Exist",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note The Price 4.8 for The Type PREMIUM with The Country KUW is correct",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypePrice(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note Type PREMIUM Currency is KWD for the Country KUW",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionTypeCurruncy(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User Note KUW Flag",
  "keyword": "Then "
});
formatter.match({
  "location": "SubscriptionPageSteps.aUserVerifySubscriptionCuntoryFlag(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
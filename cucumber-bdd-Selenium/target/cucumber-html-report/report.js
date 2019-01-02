$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("facebookfeature.feature");
formatter.feature({
  "line": 2,
  "name": "Facebook Login",
  "description": "       Login into a facebook as a normal user",
  "id": "facebook-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Login with valid credentials",
  "description": "",
  "id": "facebook-login;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User should be on Facebook\u0027s page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters his/her valid id in the id field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the password in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The user should not get login into the facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Check the title of the page.",
  "keyword": "And "
});
formatter.match({
  "location": "Different_data.User_FB_Page()"
});
formatter.result({
  "duration": 5333213738,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.user_enters_his_her_valid_id_in_the_id_field()"
});
formatter.result({
  "duration": 3709060837,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.the_password_in_the_password_field()"
});
formatter.result({
  "duration": 108770226,
  "status": "passed"
});
formatter.match({
  "location": "Different_data.Clicks_Button()"
});
formatter.result({
  "duration": 1643018251,
  "status": "passed"
});
formatter.match({
  "location": "Different_data.User_Not_Get_Login()"
});
formatter.result({
  "duration": 13420033,
  "status": "passed"
});
formatter.match({
  "location": "Different_data.Title_Of_Page()"
});
formatter.result({
  "duration": 10756675,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Login with different credentials",
  "description": "",
  "id": "facebook-login;login-with-different-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User should be on Facebook\u0027s page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters his/her valid id i.e. \"\u003cid\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the password i.e \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "The user should not get login into the facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Check the title of the page.",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "facebook-login;login-with-different-credentials;",
  "rows": [
    {
      "cells": [
        "id",
        "password"
      ],
      "line": 22,
      "id": "facebook-login;login-with-different-credentials;;1"
    },
    {
      "cells": [
        "xyz@gmail.com",
        "1234566732"
      ],
      "line": 23,
      "id": "facebook-login;login-with-different-credentials;;2"
    },
    {
      "cells": [
        "xyz@yahoo.com",
        "78789779723"
      ],
      "line": 24,
      "id": "facebook-login;login-with-different-credentials;;3"
    },
    {
      "cells": [
        "xyz@hotmail.com",
        "986gvjbh0"
      ],
      "line": 25,
      "id": "facebook-login;login-with-different-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Login with different credentials",
  "description": "",
  "id": "facebook-login;login-with-different-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User should be on Facebook\u0027s page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters his/her valid id i.e. \"xyz@gmail.com\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the password i.e \"1234566732\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "The user should not get login into the facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Check the title of the page.",
  "keyword": "And "
});
formatter.match({
  "location": "Different_data.User_FB_Page()"
});
formatter.result({
  "duration": 3448459983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@gmail.com",
      "offset": 35
    }
  ],
  "location": "Different_data.User_Id(String)"
});
formatter.result({
  "duration": 3594745040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234566732",
      "offset": 18
    }
  ],
  "location": "Different_data.User_Password(String)"
});
formatter.result({
  "duration": 129146220,
  "status": "passed"
});
formatter.match({
  "location": "Different_data.Clicks_Button()"
});
formatter.result({
  "duration": 11298299128,
  "status": "passed"
});
formatter.match({
  "location": "Different_data.User_Not_Get_Login()"
});
formatter.result({
  "duration": 4768704,
  "status": "passed"
});
formatter.match({
  "location": "Different_data.Title_Of_Page()"
});
formatter.result({
  "duration": 11239603,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Login with different credentials",
  "description": "",
  "id": "facebook-login;login-with-different-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User should be on Facebook\u0027s page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters his/her valid id i.e. \"xyz@yahoo.com\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the password i.e \"78789779723\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "The user should not get login into the facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Check the title of the page.",
  "keyword": "And "
});
formatter.match({
  "location": "Different_data.User_FB_Page()"
});
formatter.result({
  "duration": 3467828738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@yahoo.com",
      "offset": 35
    }
  ],
  "location": "Different_data.User_Id(String)"
});
formatter.result({
  "duration": 1202376417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "78789779723",
      "offset": 18
    }
  ],
  "location": "Different_data.User_Password(String)"
});
formatter.result({
  "duration": 136339804,
  "status": "passed"
});
formatter.match({
  "location": "Different_data.Clicks_Button()"
});
formatter.result({
  "duration": 3044141017,
  "status": "passed"
});
formatter.match({
  "location": "Different_data.User_Not_Get_Login()"
});
formatter.result({
  "duration": 5458541,
  "status": "passed"
});
formatter.match({
  "location": "Different_data.Title_Of_Page()"
});
formatter.result({
  "duration": 15759164,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Login with different credentials",
  "description": "",
  "id": "facebook-login;login-with-different-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User should be on Facebook\u0027s page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User enters his/her valid id i.e. \"xyz@hotmail.com\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the password i.e \"986gvjbh0\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "The user should not get login into the facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Check the title of the page.",
  "keyword": "And "
});
formatter.match({
  "location": "Different_data.User_FB_Page()"
});
formatter.result({
  "duration": 3357564078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@hotmail.com",
      "offset": 35
    }
  ],
  "location": "Different_data.User_Id(String)"
});
formatter.result({
  "duration": 2684177228,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "986gvjbh0",
      "offset": 18
    }
  ],
  "location": "Different_data.User_Password(String)"
});
formatter.result({
  "duration": 129780597,
  "status": "passed"
});
formatter.match({
  "location": "Different_data.Clicks_Button()"
});
formatter.result({
  "duration": 11909561427,
  "status": "passed"
});
formatter.match({
  "location": "Different_data.User_Not_Get_Login()"
});
formatter.result({
  "duration": 7389828,
  "status": "passed"
});
formatter.match({
  "location": "Different_data.Title_Of_Page()"
});
formatter.result({
  "duration": 7623612,
  "status": "passed"
});
});
@Test
Feature: Facebook Login
         Login into a facebook as a normal user

  
  Scenario: Login with valid credentials
    Given User should be on Facebook's page
    When User enters his/her valid id in the id field
    And the password in the password field
    And Clicks on Login button
    Then The user should not get login into the facebook
    And Check the title of the page.
    
    Scenario Outline: Login with different credentials
              Given User should be on Facebook's page
              When User enters his/her valid id i.e. "<id>" in the username field
              And the password i.e "<password>" in password field
              And Clicks on Login button
              Then The user should not get login into the facebook
              And Check the title of the page.
    Examples:
            |  id           | password  |
            |xyz@gmail.com  | 1234566732|
            |xyz@yahoo.com  |78789779723|
            |xyz@hotmail.com|  986gvjbh0|
    
    
  
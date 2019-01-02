Feature: Facebook Login

 Scenario: Login into the facebook via invalid credentials
          Given User should be on Facebook login page
          When user enters username and password
          |asc@gmail.com| 12345467|
          And clicks on Login button
          Then user should not logged into the facebook
         
 
 
          
          
          
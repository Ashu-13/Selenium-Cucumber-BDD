package com.demo.step_defs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

import com.demo.runnerPack.SuiteRunner;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Scenario_Outline_Diff_DataSet {


	//Directing the user on the facebook's url
	
	@Given("^User should be on Facebook's page$")
	public void User_FB_Page(){
		
		SuiteRunner.driver.get("http://www.facebook.com");
		SuiteRunner.driver.navigate().refresh();
	}
	
	
	// Passing the username to enter into the username field
	
	@When("^User enters his/her valid id i.e. \"([^\"]*)\" in the username field$")
	public void User_Id(String id){
		SuiteRunner.driver.findElement(By.id("email")).sendKeys(id);
		
		
	}
	
	
	//Passing the password to enter into password field
	
	@And("^the password i.e \"([^\"]*)\" in password field$")
	public void User_Password(String password){
		
		SuiteRunner.driver.findElement(By.id("pass")).sendKeys(password);
	}
	
	//Clicking on the facebook's login button
	
   @And("^Clicks on Login button$")
   public void Clicks_Button(){
	   
	   SuiteRunner.driver.findElement(By.xpath("//input[@value='Log In']")).click();
	   
   }
   
   
   //Wait for loading of the page
   
   @Then("^The user should not get login into the facebook$")
   public void User_Not_Get_Login(){
	   
	   SuiteRunner.driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
	   
	   
   }
   
   
   //Print the received title of the page
   
   @And("^Check the title of the page.$")
   public void Title_Of_Page(){
	  String pagetitle=  SuiteRunner.driver.getTitle();
	   System.out.println("The title of the page is "  +pagetitle);
	   
	   
   }
}

package com.demo.step_defs;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.demo.runnerPack.SuiteRunner;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataTable_StepDef {
	
	
	
	
	WebDriverWait wait = null;
	
	@Given("^User should be on Facebook login page$")
	public void User_On_Faceboook_Login_Page(){
		
		SuiteRunner.driver.get("http:wwww.facebook.com");
		SuiteRunner.driver.navigate().refresh();
	}
	
	@When("^user enters username and password$")  //Fetching whole data via creating a object of DataTable from feature file 
    public void User_Login_Id_Password(DataTable data){
    	List<List<String>> invalidcred =data.raw();
    	SuiteRunner.driver.findElement(By.id("email")).clear();
    	SuiteRunner.driver.findElement(By.id("email")).sendKeys(invalidcred.get(0).get(0));
    	SuiteRunner.driver.findElement(By.id("pass")).clear();
    	SuiteRunner.driver.findElement(By.id("pass")).sendKeys(invalidcred.get(0).get(1));
    
    	}
	
	@And("^clicks on Login button$")
	public void clicks_Login_Button(){
		
		SuiteRunner.driver.findElement(By.xpath("//input[@value='Log In']")).click();
	    SuiteRunner.driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
	}

	@Then("^user should not logged into the facebook$")
	public void User_Not_Get_Logged_In(){
		
	    String recoveraccpage=	SuiteRunner.driver.getTitle();
		System.out.println("The user is on this page as of now " +recoveraccpage);
	}
}

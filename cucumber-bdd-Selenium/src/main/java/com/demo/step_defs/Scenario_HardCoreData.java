package com.demo.step_defs;

import static org.hamcrest.MatcherAssert.assertThat;

// Matcher with the hamcrest
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;

import org.hamcrest.core.IsEqual;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.demo.runnerPack.SuiteRunner;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.bytebuddy.matcher.EqualityMatcher;

public class Scenario_HardCoreData {

	@When("^the password in the password field$")
	public void the_password_in_the_password_field() throws Throwable {

		SuiteRunner.driver.findElement(By.id("pass")).sendKeys("1234567890");

	}

	@When("^User enters his/her valid id in the id field$")
	public void user_enters_his_her_valid_id_in_the_id_field() throws Throwable {

		WebDriverWait wait = new WebDriverWait(SuiteRunner.driver, 20);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("email")));
		SuiteRunner.driver.findElement(By.id("email")).sendKeys("xyz.gmail.com");

	}

}

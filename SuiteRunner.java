package runnerPack;




import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( 
		features= "src/main/resources/",
		
		glue= "loginPack",
		tags= {"@Test"},
				plugin = { "html:target/cucumber-html-report/"},
				 monochrome = true
		)
public class SuiteRunner {

	
	public static WebDriver driver = null;
	
	
	@BeforeClass
	public static void beforeTest(){
		
		System.setProperty("webdriver.chrome.driver", "C:\\WebDrivers\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.navigate().refresh();
		
	}
	@AfterClass
	public static void Tear_down(){
		driver.close();
		
	}
	
}

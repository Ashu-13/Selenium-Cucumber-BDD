$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/facebookfeature.feature");
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
  "name": "User should be on Facebook page",
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
  "name": "clicks on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user should get login into the facebook",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "check the title of the page.",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookLogin.user_should_be_on_Facebook_page()"
});
formatter.result({
  "duration": 20965464191,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.user_enters_his_her_valid_id_in_the_id_field()"
});
formatter.result({
  "duration": 3698685431,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.the_password_in_the_password_field()"
});
formatter.result({
  "duration": 145727223,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.clicks_on_the_Login_button()"
});
formatter.result({
  "duration": 1678434020,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.the_user_should_get_login_into_the_facebook()"
});
formatter.result({
  "duration": 8391193,
  "status": "passed"
});
formatter.match({
  "location": "FacebookLogin.check_the_title_of_the_page()"
});
formatter.result({
  "duration": 10758629,
  "error_message": "java.lang.SecurityException: class \"org.hamcrest.Matchers\"\u0027s signer information does not match signer information of other classes in the same package\r\n\tat java.lang.ClassLoader.checkCerts(ClassLoader.java:898)\r\n\tat java.lang.ClassLoader.preDefineClass(ClassLoader.java:668)\r\n\tat java.lang.ClassLoader.defineClass(ClassLoader.java:761)\r\n\tat java.security.SecureClassLoader.defineClass(SecureClassLoader.java:142)\r\n\tat java.net.URLClassLoader.defineClass(URLClassLoader.java:468)\r\n\tat java.net.URLClassLoader.access$100(URLClassLoader.java:74)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:369)\r\n\tat java.net.URLClassLoader$1.run(URLClassLoader.java:363)\r\n\tat java.security.AccessController.doPrivileged(Native Method)\r\n\tat java.net.URLClassLoader.findClass(URLClassLoader.java:362)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:424)\r\n\tat sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:349)\r\n\tat java.lang.ClassLoader.loadClass(ClassLoader.java:357)\r\n\tat loginPack.FacebookLogin.check_the_title_of_the_page(FacebookLogin.java:114)\r\n\tat ✽.And check the title of the page.(src/main/resources/facebookfeature.feature:12)\r\n",
  "status": "failed"
});
});
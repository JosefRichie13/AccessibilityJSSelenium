@AutomatedTests
@LoginAndLogout

Feature: User login and logout scenarios

  Scenario: Valid user login
    Given I open the web page
    When I wait for "5" seconds
    Then I do an accessibility check for the "Login" Page
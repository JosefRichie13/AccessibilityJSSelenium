@AutomatedTests
@Accessibility

Feature: I check the accessibility for various pages in the webpage

  # Scenario: Login Page
  #   Given I open the web page
  #   When I wait for "5" seconds
  #   Then I do an accessibility check for the "Login" Page


  Scenario: Home Page
    Given I open the web page
    And I login as a standard user
    And I click on the "site" menu
    And I click on the "sort" menu
    When I wait for "5" seconds
    Then I do an accessibility check for the "Home" Page


  # Scenario: Product Page  
  #   Given I open the web page
  #   And I login as a standard user
  #   And I open a product page
  #   When I wait for "5" seconds
  #   Then I do an accessibility check for the "Product" Page
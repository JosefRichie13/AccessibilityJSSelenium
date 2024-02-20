@AutomatedTests
@Accessibility

Feature: I check the accessibility for various pages in the webpage

  Scenario: Login Page
    Given I open the web page
    When I wait for "5" seconds
    Then I do an accessibility check for the "Login" Page


  Scenario: Home Page
    Given I open the web page
    And I login as a standard user
    And I click on the "site" menu
    And I click on the "sort" menu
    When I wait for "5" seconds
    Then I do an accessibility check for the "Home" Page


  Scenario: Product Page  
    Given I open the web page
    And I login as a standard user
    And I open a product page
    When I wait for "5" seconds
    Then I do an accessibility check for the "Product" Page


  Scenario: Cart Page  
    Given I open the web page
    And I login as a standard user
    And I add a product to the cart
    And I go to the cart
    When I wait for "5" seconds
    Then I do an accessibility check for the "Cart" Page  


  Scenario: Checkout Page
    Given I open the web page
    And I login as a standard user
    And I add a product to the cart
    And I go to the cart
    And I checkout of the cart
    When I wait for "5" seconds
    Then I do an accessibility check for the "Checkout" Page      


  Scenario: Shipping Page
    Given I open the web page
    And I login as a standard user
    And I add a product to the cart
    And I go to the cart
    And I checkout of the cart
    And I enter my information to continue
      | FirstName | LastName | Zip   |
      | John      | Doe      | 37188 |
    When I wait for "5" seconds
    Then I do an accessibility check for the "Checkout" Page    


  Scenario: Shopping Finished Page
    Given I open the web page
    And I login as a standard user
    And I add a product to the cart
    And I go to the cart
    And I checkout of the cart
    And I enter my information to continue
      | FirstName | LastName | Zip   |
      | John      | Doe      | 37188 |
    And I confirm my order  
    When I wait for "5" seconds
    Then I do an accessibility check for the "Finish" Page     


  Scenario: A Page with many Violations
    Given I open the web page with many violations
    When I wait for "5" seconds
    Then I do an accessibility check for the "PageWithViolations" Page  
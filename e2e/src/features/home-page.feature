Feature: As a user I expect to be able to navigate to the home page, that has a very long sentence, that could potentioally fall of the entire screen...

  @dev
  @regression
  Scenario: As a user I expect to be able to see contacts
    Given I am on the 'home' page
    Then the 'contacts header' should contain the text 'Contacts'
    And the 'header logo' should be displayed

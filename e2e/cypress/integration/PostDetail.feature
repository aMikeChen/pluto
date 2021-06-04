Feature: Post detail

  Scenario: Displaying post detail
    Given a post as below
    | content                     |
    | Give me some money please   |
    And I am on the post page
    Then I see the post detail

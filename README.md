# Tic Tac Toe

This game will be for two users, playing on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player.

This project will challenge your knowledge of React but should also be an exercise in creating good user experiences. Your view should be styled to look good as well as function flawlessly.

### User Stories:

- As a user, I should start off seeing a 3x3 grid on the main page.
  - branch: grid
  - created our 3x3 gameboard
  - added very little styling so far
- As a user, I should be able to click on a square to mark it.
- As a user, my partner should be able to click on a square after me and see their mark.
  - branch: taking-turns
  - created turns functionality
  - added ❌'s and ⭕️'s to the board
  - created turns display
- As a user, I shouldn't be able to click on a square that has already been selected.
  - branch: disable-click
  - added an if statement to check value of `this.state.square[index]`
- As a user, when someone has won the game (3 squares in a row: horizontally, vertically, or diagonally) I should see a notice telling me who won.
  - branch: winning
  - added win conditions
  - created a function that runs after the turn function with a 1 ms delay to run the win condition function
  - changed the h3 to say who won
- As a user, I should not be able to continue playing the game after the game has been won.
  - branch: someone-won
  - added a condition to `this.setState` square values to change to null when someone wins
- As a user, if there are no more squares available, I should see a notice telling me that the game has ended.
  - branch: draw
  - added condition to show a draw if no one wins
- As a user, I should see a restart button that when clicked will clear the gameboard.
  - branch: restart
  - created a component named restart and passed hadleRestart to clear the board

### Stretch Goals:

- As a user, I can see a notification that informs me whether it is currently player one's or player two's turn.
- As a user, I can choose my marker (X, O, a color, an emoji, etc...).

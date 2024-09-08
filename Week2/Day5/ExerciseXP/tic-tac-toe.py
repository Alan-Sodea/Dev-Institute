# Function to display the board
def display_board(board):
    print('*************')
    for row in board:
        print('| ' + ' | '.join(row) + ' |')
        print('*************')

# Function to get the player's input
def player_input(player, board):
    while True:
        try:
            row = int(input(f"Player {player}, enter row (1-3): ")) - 1
            col = int(input(f"Player {player}, enter column (1-3): ")) - 1
            if board[row][col] == ' ':
                board[row][col] = player
                break
            else:
                print("This spot is already taken. Try again.")
        except (ValueError, IndexError):
            print("Invalid input. Please enter a valid row and column.")

# Function to check for a win or tie
def check_win(board):
    # Check rows, columns, and diagonals
    win_conditions = [
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
    ]
    for condition in win_conditions:
        if condition[0] == condition[1] == condition[2] and condition[0] != ' ':
            return condition[0]
    return None

# Function to check if the board is full (for a tie)
def check_tie(board):
    for row in board:
        if ' ' in row:
            return False
    return True

# Main game loop
def play():
    board = [[' ' for _ in range(3)] for _ in range(3)]  # Create a 3x3 board
    current_player = 'X'
    winner = None

    while not winner:
        display_board(board)
        player_input(current_player, board)

        # Check if there is a winner
        winner = check_win(board)
        if winner:
            display_board(board)
            print(f"Player {winner} wins!")
            break

        # Check for a tie
        if check_tie(board):
            display_board(board)
            print("It's a tie!")
            break

        # Switch player
        current_player = 'O' if current_player == 'X' else 'X'

# Run the game
if __name__ == "__main__":
    play()

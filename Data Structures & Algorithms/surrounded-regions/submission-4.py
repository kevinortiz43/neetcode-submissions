class Solution:
    def solve(self, board: List[List[str]]) -> None:
        ROW = len(board)
        COL = len(board[0])
        COPY = board
        
        print(ROW)
        print(COL)

        def dfs(R,C):
            if R < 0 or C < 0 or R==ROW or C == COL or board[R][C] != "O":
                return board
            board[R][C] = "none"

            dfs(R-1,C)
            dfs(R+1,C)
            dfs(R,C-1)
            dfs(R,C+1)
        
        for R in range(ROW):
            if board [R][0] == "O":
                dfs(R,0)
            if board [R][COL-1] == "O":
                dfs(R,COL-1)

        for C in range(COL):
            if board [0][C] == "O":
                dfs(0,C)
            if board [ROW-1][C] == "O":
                dfs(ROW-1,C)

        print(board)    
        for i in range(ROW):

            for j in range(COL):
                if board[i][j] == "O": 
                    board[i][j]= "X"
                if board[i][j] == "none":
                    board[i][j] ="O"

                




        
        

        
# board=[["O","X","X","O","X"],["X","O","O","X","O"],["X","O","X","O","X"],["O","X","O","O","O"],["X","X","O","X","O"]]

# OUR OUPUT
# ["O","X","X","O","X"],
# ["X","X","X","X","O"],
# ["X","X","X","X","X"],
# ["O","X","X","X","O"],
# ["X","X","O","X","O"]

# EXPECTED
# ["O","X","X","O","X"],
# ["X","X","X","X","O"],
# ["X","X","X","O","X"],
# ["O","X","O","O","O"],
# ["X","X","O","X","O"]


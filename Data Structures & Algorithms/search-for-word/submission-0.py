class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:

        letter = 0 
        # print(word[letter])
        COL= len(board[0])
        ROW = len(board)

        visited = [[False for _ in range(COL)] for _ in range(ROW)]

        def DFS(r,c,let):
                
            if len(word) == let: return True
                
                # outter bounds conditions
            if r<0: return False
            if c<0: return False
            if r>= ROW: return False
            if c>= COL: return False
            if word[let] != board[r][c]: return False 

                # visited conditions
            if visited[r][c] == True: return False
            visited[r][c] =True


            res = (DFS(r + 1, c, let + 1) or DFS(r - 1, c, let + 1) or DFS(r, c + 1, let + 1) or DFS (r, c - 1, let + 1))
               
            visited[r][c] = False
               
            return res


        for r in range(ROW):
            
            for c in range(COL):
            
                if DFS(r,c,letter) == True: return True
    
        return False
class Solution:
    def scoreOfString(self, s: str) -> int:
        

        
        # //The score of a string is defined as the sum of the absolute difference 
        # // between the ASCII values of adjacent characters.

        # //  c      o      o     d    d       e
        # // |99 - 111 | + |111  100 | 100 - 101
        
        # // sliding window or two pointer (tortoise and hare)  strategy 

        # // either we turn string into ascii or 
        # // every two characters we turn them into ascii 

        # // then substract the two characters and get the abs value

        # //add the value to the sum variable

        # // we stop at one less of the lenght of the s

        # // what do we need?
        # // while to traverse
        # // two points 
        # // sum variable
        # //  a way to get ascii of letters
        # // an abs function in ts.


        slow = 0
        fast = 1
        sum = 0

        while fast < len(s):
            sum += abs(ord(s[slow]) - ord(s[fast]))
            slow+=1
            fast+=1

        return sum
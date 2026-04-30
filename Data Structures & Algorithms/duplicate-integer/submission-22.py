class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # place every number from list into set
        # if number is already in set then ret true
        my_set = set()
        for num in nums:

            if num in my_set:
                return True

            my_set.add(num)
        
        return False
class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:

        # intial max is -1 because we are starting from the end of the array

        # reverse iteration, at the end of the list and work backwards

        # new max = max(oldmax, arr[i])

        rightMax = -1

        for i in range(len(arr) - 1, -1,-1):
            newMax = max(rightMax,arr[i])
            arr[i] = rightMax
            rightMax = newMax
        return arr

        
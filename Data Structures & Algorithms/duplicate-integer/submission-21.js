class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

       
        // 1,2,3,3
        // for loop
        // count every number = counter var
        // brute is 
        // for loop, count O(n)
        
        
        // better way of doing it 
        // sliding window
        // slow / fast pointer
        // if slow === fast then return true
        // if slow gets to the length of array return false

        //better way is hashmap or hashset
        //  place the numbers from array into DS
        // if the number from array is already in the DS
        // then return true immediately


        // need a for loop to place items from array into 
        // hashmap or set
        let mySet = new Set();
        for(let i of nums){
            console.log(i)

            if(mySet.has(i))
            {
                return true;
            }

            mySet.add(i)
            

        }
        return false;
        
    }
}

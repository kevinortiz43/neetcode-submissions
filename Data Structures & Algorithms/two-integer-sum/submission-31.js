class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // need the target

        // target minus an element in the array
        // equals a correctNumber then we look for that number
        // 7 - 3 = 4 
        // then return index of 3 and 4 [0,1]

        // we could use a double for loop
        // better, we can use hashmap
        // place the numbers of the array into hashmap
        // then if we find the diff then use hashmap .has function
        // set .has function works well

        const hashMap = new Map();
        // nums.forEach((val,index)=>{
        //     hashMap.set(val,index)
        // })

        for(let i =0; i<nums.length; i++){
            let difference= target-nums[i]

            if(hashMap.has(difference))
                {
                    return [hashMap.get(difference),i]
                }
                hashMap.set(nums[i],i)
            }
   
        return [];
        }
  




    }

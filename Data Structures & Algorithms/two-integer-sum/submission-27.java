class Solution {
    public int[] twoSum(int[] nums, int target) {

        HashMap <Integer, Integer> twoSumMap = new HashMap<>();
        
        for(int i = 0; i<nums.length; i++){


            int difference = target - nums[i];

            if(twoSumMap.containsKey(difference)){

                return new int[] {twoSumMap.get(difference), i};
            }

                twoSumMap.put(nums[i],i);
        }

        return nums;
    }

}

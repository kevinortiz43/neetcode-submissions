class Solution {
    public int[] twoSum(int[] nums, int target) {

        HashMap<Integer, Integer> twoSumHash = new HashMap<>();

        for(int i=0; i<nums.length; i++){

            int difference = target - nums[i];

            if(twoSumHash.containsKey(difference))
            {
                return new int[] {twoSumHash.get(difference), i};
            }

            twoSumHash.put(nums[i],i);
        }
        return nums;
        
    }
}

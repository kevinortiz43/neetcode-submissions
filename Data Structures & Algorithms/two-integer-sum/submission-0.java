class Solution {
    public int[] twoSum(int[] nums, int target) {

        HashMap<Integer, Integer> twoIntMap = new HashMap<>();

        for(int i=0; i<nums.length; i++){

            int difference = target -nums[i];

            if(twoIntMap.containsKey(difference)){
                return new int[] {twoIntMap.get(difference),i};

            }
            twoIntMap.put(nums[i],i);




        }
        return nums;
        
    }
}

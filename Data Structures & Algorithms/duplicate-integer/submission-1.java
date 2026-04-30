class Solution {
    public boolean hasDuplicate(int[] nums) {
        HashSet<Integer> duplicateCounter = new HashSet<>();
    
        for(int i : nums){
         if(duplicateCounter.contains(i)){
                return true;
            }

        duplicateCounter.add(i);
        }


      return false;


    }
}

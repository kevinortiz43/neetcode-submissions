class Solution {
    public boolean hasDuplicate(int[] nums) {
 
        HashSet <Integer> hasDuplicateHash = new HashSet<>();
        
        for(int num : nums){
            if(hasDuplicateHash.contains(num)){
                return true;
            }
            hasDuplicateHash.add(num);
        }
        return false;
    }
}

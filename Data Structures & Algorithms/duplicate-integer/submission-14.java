class Solution {
    public boolean hasDuplicate(int[] nums) {

        HashSet<Integer> hasDuplicateHash = new HashSet<>();

        for(Integer j :nums){
            if(hasDuplicateHash.contains(j)){
                return true;
            }
            hasDuplicateHash.add(j);
        }
 
     return false;
    }
}

class Solution {
    public boolean hasDuplicate(int[] nums) {
 
        // input arrays
        // output boolean

        // brute force = two pointers to check every number in the array and if a number shows up >1 return true O(n)
        // optimal = use hashmap to put all the array numbers in the hashmap and use the contains method to return true O(n) time
        // O(1) space

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

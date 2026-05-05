class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {

        // s has to be subsequence of t 

        // if t < s then return false 

        if(t.length < s.length) return false;

        // what we can do is check if the same letters in s are in t 
        // in the same order but not the same placement

        // a c e
        // abcde

        // brute force solution, double for loop start with the first letter of string s
        // start with first letter of string t

        // one solution, sliding window, 

        let LeftPointer = 0;
        let RightPointer = 0;

        while (RightPointer<t.length){

            if(s[LeftPointer]===t[RightPointer]){
                LeftPointer++;

            }
            RightPointer++;

            
        }
        if(LeftPointer ===s.length) return true;

        return false;
    }
}

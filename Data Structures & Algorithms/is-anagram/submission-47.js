class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length){
            return false;
        }

        let sSorted = s.split('').sort().join('');
        let tSorted = t.split('').sort().join('');
     
        for(let i in sSorted){
            if(sSorted[i] !== tSorted[i]){
                return false
            }
        }
    return true;

        
        // place s in a hashmap
        


        // loop through t, if t has the same 
        // letters and amount then return true; 



        


    }
}

class Solution {
    public boolean isAnagram(String s, String t) {

        // input: two strings
        // output boolean
        // count the letters in each 
        // using hashmap you can see how many times each letter shows up
        // use a contains maethod and delete each letter. it should be zero

        // edge: if the two strings size do not match up then it is auto false

        char[] s_array = s.toCharArray();
        char[] t_array = t.toCharArray();

        Arrays.sort(s_array);
        Arrays.sort(t_array);

        if(s_array.length != t_array.length){
            return false;
        }

        for(int i=0; i<s_array.length; i++){
            if(s_array[i]!= t_array[i]){
                return false;
            }

        }


        return true;

    }
}

class Solution {
    public boolean isAnagram(String s, String t) {
            HashMap<Character, Integer> anagramMap = new HashMap<>();

        if(s.length() != t.length()){
            return false;
        }

        for(Character s_String : s.toCharArray()){
            int count = anagramMap.getOrDefault(s_String, 0);
            anagramMap.put(s_String, count+1);
        }



        for(Character t_String : t.toCharArray()){

            if(!anagramMap.containsKey(t_String)){

                return false; 
            }

            anagramMap.put(t_String, anagramMap.get(t_String)-1);

            if(anagramMap.get(t_String) <0){
                return false;
            }




        }

        return true;

    }
}

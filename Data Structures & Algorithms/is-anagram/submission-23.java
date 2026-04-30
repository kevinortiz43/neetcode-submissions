class Solution {
    public boolean isAnagram(String s, String t) {
        char[] s_Character = s.toCharArray(); 
        char[] t_Character = t.toCharArray();

        Arrays.sort(s_Character);
        Arrays.sort(t_Character);

        if(s.length() != t.length()){
            return false;
        }

        for(int i=0; i<s.length(); i++){
            
            if(s_Character[i] != t_Character[i])
            {
                return false;
            }

        }
return true;

    }
}

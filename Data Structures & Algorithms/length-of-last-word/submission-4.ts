class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {

        // we have multiple words in s

        // description
        // we need to get the last word, and count every character
        // until we reach an empty space eg " "
        // return the counter

        // plan
        // start from the end of the string
        // while loop, continue until we reach an empty character
        // return that count

        // what do we need
        // count variable
        // while loop 
        // a way to reach the last character of the string



        let newWord = s.trimEnd()
        let lastInd:number = newWord.length-1;
        let count:number = 0;
        console.log(newWord[lastInd])

        // if(newWord === " ") return 0;
        if(newWord.length ===1 && typeof newWord[0] === "string") return 1;
        
        while(newWord[lastInd] !== " "){

            count++
            lastInd--;
        }
        


        return count;

    }
}

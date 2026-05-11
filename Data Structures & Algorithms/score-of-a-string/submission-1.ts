class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {

        //The score of a string is defined as the sum of the absolute difference 
        // between the ASCII values of adjacent characters.

        //  c      o      o     d    d       e
        // |99 - 111 | + |111  100 | 100 - 101
        
        // sliding window or two pointer (tortoise and hare)  strategy 

        // either we turn string into ascii or 
        // every two characters we turn them into ascii 

        // then substract the two characters and get the abs value

        //add the value to the sum variable

        // we stop at one less of the lenght of the s

        // what do we need?
        // for loop to traverse
        // two points 
        // sum variable
        //  a way to get ascii of letters
        // an abs function in ts.

        let sum:number = 0;
        if(s.length<1) return 0;
        let slow:number=0;
        let fast:number=1;
        while(fast < s.length){
            sum = sum + Math.abs(s.charCodeAt(slow) -s.charCodeAt(fast))
            slow++
            fast++
        }
        return sum;



    }
}

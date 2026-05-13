class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {

        // problem description
        // details provide info about a given passenger
        // first tehn char is phone# index 0 - 9
        // gender = index 10
        // next two are age so index 11,12
        // last to char or index 13,14 are the seat numbers

        // so we need to go into sub array of array
        // indx 11 & 12


        // double for loop or double wile loop

        // one loop to goo inside the array

        // second loop or just if statement checks the age
        
        // we join index 11 and 12. convert it to number 
        // if statement to ensure the number is above 60,
        // if true increase counter

        // need a counter. 
        
        let counter:number=0;
        
        for (let val of details){

            let  age:string = `${val[11]}${val[12]}`
            let num = Number(age)
            console.log(typeof num)
            console.log(num)
            if(num>60){
                counter++
            }
        }
        return counter;
    }
}

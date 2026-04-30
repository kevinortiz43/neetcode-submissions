class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {

      let arr =  nums.concat(nums);
        // console.log(arr);
        return arr;
    // return [...nums,...nums]

    }
}

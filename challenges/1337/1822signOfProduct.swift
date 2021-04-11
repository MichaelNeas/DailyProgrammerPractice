// There is a function signFunc(x) that returns:
// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.
// Return signFunc(product).

class Solution {
    func arraySign(_ nums: [Int]) -> Int {
        nums.reduce(1, { $0 * $1.signum() })
    }
}
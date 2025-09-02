// Array Problem 1

// Problem:
// Given an array of numbers, find the maximum number in the array.

// Example:
//
// Input: [3, 5, 7, 2, 8]

const maxNum = (input: number[]): number | null => {
    if (input.length === 0) return null;

    let max = input[0];

    for (let i = 1; i < input.length; i++) {
        if (max! < input[i]!) {
            max = input[i];
        }
    }
    return max!;
}

const input = [3, 5, 7, 2, 8];
console.log(maxNum(input));
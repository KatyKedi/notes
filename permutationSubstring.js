// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false

var permutationSubstring = function (str, sub) {
    // Keys will be the letters, values will be the quantity of that letter in the word
    const letterMap = {};

    for (let i = 0; i < str.length; i++) {
        const currentLetter = str[i];
        // If the letter is already in the map, increase the quantity
        if (letterMap[currentLetter]) {
            letterMap[currentLetter]++;
        // Otherwise, set the letter as the key with a value of 1
        } else {
            letterMap[currentLetter] = 1;
        }
    }

    for (let i = 0; i < sub.length; i++) {
        const currentLetter = str[i];

        // If the current letter in the substring is in the lettermap, decrease the quantiy
        if (letterMap[currentLetter]) {
            letterMap[currentLetter]--;
        // Otherwise, return a false value
        } else {
            return false
        }
    }

    // If we never got to the return false statement, return true
    return true;
};

console.log(permutationSubstring('olleh', 'hello'));
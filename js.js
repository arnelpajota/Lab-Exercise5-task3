var inputText = prompt("Enter a string of text:");

var charCount = inputText.length;
var wordCount = inputText.split(/\s+/).filter(word => word.length > 0).length;
var sentenceCount = inputText.split(/[.!?]/).filter(sentence => sentence.length > 0).length;

var words = inputText.toLowerCase().match(/\b\w+\b/g);
var wordFrequency = {};
var mostFrequentWord = "";
var maxFrequency = 0;

words?.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    if (wordFrequency[word] > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = wordFrequency[word];
    }
});

var avgWordLength = words ? words.join('').length / wordCount : 0;

console.log("Character Count:", charCount);
console.log("Word Count:", wordCount);
console.log("Sentence Count:", sentenceCount);
console.log("Most Frequent Word:", mostFrequentWord, "(Occurrences:", maxFrequency, ")");
console.log("Average Word Length:", avgWordLength.toFixed(2));

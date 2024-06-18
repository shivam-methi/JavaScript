function wordOccurance(str){

   const words =  str.split(' ');

    const wordCount = {};

    for(const word of words){
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    return wordCount;
}

const str = "I am learning learning learning java java programming.";
const occurance = wordOccurance(str);
console.log(occurance);
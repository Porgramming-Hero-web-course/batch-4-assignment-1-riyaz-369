const countWordOccurrences = (sentence: string, word: string): number => {
  const sentenceOfWord = sentence.split(" ");
  const wordToLowerCase = word.toLowerCase();

  const wordLengthArr: string[] = [];

  sentenceOfWord.map((item) => {
    const toLowerCaseOfSentence = item.toLowerCase();

    if (toLowerCaseOfSentence.includes(wordToLowerCase)) {
      return wordLengthArr.push(toLowerCaseOfSentence);
    }
  });

  return wordLengthArr.length;
};

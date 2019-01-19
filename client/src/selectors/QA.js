function lowerCaseSplit(input) {
  return input.toLowerCase().split(" ");
}

function matchCount(questionArr, searchArr, textInput) {
  const wordArr = [];
  let count = 0;
  textInput.forEach(word => {
    if (wordArr.includes(word)) {
      return;
    } else {
      wordArr.push(word);
      if (questionArr.includes(word)) {
        count++;
      }
      if (searchArr.includes(word)) {
        count += 2;
      }
    }
  });
  return count;
}

export function bestMatches(textInput, qA) {
  const textInputArr = lowerCaseSplit(textInput).filter(word => word !== "");
  let items = qA.filter(obj =>
    textInputArr.some(
      inputWord =>
        lowerCaseSplit(obj.question).includes(inputWord) ||
        lowerCaseSplit(obj.search_terms).includes(inputWord)
    )
  );

  items = items.sort((objA, objB) => {
    const [questionA, searchA, questionB, searchB] = [
      objA.question,
      objA.search_terms,
      objB.question,
      objB.search_terms
    ].map(lowerCaseSplit);
    let a = matchCount(questionA, searchA, textInputArr);
    let b = matchCount(questionB, searchB, textInputArr);

    return a > b ? -1 : 1;
  });
  return items.slice(0, 5);
}

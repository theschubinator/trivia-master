export const questionsByCategory = (questions, gameCategory) => {
	if (gameCategory !== 'All') {
		return questions.filter(question => question.category.name === gameCategory)
	} else {
		return questions
	}
}	

export const randomQuestion = (questions) => {
	const randomIndex = Math.floor(Math.random() * questions.length)
	return questions[randomIndex]
}

export const shuffle = (array) => {
	  let currentIndex = array.length, temporaryValue, randomIndex;
	  // While there remain elements to shuffle...
	  while (currentIndex !== 0) {
	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
};
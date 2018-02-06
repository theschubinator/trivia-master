export const questionsByCategory = (questions, gameCategory, categories) => {
	if (gameCategory !== 'All') {
		const category = categories.filter(cat => cat.name === gameCategory)[0];
		return questions.filter(q => q.category_id == category.id)
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
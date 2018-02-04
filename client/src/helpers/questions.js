export const questionsByCategory = (questions, category) => {
	if (category !== 'All')
		return questions.filter(question => question.category.name === category)
	return questions
}	

export const randomQuestion = (questions) => {
	const randomIndex = Math.floor(Math.random() * questions.length)
	return questions[randomIndex]
}
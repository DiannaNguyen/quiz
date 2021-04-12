import React, { useState } from 'react';
import { View } from 'react-native';
import Quiz from './app/screens/Quiz/Quiz';
import Home from './app/screens/Home/Home';
const App = () => {
	const [quizStarted, setQuizStarted] = useState(false);
	const setQuizStartedFromChild = (value) => {
		setQuizStarted(value);
	};
	return (
		<View style={{ flex: 1 }}>
			{!quizStarted && <Home setQuizStarted={setQuizStartedFromChild} />}
			{quizStarted && <Quiz setQuizStarted={setQuizStartedFromChild} />}
		</View>
	);
};

export default App;

import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Question from '../../components/Questions/Questions';
import QuizButton from '../../components/Button/Button';
import { View, Text, Button, StyleSheet } from 'react-native';
import questions from '../../../questions.json';

const Quiz = (props) => {
	const questionsArray = questions.questionsArray;
	const [currentIndex, setCurrentIndex] = useState(0);
	const [userAnswer, setUserAnswer] = useState(null);
	const [feedbackText, setFeedbackText] = useState(null);
	const CheckButtonPressed = () => {
		if (userAnswer === questionsArray[currentIndex].correctAnswer) {
			setFeedbackText(questionsArray[currentIndex].correctResponse);
		} else {
			setFeedbackText(questionsArray[currentIndex].incorrectResponse);
		}
	};

	const nextButton = () => {
		setUserAnswer(null);
		if (currentIndex < questionsArray.length) {
			setCurrentIndex(currentIndex + 1);
			setFeedbackText(null)
		}
	};

	const setUserAnswerFromChild = (answer) => {
		setUserAnswer(answer);
	};


	return (
		<View style={styles.mainContainer}>
			<View style={styles.headerContainer}>
				<Header
					currentIndex={currentIndex}
					quizLength={questionsArray.length}
					setQuizStarted={props.setQuizStarted}
				/>
			</View>
			{currentIndex < questionsArray.length && (
				<View style={styles.mainQuizContainer}>
					<View style={styles.questionContainer}>
						<Question
							question={questionsArray[currentIndex].question}
							options={questionsArray[currentIndex].options}
							setUserAnswer={setUserAnswerFromChild}
						/>
					</View>
					<View style={styles.buttonContainer}>
						<QuizButton
							color='red'
							title='CHECK'
							onPress={CheckButtonPressed}
							disabled={userAnswer === null ? true : false}
						/>
						<Button color='darkblue' title='NEXT' onPress={nextButton} />
					</View>
					<View style={styles.feedbackContainer}>
					<Text style={styles.feedbackText}>{feedbackText}</Text>
					</View>
				</View>
			)}
			{currentIndex === questionsArray.length && (
				<View style={styles.quizEndContainer}>
					<View style={styles.quizEndMessage}>
						<Text style={styles.endText}>
							You have completed the quiz. Do You want to retake the quiz?
						</Text>
					</View>
					<View>
						<Button
							color='darkblue'
							fontSize='20'
							title='RETAKE Quiz'
							onPress={() => {
								setCurrentIndex(0);
							}}
						/>
						<Button
							color='red'
							title='END Quiz'
							onPress={() => {
								props.setQuizStarted(false);
							}}
						/>
					</View>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'whitesmoke',
	},
	headerContainer: {
		flex: 0.2,
	},
	mainQuizContainer: {
		flex: 0.9,
	},
	questionContainer: {
		flex: 0.6,
	},
	questionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'darkblue',
	},
	buttonContainer: {
		justifyContent: 'center',
		color: '#000000',
		flexDirection: 'row',
	},
	feedbackContainer:{
	flex: 0.6,
	alignItems: 'center',
	
	},
	feedbackText: {
		margin: 30,
		justifyContent: 'center',
		fontSize: 20
	},
	quizEndContainer: {
		flex: 0.5,
		padding: 20,
		justifyContent: 'center',
		backgroundColor: 'whitesmoke'
	},
	endText: {
		flex: 1,
		fontSize: 18,
		color: 'darkblue',
	},
	quizEndMessage: {
		flex: 0.6,
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default Quiz;

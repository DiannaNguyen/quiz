import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuizQuestion = (props) => {
	const optionsLength = props.options.length;
	const optionsContainerStyle =
		optionsLength < 5 ? styles.optionsContainer : styles.optionsContainerInline;
	const [selectedOption, setSelectedOption] = useState(null);
	const optionsButtons = props.options.map((option) => {
		return (
			<Button
				color= 'darkblue'
				key={option}
				title={option}
				onPress={() => {
					setSelectedOption(option);
					props.setUserAnswer(option);
				}}
			/>
		);
	});
	return (
		<View style={styles.mainContainer}>
			<View style={styles.questionTitleContainer}>
				<Text style={styles.questionTitle}>{props.question}</Text>
			</View>
			<View style={optionsContainerStyle}>{optionsButtons}</View>
		</View>
	);
};


const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 20,
	},
	questionTitleContainer: {
		flex: 0.2,
	},
	questionTitle: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'darkblue',
	},
	optionsContainer: {
		flex: 0.8,
		marginHorizontal: 50,
		justifyContent: 'center',
	},
	optionsContainerInline: {
		flex: 0.8,
		justifyContent: 'center',
		alignContent: 'center',
	},
});

export default QuizQuestion;

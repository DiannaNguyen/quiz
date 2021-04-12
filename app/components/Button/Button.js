import React from 'react';
import { View, Button } from 'react-native';

const QuizButton = (props) => {
	return (
		<View>
			<Button
				color={props.color}
				title={props.title}
				onPress={props.onPress}
				disabled={props.disabled}
			/>
		</View>
	);
};


export default QuizButton;

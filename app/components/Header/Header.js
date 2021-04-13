import React, { useState, useEffect } from 'react';
import { View, Alert, Button, StyleSheet, Animated } from 'react-native';

const Header = (props) => {
	const [animatedValue] = useState(new Animated.Value(0));

	useEffect(() => {
		startAnimation();
	});

	const startAnimation = () => {
		let toValue = props.currentIndex / props.quizLength;
		if (toValue === 0) {
			toValue = 0.05;
		}
		Animated.timing(animatedValue, {
			toValue: toValue,
			duration: 500,
			useNativeDriver: false,
		}).start();
	};

	const showExitQuizAlert = async () => {
		Alert.alert('Exit Quiz?', 'Are you sure you want to exit the quiz?', [
			{ text: 'Continue', onPress: () => {} },
			{
				text: 'Exit',
				onPress: () => {
					props.setQuizStarted(false);
				},
			},
		]);
	};

	return (
		<View style={styles.mainContainer}>
			<View style={styles.closeButtonContainer}>
				<Button
					color='red'
					title='X'
					onPress={showExitQuizAlert}
					buttonStyle={styles.closeButton}
					titleStyle={styles.closeButtonTitle}
				/>
			</View>
			<View style={styles.progressBar}>
				<Animated.View
					style={[styles.progressBarFill, { flex: animatedValue }]}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		margin: 25,
	},
	closeButtonContainer: {
		marginRight: 10,
	},
	closeButton: {
		backgroundColor: 'transparent',
	},
	progressBar: {
		flex: 1,
		flexDirection: 'row',
		height: 20,
		backgroundColor: 'white',
		elevation: 1,
		borderWidth: 0.4,
		borderRadius: 5,
		borderColor: 'black',
	},
	progressBarFill: {
		backgroundColor: 'red',
	},
});

export default Header;

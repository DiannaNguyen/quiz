
import React from 'react';
import { View, Alert, Button, StyleSheet } from 'react-native';

const Header = (props) => {

	const showExitQuizAlert = async () => {
		Alert.alert(
			'Exit Quiz?',
			'Are you sure you want to exit the quiz?',
			[
				{ text: 'Continue', onPress: () => {} },
				{
					text: 'Exit',
					onPress: () => {
						props.setQuizStarted(false);
					},
				},
			]
		);
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
	closeButtonTitle: {
		color: '#3B0D11',
		fontSize: 20,
		fontWeight: 'bold',
	}
});

export default Header;

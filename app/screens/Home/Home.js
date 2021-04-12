import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Home(props) {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Road to US Citizenship</Text>
				<Text style={styles.subheading}>
					Test your knowledge on histories and general information about the
					United States!
				</Text>
			</View>
			<View style={styles.bodyContainer}>
				<Button
					color='red'
					title="Let's Get Started"
					onPress={() => {props.setQuizStarted(true)}}
				/>
			</View>
			<View style={styles.footerContainer}>
				<Text style={styles.footerText}>Questions from 2020 Version Test</Text>
				<Text style={styles.footerText}>Updated April 12, 2021</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'darkblue',
	},
	titleContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 90,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'whitesmoke',
	},
	subheading: {
		fontSize: 18,
		color: 'lightgray',
		margin: 15,
	},
	bodyContainer: {
		flex: 0.9,
		justifyContent: 'center',
	},
	btnText: {
		color: 'whitesmoke',
		backgroundColor: 'red',
		padding: 20,
		fontSize: 28,
		fontWeight: 'bold',
	},
	footerContainer: {
		flex: 0.2,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		height: 80,
	},
	footerText: {
		color: 'darkgray',
		fontSize: 16,
	},
});

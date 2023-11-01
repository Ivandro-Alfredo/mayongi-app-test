import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	taskContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 7,
		backgroundColor: 'white',
		marginBottom: 10,
		borderColor: 'white',
		width: '90%',
		marginLeft: 22,
		borderRadius: 10,
        
	},
    checkbox:{
        width:18,
        height: 18,
        borderWidth: 1,
    },
	input: {
		width: '55%',
		marginLeft: 22,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'green',
		height: '10%',
		marginTop: 10,
        paddingHorizontal: 10,
        marginBottom:10
	},
	addButton: {
		width: '30%',
        alignSelf: 'center',
        marginStart: 200,
        marginTop: -48,
        marginBottom:10
	},
});

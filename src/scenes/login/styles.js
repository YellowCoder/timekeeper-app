import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  titleContainer: {
    flex: 2,
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 21
  },
  buttonContainer: {
    flex: 1,
    borderColor: 'red',
    borderStyle: 'solid',
    flexDirection: 'column'
  },
  loginButton: {
    margin: 4,
    flex: 1,
    backgroundColor: '#80BE84',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles
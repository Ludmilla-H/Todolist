import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 4,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: "center",
    padding: 10,
  },
  textImage1: {
    fontSize: 30,
    fontWeight: '900',
    color: '#FFF',
    textAlign: 'right',
    marginBottom: 15,
  },

  textImage2: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 30,
    color: '#fff',
    textAlign: 'right',
  },
  viewButton: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: "center"
  },
  buttonImage: {
    backgroundColor: '#Fff',
    marginBottom: 30,
    width: 220,
    textAlign: "center",
  },
});

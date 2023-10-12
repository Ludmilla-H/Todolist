import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  profilImage: {
    backgroundColor: 'black',
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  decouvrirText: {
    fontSize: 25,
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#000',
  },

  categoryFlatlist: {
    fontSize: 18,
    marginVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'orange',
    color: 'black',
    paddingHorizontal: 10,

  },
  imageFlatlist: {

    height: 100,
    width:100,
    marginHorizontal: 10,
    borderRadius: 15,
    marginVertical: 20,


  },
  textProduct: {
    fontSize: 18,
    fontWeight: "800",
    color: "black",
  },

  Popular: {
flexDirection: "row",
justifyContent: "space-between",
marginVertical: 20,

  },
  popular1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  popular2: {
    fontSize: 15,
    fontWeight: "500",
    color: "black",
  },

  flatlist: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    backgroundColor: "green",
    height: 90,
    width: "95%",
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
  },

  flatlist3: {
    height: 90,
    width: 80,
    borderRadius: 10,
  },

  text1: {
    fontSize: 18,
    fontWeight: "500",

  },
  text2: {
    fontSize: 15,
    fontWeight: "300",

  },

});

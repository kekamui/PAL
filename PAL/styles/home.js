import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';

const numColumns = 3;
const size = Dimensions.get('window').width/numColumns;
export default StyleSheet.create({
  flatListContainer: {
    top: 170,
    flexWrap:'wrap',
  },
  ButtonContainer: {
    flex: 1,
    top: 150,
    backgroundColor: '#424242',
  },
  buttonReports: {
    backgroundColor: "rgba(92, 99,216, 1)",
    // width: 300,
    // height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  },
  statusTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    margin: 5,
  },
  statusGreen: {
    textAlign: 'center',
    fontSize: 15,
    color: 'grey',
    margin: 2,
  },
  statusGrey: {
    fontSize: 15,
    color: 'grey',
  },
  statusRed: {
    fontSize: 15,
    color: 'grey',
  },
  face: {
    width: 80,
    height: 80,
    top: 120,
  },
  semiCircleContainer : {
    flex: 1,
    margin: 15,
    alignItems: 'center',
    top: 10,
  },
  itemContainer: {
    width: size,
    height: size,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    top: 10,
  },
  reportsItemContainer: {
    width: size,
    height: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#d3d3d3',
    borderWidth: 1,
  },
  item: {
    flex: 1,
    textAlign: 'center',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  searchIcon: {
    padding: 10,
  },
  rowText: {
    marginRight: 20,
  },
  row: {
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  barText: {
    backgroundColor: "transparent",
    color: "#FFF",
  },
  scheduleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  meltdownContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 25,
  },
  meltdownButton: {
    backgroundColor: '#5DBCD2',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: '40%',
  },
  map: {
    flex:1,
    top: 200,
  }
});

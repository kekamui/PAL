import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, View, StatusBar, FlatList, Alert, Image} from 'react-native';
import Dimensions from 'Dimensions';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from "victory-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Button } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

import styles from './styles/home';
import firebase from './FbApp';
var meltdownfirebase = firebase.database().ref("/Jason/meltdown/");


export default class ReportsScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
          color: "#fff",
          opacity: 0.5,
          meltdownArray: [],
    }
    //Binds functions, defines them

    this.changeHR = this.changeHR.bind(this)
    this.changeXY = this.changeXY.bind(this)
    this.changeEMG = this.changeEMG.bind(this)
    //resp is in breaths per minute from last breath
    this.changeresp = this.changeresp.bind(this)
    this.changehgsr = this.changehgsr.bind(this)
    this.changeMeltdown = this.changeMeltdown.bind(this)


  }

    componentDidMount() {
        meltdownfirebase.on('value',snapshot => {
            const task = [];
            snapshot.forEach((childSnapshot) => {
                task.push({
                    time: childSnapshot.val()["time"],
                    value: childSnapshot.val()["value"],
                });
            });
            this.setState({meltdownArray: task})
        })
    }


  render() {
    const button_data = [
       {id: 1, name: 'Heart Rate', fn: this.changeHR},
       {id: 2, name: 'XY', fn: this.changeXY},
       {id: 3, name: 'EMG', fn: this.changeEMG},
       {id: 4, name: 'Respiratory', fn: this.changeresp},
       {id: 5, name: 'HGSR', fn: this.changehgsr},
       {id: 6, name: 'Meltdowns', fn: this.changeMeltdown},
     ];

    const numColumns = 3;

    return (
        <View>
          <Header
            placement="left"
            backgroundColor = "#2e64ba"
            leftComponent={< ShirtStatus />}
            centerComponent={{ text: 'PAL', style: {color: '#fff', marginLeft: -30} }}
            rightComponent={{ icon: 'menu', color: '#fff' }}
            />
          <CalendarStrip
              calendarAnimation={{type: 'sequence', duration: 30}}
              daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#2e64ba'}}
              style={{height:85, paddingTop: 5, paddingBottom: 5, marginTop:-1,}}
              calendarHeaderStyle={{color: 'white'}}
              calendarColor={'#5DBCD2'}
              dateNumberStyle={{color: 'white'}}
              dateNameStyle={{color: 'white'}}
              iconContainer={{flex: 0.1}}
          />
          <Chart ref = {Chart => {this._chart = Chart}} data = {data.XYcannedData}/>

          <FlatList
            data={button_data}
            renderItem={({item}) => (
              <TouchableHighlight onPress={item.fn}
                activeOpacity={this.state.opacity}
                underlayColor="#fff">
                <View style={styles.reportsItemContainer}>
                  <Icon style={styles.searchIcon} name={item.icon} size={20} color="#ADD8E6" />
                  <Text style={styles.item}>{item.name}</Text>
                </View>
              </TouchableHighlight>
            )}
            keyExtractor={item => item.id}
            numColumns={numColumns}
          />
        </View>
    );
  }

  changeHR() {
    this._chart.changeHR(data.HRcannedData);

  }
  changeXY() {
    this._chart.changeXY(data.XYcannedData);
  }
  changeEMG() {
    this._chart.changeEMG(data.cannedEMGdata);
  }
  changeresp() {
    this._chart.changeresp(data.respcanneddata);
  }
  changehgsr() {
    this._chart.changehgsr(data.HGSRdata);
  }
  changeMeltdown() {

   this._chart.changeMeltdown(this.state.meltdownArray);
 }

}

// import data from JSON file
 data = require("./data/exampledata.json");

class ShirtStatus extends React.Component{
  render() {
    return (
      <Text>
        <Image
          source={require('./resources/tshirt_white.png')}
          style= {{height: 20, width: 20}}
        />
        <Icon name={"battery-three-quarters"} size={20} color="#fff"/>
      </Text>
    );
  }
};


//Chart Component
data_color = "#2082d8";
chart_title = "XY";
data = require("./data/exampledata.json");

class Chart extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        meltdownArray: [],
        Chart_data: data.XYcannedData,
        x:"x",
        y:"y",

    }
  }

  changeHR (new_data) {
    this.state.Chart_data = new_data
    data_color = "#f74259"
    chart_title = "Heart Rate"
    this.changeChartCoord("x","y")
    this.forceUpdate()
  }
  changeXY (new_data) {
    this.state.Chart_data = new_data
    data_color = "#2082d8"
    chart_title = "XY"
    this.changeChartCoord("x","y")
    this.forceUpdate()
  }
    changeEMG (new_data) {
    this.state.Chart_data = new_data
    data_color = "#8cd01b"
    chart_title = "EMG"
    this.changeChartCoord("x","y")
    this.forceUpdate();
  }
   changeresp (new_data) {
    this.state.Chart_data = new_data
    data_color = "#33d1d8"
    chart_title = "Respiratory"
    this.changeChartCoord("x","y")
    this.forceUpdate();
  }
   changehgsr (new_data) {
    this.state.Chart_data = new_data
    data_color = "#f59623"
    chart_title = "HGSR"
    this.changeChartCoord("x","y")
    this.forceUpdate();
  }

  changeMeltdown(new_data) {
      this.state.Chart_data = new_data
      data_color = "#551a8b"
      chart_title = "Meltdown"
      this.changeChartCoord("time","value")
      this.forceUpdate()
  }
  changeChartCoord(x, y) {
      this.state.x = x;
      this.state.y = y;
  }

  render() {

    return (
      <View style={{ alignItems: 'center', }}>
        <Text style={{marginTop: 10, marginBottom: -30, fontSize: 20, fontWeight: 'bold'}}>{chart_title}</Text>
        <VictoryChart theme={VictoryTheme.material}>
          <VictoryLine
          style={{
            data: { stroke: data_color },
            parent: { border: "1px solid #ccc"}
          }}
          data = {this.state.Chart_data}
           x = {this.state.x}
           y = {this.state.y}
            />

        </VictoryChart>
      </View>
    );
  }
}

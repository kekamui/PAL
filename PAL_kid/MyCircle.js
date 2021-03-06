import React, { Component } from 'react';
import { StyleSheet,Text,View,} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


export default class ScheduleScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        onDayPress={this.onDayPress.bind(this)}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
      />
    );
  }


  loadItems(day) {
   setTimeout(() => {
     var strTime;
     var time;
     for (let i = 0; i < 1; i++) {
       time = day.timestamp;
       strTime = this.timeToString(time);
       if (!this.state.items[strTime]) {
         this.state.items[strTime] = [];
         const numItems = Math.floor(Math.random() * 5);
           for (let j = 0; j < numItems; j++) {
             this.state.items[strTime].push({
               name: 'Item for ' + strTime,
               height: Math.max(50, Math.floor(Math.random() * 150))
             });
         }

       }
     }

     const newItems = {};
     Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
     this.setState({
       items: newItems
     });
   }, 100);


 }

   onDayPress(day) {
    this.state.items = {}
    setTimeout(() => {
      var strTime;
      var time;
      for (let i = 0; i < 1; i++) {
        time = day.timestamp;
        strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
            for (let j = 0; j < numItems; j++) {
              this.state.items[strTime].push({
                name: 'Item for ' + strTime,
                height: Math.max(50, Math.floor(Math.random() * 150))
              });
          }

        }
      }

      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 100);


  }

 renderItem(item) {
   return (
     <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
   );
 }

 renderEmptyDate() {
   return (
     <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
   );
 }

 rowHasChanged(r1, r2) {
   return r1.name !== r2.name;
 }

 timeToString(time) {
   const date = new Date(time);
   return date.toISOString().split('T')[0];
 }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});

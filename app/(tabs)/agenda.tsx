import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View, TouchableOpacity } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Agenda as AgendaWix } from "react-native-calendars";
import { Button, Card, Text, useTheme } from "react-native-paper";
import { Colors } from '../../constants/Colors';

export default function Agenda() {
  const theme: any = useTheme();
  const calendarTheme = {
    agendaDayNumColor: theme.colors.primary,
    agendaKnobColor: theme.colors.primary,
    agendaDayTextColor: theme.colors.primary,
    agendaTodayColor: theme.colors.primary,
    selectedDayBackgroundColor: theme.colors.secondaryContainer,
    selectedDayTextColor: theme.colors.onBackground,
    dayTextColor: theme.colors.onBackground,
    textDisabledColor: theme.colors.surfaceVariant,
    dotColor: theme.colors.primary,
    selectedDotColor: theme.colors.primary,
    monthTextColor: theme.colors.primary,
    textSectionTitleColor: theme.colors.primary,
    textMonthFontWeight: '700',
    calendarBackground: theme.colors.background,
    reservationsBackgroundColor: theme.colors.elevation.level1
    // textSectionTitleDisabledColor: '#D9E1E8',
    // textDayFontFamily: "Arial",
    // textMonthFontFamily: "Arial",
    // textDayHeaderFontFamily: "Arial",
    // agendaDayTextFontFamily: "Arial",
  };

  const renderItem = (reservation: any, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const {name, address, type, time, height} = reservation;

    // const nameLabel = name.toUpperCase();

    const backgroundColor = type === 'revisit' ? theme.colors.alphaContainer : theme.colors.primaryContainer

    return (
      <TouchableOpacity
        style={[styles.item, {height}]}
        onPress={() => console.log(name)}>
      <Card mode="contained" style={{backgroundColor}}>
      <Card.Title subtitleStyle={{fontWeight: "bold"}} titleStyle={{fontWeight: "800"}} title={time} subtitle={name} />
      <Card.Content>
        {/* <Text variant="titleMedium">10:20 AM</Text> */}
        {/* <Text variant="titleMedium">JUAN PEREZ SOTO</Text> */}
        <Text variant="bodyMedium">{address}</Text>
      </Card.Content>
    </Card>
      </TouchableOpacity>
    );
  };



{/* <TouchableOpacity
        style={[styles.item, {height: reservation.height, backgroundColor}]}
        onPress={() => console.log(reservation.name)}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{reservation.name}</Text>
        <Text style={{fontSize: 14}}>{reservation.description}</Text>
      </TouchableOpacity> */}

  // const renderItem = ({ event }) => {
  //   const { title, startTime, endTime, location } = event;
  
  //   return (
  //     <div className="event-item">
  //       <h3>{title}</h3>
  //       <p>
  //         {startTime.toLocaleString()} - {endTime.toLocaleString()}
  //       </p>
  //       {location && <p>Location: {location}</p>}
  //     </div>
  //   );
  // };

  return (
    <SafeAreaView style={{ flex: 1}}>
      <AgendaWix
        renderItem={renderItem}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        // renderDay={(day: any, item: any) => {
        //   return <View><Text>Hello</Text></View>;
        // }}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return <View><Text>No Data</Text></View>;
        }}
        
        // Specify how agenda knob should look like
        // renderKnob={() => {
        //   return <View />;
        // }}
        // Override inner list with a custom implemented component
        // renderList={(listProps, index) => {
        //   return (
        //     <View key={index} style={{backgroundColor: 'yellow'}}>
        //       {listProps.children}
        //     </View>
        //   );
        // }}
        // Specify your item comparison function for increased performance
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
        onRefresh={() => console.log('refreshing...')}
        // Set this true while waiting for new data from a refresh
        refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
        refreshControl={null}
        items={{
          "2024-07-19": [{ name: "Juan Quispe", address: 'Juan Perez', type: 'revisit', time: '10:00 AM' }],
          "2024-07-20": [{ name: "Maria Lanchipa Prado", address: 'Av. Tomatada de Cordero', type: 'bibleCourse', time: '04:30 PM'}],
          // "2024-07-21": [],
          "2024-07-22": [
            { name: "Martinica Comunica", address: 'Av. Dorbigni esq tunupa', type: 'revisit', time: '11:30 AM' },
            { name: "Juan Choque Quizpe", address: 'Manchacota cerca ladrillo', type: 'bibleCourse', time: '07:00 PM'},
          ],
        }}
        selected={Date.now()}
        showClosingKnob={true}
        theme={calendarTheme}
        backgroundColor="yellow"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  item: {
    flex: 1,
    borderRadius: 5,
    padding: 5,
    marginRight: 5,
    marginTop: 7,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

import * as React from 'react';
import { BottomNavigation, Text, useTheme } from 'react-native-paper';
import HomeScreen from './index';
import Agenda from './agenda';

// const HomeScreen = () => <Text>Inicio</Text>;

// const Agenda = () => <Text>Agenda</Text>;

const tabsComponent = () => {
  const [index, setIndex] = React.useState(0);
  const theme = useTheme();
  const [routes] = React.useState([
    { key: 'index', title: 'Inicio', focusedIcon: 'view-dashboard', unfocusedIcon: 'view-dashboard-outline'},
    { key: 'agenda', title: 'Agenda', focusedIcon: 'calendar', unfocusedIcon: 'calendar-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    index: HomeScreen,
    agenda: Agenda,

  });

  return (
    <BottomNavigation
      barStyle={{backgroundColor: theme.colors.elevation.level2}}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default tabsComponent;
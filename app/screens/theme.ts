// theme.js
import { MD3LightTheme as PaperLightTheme } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import lightColors from '../light.json';
import theme from '../material-theme.json';
import darkColors from '../dark.json';

export const CustomLightTheme = {
  ...PaperLightTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperLightTheme.colors,
    ...NavigationDefaultTheme.colors,
    ...lightColors.colors,
    // ...theme.schemes.light
  },
};

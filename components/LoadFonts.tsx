import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';

const LoadFonts = ({ children }: any) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadAllFonts() {
      await Font.loadAsync({
        'Arial': require('./assets/fonts/Arial.ttf'),
      });
      setFontsLoaded(true);
    }
    loadAllFonts();
  }, []);

  return children;
};

export default LoadFonts;

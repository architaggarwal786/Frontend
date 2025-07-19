import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // ✅ Import this
import { useColorScheme } from '@/hooks/useColorScheme';

const PinkPurpleTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#D15B9B',
    card: '#9B46E6',
    text: '#fff',
    border: '#fff',
    notification: '#9B46E6',
  },
};

const DarkPinkPurpleTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#9B46E6',
    card: '#D15B9B',
    text: '#fff',
    border: '#fff',
    notification: '#D15B9B',
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const theme = colorScheme === 'dark' ? DarkPinkPurpleTheme : PinkPurpleTheme;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}> {/* ✅ Fix gesture error */}
      <ThemeProvider value={theme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

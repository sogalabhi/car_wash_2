import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <Stack initialRouteName="(tabs)/ViewVehicles">
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false, // Hide header for the tab view
        }}
      />
      <Stack.Screen
        name="pages/Packages"
        options={{
          title: 'Packages',
          headerBackButtonMenuEnabled: true
        }}
      />
    </Stack>
  );
}

import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";
import Navigation from "./src/navigation";
import { theme } from "./src/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Navigation />
    </NativeBaseProvider>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ConfirmRegister from "../pages/ConfirmRegister";
import ForgotPassword from "../pages/ForgotPassword";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Location from "../pages/Location";
import Login from "../pages/Login";
import Register from "../pages/Register";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {

    const OutsideApp = () => (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="ConfirmRegister" component={ConfirmRegister} options={{ headerShown: false }} />    
            <Stack.Screen name="Home" component={InsideApp} />
        </Stack.Navigator>
    );

    const InsideApp = () => (
      <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Details" component={Details} />
            <Drawer.Screen name="Location" component={Location} />
      </Drawer.Navigator>
    )
  
  return (
    <NavigationContainer>
      <OutsideApp />
    </NavigationContainer>
  );
}

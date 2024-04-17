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
import Search from "../pages/Search";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function Routes() {
  const navigationDrawerOptions = {headerStyle: {backgroundColor: 'red',}, headerTintColor: 'white', headerTitleAlign: 'center'}

    const OutsideApp = () => (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="ConfirmRegister" component={ConfirmRegister} options={{ headerShown: false }} />    
            <Stack.Screen name="Home" component={InsideApp} options={{ headerShown: false }} />
        </Stack.Navigator>
    );

    const InsideApp = () => (
      <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} options={navigationDrawerOptions} />
            <Drawer.Screen name="Buscar" component={Search} options={navigationDrawerOptions} />
            <Drawer.Screen name="Detalhes" component={Details} options={navigationDrawerOptions} />
            <Drawer.Screen name="Localizar" component={Location} options={navigationDrawerOptions} />
      </Drawer.Navigator>
    )
  
  return (
    <NavigationContainer>
      <OutsideApp />
    </NavigationContainer>
  );
}

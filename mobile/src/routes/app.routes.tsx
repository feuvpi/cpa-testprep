import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Home } from '../screens/Home';
import { QuestionScreen } from '../screens/QuestionScreen';
import { Form } from '../screens/Form';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="login" component={Login} />
      
      <Screen name="Form" component={Form} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
}

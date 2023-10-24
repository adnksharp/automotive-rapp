import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { JsonScreen } from './src/windows/charts'
import { MainScreen } from './src/windows/first'

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                    name="Main" 
                    component={MainScreen} 
                    headerMode="none"
                    options={{ headerShown: false }}
                    />
                    <Stack.Screen 
                    name="Graph"
                    component={JsonScreen} 
                    headerMode="none"
                    options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default App

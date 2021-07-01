import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

import Tabs from './navigation/tabs'
import {StoreProvider} from './stores'

const Stack = createStackNavigator()

const App = () => {
	return (
		<StoreProvider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
					initialRouteName={'MainLayout'}
				>
					<Stack.Screen name='MainLayout' component={Tabs} />
				</Stack.Navigator>
			</NavigationContainer>
		</StoreProvider>
	)
}

export default App

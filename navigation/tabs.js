import React from 'react'
import {TouchableOpacity} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Home, Portfolio, Market, Profile} from '../screens'
import {COLORS, icons} from '../constants'
import {TabIcon} from '../components'
import {useDispatch, useSelector} from 'react-redux'
import {setTradeModalVisibility} from '../stores/tab/tabActions'

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({children, onPress}) => {
	return (
		<TouchableOpacity
			style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
			onPress={onPress}
		>
			{children}
		</TouchableOpacity>
	)
}

const Tabs = () => {
	const {isTradeModalVisible} = useSelector(state => state.tab)
	const dispatch = useDispatch()
	function handleTradeButtonClick() {
		dispatch(setTradeModalVisibility(!isTradeModalVisible))
	}
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: {
					backgroundColor: COLORS.primary,
					borderTopColor: 'transparent',
				},
			}}
		>
			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: ({focused}) => {
						if (!isTradeModalVisible)
							return (
								<TabIcon focused={focused} icon={icons.home} label='Home' />
							)
					},
				}}
				listeners={{
					tabPress: e => {
						if (isTradeModalVisible) e.preventDefault()
					},
				}}
			/>
			<Tab.Screen
				name='Portfolio'
				component={Portfolio}
				listeners={{
					tabPress: e => {
						if (isTradeModalVisible) e.preventDefault()
					},
				}}
				options={{
					tabBarIcon: ({focused}) => {
						if (!isTradeModalVisible)
							return (
								<TabIcon
									focused={focused}
									icon={icons.briefcase}
									label='Portfolio'
								/>
							)
					},
				}}
			/>
			<Tab.Screen
				name='Trade'
				component={Home}
				options={{
					tabBarIcon: ({focused}) => {
						return (
							<TabIcon
								focused={focused}
								icon={isTradeModalVisible ? icons.close : icons.trade}
								iconStyle={
									isTradeModalVisible
										? {
												tintColor: COLORS.white,
												width: 15,
												height: 15,
												marginBottom: 5,
										  }
										: {}
								}
								label='Trade'
								isTrade={true}
							/>
						)
					},
					tabBarButton: props => {
						return (
							<TabBarCustomButton {...props} onPress={handleTradeButtonClick} />
						)
					},
				}}
			/>
			<Tab.Screen
				name='Market'
				component={Market}
				options={{
					tabBarIcon: ({focused}) => {
						if (!isTradeModalVisible)
							return (
								<TabIcon focused={focused} icon={icons.market} label='Market' />
							)
					},
				}}
				listeners={{
					tabPress: e => {
						if (isTradeModalVisible) e.preventDefault()
					},
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={Profile}
				options={{
					tabBarIcon: ({focused}) => {
						if (!isTradeModalVisible)
							return (
								<TabIcon
									focused={focused}
									icon={icons.profile}
									label='Profile'
								/>
							)
					},
				}}
				listeners={{
					tabPress: e => {
						if (isTradeModalVisible) e.preventDefault()
					},
				}}
			/>
		</Tab.Navigator>
	)
}

export default Tabs

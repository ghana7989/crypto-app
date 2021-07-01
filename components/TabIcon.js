import React from 'react'
import {Image, Text, View} from 'react-native'
import {COLORS, FONTS} from '../constants'
import Center from './Center'

const TabIcon = ({focused, icon, iconStyle, label, isTrade}) => {
	if (isTrade) {
		return (
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					width: 60,
					height: 60,
					borderRadius: 30,
					backgroundColor: COLORS.black,
				}}
			>
				<Image
					source={icon}
					resizeMode='contain'
					style={{
						width: 25,
						height: 25,
						tintColor: COLORS.white,
						...iconStyle,
					}}
				/>
				<Text style={{color: COLORS.white, ...FONTS.h4}}>{label}</Text>
			</View>
		)
	}
	return (
		<Center>
			<Image
				source={icon}
				resizeMode='contain'
				style={{
					width: 25,
					height: 25,
					tintColor: focused ? COLORS.white : COLORS.secondary,
					...iconStyle,
				}}
			/>
			<Text
				style={{color: focused ? COLORS.white : COLORS.secondary, ...FONTS.h4}}
			>
				{label}
			</Text>
		</Center>
	)
}

export default TabIcon

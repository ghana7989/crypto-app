import React from 'react'
import {Text, TouchableOpacity, Image} from 'react-native'
import {COLORS, FONTS, SIZES} from '../constants'

const IconTextButton = ({label, icon, containerStyle, onPress}) => {
	return (
		<TouchableOpacity
			style={{
				flexDirection: 'row',
				height: 50,
				justifyContent: 'center',
				alignItems: 'center',
				borderRadius: SIZES.radius,
				backgroundColor: COLORS.white,
				...containerStyle,
			}}
			onPress={onPress}
		>
			<Image
				source={icon}
				style={{resizeMode: 'contain', width: 20, height: 20}}
			/>
			<Text style={{marginLeft: SIZES.base, ...FONTS.h3}}>{label}</Text>
		</TouchableOpacity>
	)
}

export default IconTextButton

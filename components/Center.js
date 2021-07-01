import React from 'react'
import {View} from 'react-native'

const Center = ({children, styles, ...rest}) => {
	return (
		<View
			style={{justifyContent: 'center', alignItems: 'center', ...styles}}
			{...rest}
		>
			{children}
		</View>
	)
}

export default Center

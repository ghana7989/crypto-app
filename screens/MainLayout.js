import React, {useEffect, useRef} from 'react'
import {Animated, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {IconTextButton} from '../components'
import {COLORS, icons, SIZES} from '../constants'
import {setTradeModalVisibility} from '../stores/tab/tabActions'

const MainLayout = ({children}) => {
	const {isTradeModalVisible} = useSelector(state => state.tab)

	const modalAnimatedValue = useRef(new Animated.Value(0)).current

	useEffect(() => {
		if (isTradeModalVisible) {
			Animated.timing(modalAnimatedValue, {
				duration: 500,
				toValue: 1,
				useNativeDriver: false,
			}).start()
		} else {
			Animated.timing(modalAnimatedValue, {
				duration: 500,
				toValue: 0,
				useNativeDriver: false,
			}).start()
		}
	}, [isTradeModalVisible])
	const modalY = modalAnimatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [SIZES.height, SIZES.height - 205],
	})
	return (
		<View style={{flex: 1}}>
			{children}

			{/* Dim Background */}
			{isTradeModalVisible && (
				<Animated.View
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: COLORS.transparentBlack,
						opacity: modalAnimatedValue,
					}}
				/>
			)}

			{/* Modal */}
			<Animated.View
				style={{
					position: 'absolute',
					left: 0,
					top: modalY,
					width: '100%',
					padding: SIZES.padding,
					backgroundColor: COLORS.primary,
					borderTopRightRadius: 10,
					borderTopLeftRadius: 10,
				}}
			>
				<IconTextButton
					label='Transfer'
					icon={icons.send}
					onPress={() => {
						console.log('Transfer Pressed')
					}}
				/>
				<IconTextButton
					label='Withdraw'
					icon={icons.withdraw}
					containerStyle={{
						marginTop: SIZES.base,
					}}
					onPress={() => {
						console.log('Withdraw Pressed')
					}}
				/>
			</Animated.View>
		</View>
	)
}

export default MainLayout

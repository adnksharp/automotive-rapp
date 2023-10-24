import {StyleSheet, useColorScheme} from 'react-native'

export function theme(mode: boolean) 
{
	color.background = color.mode ? '#000' : '#fff'
	color.text = color.mode ? '#fff' : '#000'
	color.disabled = !color.mode ? '#e6e7e8' : '#1c1c22' //light grey, dark grey
	color.primary = !color.mode ? '#12b514' : '#00e51e' //dark green, light green
	color.secondary = !color.mode ? '#125bb5' : '#2bf4ff' //blue, cyan
	color.error = !color.mode ? '#b51212' : '#ff2b2b' //dark red, red
	color.alert = !color.mode ? '#6312b5' : '#ed02e5' //purple, pink
}

export const color = {
	mode: false
}

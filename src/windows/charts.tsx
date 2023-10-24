import {
	Dimensions,
	SafeAreaView,
    ScrollView,
	StatusBar,
	Text,
    useColorScheme,
	View,
} from 'react-native'

import { faHouse } from '@fortawesome/free-solid-svg-icons'

import { color, theme} from '../style'
import { Icon, Graph } from '../elements'

export function JsonScreen({navigation}): JSX.Element {
    color.mode = useColorScheme() === 'dark'
    theme(color.mode)
    return (
        <SafeAreaView>
            <StatusBar
                barStyle={color.mode ? 'light-content' : 'dark-content'}
                backgroundColor={color.background}
            />
            <View style={{
                backgroundColor: color.background,
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        }}>
                        <Icon
                            icon={faHouse} 
                            look={color.text} 
                            title="back" 
                            message=""
                            navigation={navigation}
                        />
                        <Text style={{
                            color: color.text,
                            fontSize: 25,
                        }}>Graficas</Text>
                    </View>
                    <View style={{
                        height: Dimensions.get('window').height - 80,
                        width: Dimensions.get('window').width,
                    }}>
                        <ScrollView 
                            style={{
                                backgroundColor: color.background,
                                width: Dimensions.get('window').width,
                            }}
                            showsVerticalScrollIndicator={false}
                        >
                            <Graph
                                labels={['0', '30']}
                                data={[20, 45, 28, 80, 99, 43, 50, 20, 45, 28, 80, 99, 43, 50]}
                                gradient={[color.primary, color.secondary]}
                                text={color.text}
                                color={color.disabled}
                                format={['s', 'km/h']}
                                title="Velocidad"
                            />
                            <Graph
                                labels={['0', '30']}
                                data={[0, -10, -15, -12, -3, 0, 0, 5, 10, 15, 12, 3, 0, 0]}
                                gradient={[color.secondary, color.primary]}
                                text={color.text}
                                color={color.disabled}
                                format={['s', '°']}
                                title="Dirección"
                            />
                            <Graph
                                labels={['0', '30']}
                                data={[0, 1, 1, 0, 2, 0, 0, 1, 0, 1]}
                                gradient={[color.primary, color.alert]}
                                text={color.text}
                                color={color.disabled}
                                format={['s', '']}
                                title="Objetos detectados"
                            />
                            <Graph
                                labels={['0', '30']}
                                data={[690, 640, 580, 320, 250, 350, 400, 690, 640, 580, 320, 250, 350, 400]}
                                gradient={[color.primary, color.primary]}
                                text={color.text}
                                color={color.disabled}
                                format={['s', 'lm']}
                                title="Iluminación"
                            />
                            <Graph
                                labels={['0', '30']}
                                data={[0, 0, 0, 2, 2, 2, 1, 0, 0, 0, 2, 2, 2, 1]}
                                gradient={[color.alert, color.secondary]}
                                text={color.text}
                                color={color.disabled}
                                format={['s', '']}
                                title="Luces"
                            />
                        </ScrollView>
                    </View>
            </View>
        </SafeAreaView>
    )
}

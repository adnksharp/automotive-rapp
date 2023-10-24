import { useState } from 'react'
import {
	Dimensions,
    Image,
	SafeAreaView,
	StatusBar,
	Text,
    TouchableHighlight,
    useColorScheme,
	View,
} from 'react-native'

import Slider from '@react-native-community/slider'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTowerBroadcast } from '@fortawesome/free-solid-svg-icons/faTowerBroadcast'
import { faBullseye } from '@fortawesome/free-solid-svg-icons/faBullseye'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb'
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon'
import { faRotate } from '@fortawesome/free-solid-svg-icons'
import { faStop } from '@fortawesome/free-solid-svg-icons'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'

import { color, theme} from '../style'
import { Button, Icon } from '../elements'

export function MainScreen({navigation}): JSX.Element {
    const [ vny, vky ] = useState(0),
        [ vnz, vkz ] = useState(0),
        [opt, setOpt] = useState(true)
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
                    <TouchableHighlight onPress={ () => {
                            setOpt(!opt)
                            if (!opt) {
                                vky(vnz)
                            }
                        }}
                        style={{
                            backgroundColor: color.disabled,
                            borderRadius: 10,
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 5,
                        }}
                        >
                        <FontAwesomeIcon icon={faRotate} size={25} color={color.text}/>
                    </TouchableHighlight>
                    <Button 
                        text="100 km/h" 
                        color={color.text}
                        navigation={navigation}
                    />
                    <Icon 
                        icon={faTowerBroadcast} 
                        look={color.error} 
                        title="Sin señal" 
                        message="No hay señal de conexión" 
                    />
                    <Icon 
                        icon={faBullseye} 
                        look={color.alert} 
                        title="Sensor de proximidad" 
                        message="Objeto detectado"
                    />
                    <Icon 
                        icon={faLightbulb} 
                        look={color.secondary} 
                        title="Luces" message="Las luces están encendidas"
                    />
                    <Icon 
                        icon={faMoon} 
                        look={color.primary} 
                        title="Modo nocturno" 
                        message="Luces frontales encendidas"
                    />
                </View>
                <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: color.text,
                    }}>
                </View>
                    <Image
                        source={require('../../bold-and-brash.jpg')}
                        style={{
                            height: Dimensions.get('window').height / 2,
                            width: Dimensions.get('window').width,
                   }} />
                <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: Dimensions.get('window').height / 2 - 50,
                    }}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text id="left-max-text" style={{
                                color: color.text,
                                fontSize: 20,
                            }}>{opt ? vny : "Derecha"}</Text>
                        <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                transform: [{ rotate: '270deg'}],
                                height: 200,
                            }}>
                            <Slider
                                style={{width: 150, height: 40}}
                                step={1}
                                value={vny}
                                onValueChange={vky}
                                minimumValue={0}
                                maximumValue={125}
                                minimumTrackTintColor={color.secondary}
                                maximumTrackTintColor={color.alert}
                            />
                        </View>
                        <Text style={{
                            color: color.text,
                            fontSize: 20,
                            }}>{opt ? "rpm" : "Izquierda"}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <TouchableHighlight onPress={ () => opt ? vky(vnz) : vky(125/2) }
                            style={{
                                backgroundColor: color.disabled,
                                borderRadius: 10,
                                height: 40,
                                width: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 10,
                            }}
                            >
                            <FontAwesomeIcon icon={faUpLong} size={25} color={color.primary}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={ () => {
                                    if (opt) {
                                        vky(0)
                                    }
                                    vkz(0)
                            }}
                            style={{
                                backgroundColor: color.disabled,
                                borderRadius: 10,
                                height: 40,
                                width: 40,
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 5,
                            }}
                            >
                            <FontAwesomeIcon icon={faStop} size={25} color={color.secondary}/>
                        </TouchableHighlight>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text id="left-max-text" style={{
                                color: color.text,
                                fontSize: 20,
                            }}>{vnz}</Text>
                        <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                transform: [{ rotate: '270deg'}],
                                height: 200,
                            }}>
                            <Slider
                                style={{width: 150, height: 40}}
                                step={1}
                                value={vnz}
                                onValueChange={vkz}
                                minimumValue={0}
                                maximumValue={125}
                                minimumTrackTintColor={color.secondary}
                                maximumTrackTintColor={color.alert}
                            />
                        </View>
                        <Text style={{
                            color: color.text,
                            fontSize: 20,
                            }}>rpm</Text>
                    </View>
                </View>
            </View>
		</SafeAreaView>
	)
}

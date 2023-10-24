import React from 'react'
import {
    Alert,
	Dimensions,
	Text,
    TouchableHighlight,
	View,
} from 'react-native'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { color} from './style'

type IconProps = {
    icon: any,
    look: string,
    title: string,
    message: string,
    navigation?: any,
}

type ButtonProps = {
    text: string,
    color: string,
    navigation?: any,
}

type ChartProps = {
    labels: string[],
    data: number[],
    gradient: string[],
    text: string,
    color: string,
    format: string[],
    title?: string,
}

export const Button = (props: ButtonProps): JSX.Element => {
    return (
        <TouchableHighlight onPress={
            () => props.navigation.navigate('Graph')
            } style={{
                backgroundColor: color.disabled,
                borderRadius: 10,
                height: 40,
                width: 130,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
            }}
            >
            <Text style={{
                color: props.color,
                fontSize: 25,
            }}>{props.text}</Text>
        </TouchableHighlight>
    )
}

export const Icon =(props: IconProps): JSX.Element => {
    return (
        <TouchableHighlight onPress={ () => props.title != "back" ? Alert.alert(props.title, props.message) : props.navigation.navigate('Main')}
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
            <FontAwesomeIcon icon={props.icon} size={25} color={props.look}/>
        </TouchableHighlight>
    )
}

export const Chart = (props: ChartProps): JSX.Element => {
    return (
    <LineChart
        formatYLabel={(y) => y + props.format[1]}
        formatXLabel={(x) => x + props.format[0]}
        data = {{
            labels: props.labels,
            datasets: [{
                data: props.data,
            }],
        }}
        width={Dimensions.get("window").width - 30}
        height={210}
        chartConfig={{
            //background transparent
            backgroundColor: props.color,
            backgroundGradientFrom: props.color,
            backgroundGradientTo: props.color,
            color: (opacity = 1) => props.gradient[1],
            labelColor: (opacity = 1) => props.text,
            propsForDots: {
                r: "1",
                strokeWidth: "2",
                stroke: props.gradient[0]
            }
        }}
        bezier
        style={{
            paddingLeft: 5,
            borderRadius: 10,
        }}
    />
    )
}

export const Graph = (props: ChartProps): JSX.Element => {
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color.disabled,
            margin: 5,
            borderRadius: 10,
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: color.disabled,
                margin: 5,
                borderRadius: 10,
            }}>
                <Text style={{
                    color: color.text,
                    fontSize: 20,
                }}>
                {props.title}
                </Text>
                <Chart 
                    labels={props.labels}
                    data={props.data}
                    gradient={props.gradient}
                    text={props.text}
                    color={props.color}
                    format={props.format}
                />
            </View>
        </View>
    )
}

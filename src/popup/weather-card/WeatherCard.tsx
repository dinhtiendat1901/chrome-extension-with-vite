import React, {useEffect, useState} from "react";
import {fetchOpenWeatherData, OpenWeatherData} from "../../utils/api";
import {Box, Card, Text} from "@mantine/core";

interface WeatherProp {
    city: string
}

interface WeatherContainerProp {
    children: React.ReactNode
}

type WeatherCardState = 'loading' | 'error' | 'ready'

export default function WeatherCard({city}: WeatherProp) {

    const [weatherData, setWeatherData] = useState<OpenWeatherData | null>(null)
    const [cardState, setCardState] = useState<WeatherCardState>('loading')

    useEffect(() => {
        fetchOpenWeatherData(city).then((data) => {
            setWeatherData(data)
            setCardState('ready')
        }).catch((err) => {
            setCardState('error')
        })
    }, [city]);

    if (cardState == 'loading' || cardState == 'error' || !weatherData) {
        return <WeatherCardContainer>
            <Text>
                {cardState == 'loading' ? 'Loading...' : 'Error: could not retrieve weather data for this city'}
            </Text>
        </WeatherCardContainer>
    }


    return (
        <WeatherCardContainer>
            <Text fw={900}>{weatherData.name}</Text>
            <Text fw={700}>{Math.round(weatherData.main.temp)}</Text>
            <Text fw={700}>Feels like: {Math.round(weatherData.main.feels_like)}</Text>
        </WeatherCardContainer>
    )

}


function WeatherCardContainer({children}: WeatherContainerProp) {
    return (
        <Box mb={8} mx={16}>
            <Card>
                {children}
            </Card>
        </Box>
    )
}


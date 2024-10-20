const OPEN_WEATHER_API_KEY = '0092d00725268e96d31a4d2fe25a70d3'


export interface OpenWeatherData {
    name: string
    main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
    }
    weather: {
        description: string
        icon: string
        id: number
        main: string
    }[]
    wind: {
        deg: number
        speed: number
    }
}


export async function fetchOpenWeatherData(city: string): Promise<OpenWeatherData> {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&&APPID=${OPEN_WEATHER_API_KEY}`)


    if (!res.ok) {
        throw new Error('City not found')
    }

    return await res.json()

}
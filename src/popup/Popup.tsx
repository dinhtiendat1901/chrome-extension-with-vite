import {Container} from "@mantine/core";
import WeatherCard from "./weather-card/WeatherCard";

export default function () {
    return (
        <Container w={320} h={512} bg='#f5f5f5' pt={10}>
            <WeatherCard city='Toronto'/>
            <WeatherCard city='New York1'/>
        </Container>
    )
}

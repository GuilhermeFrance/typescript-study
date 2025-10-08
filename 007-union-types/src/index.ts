// Union types

enum TrafficLightType{
    Green,
    Yellow,
    Red,
}

interface YellowColor{
    type: TrafficLightType.Yellow;
    wait(): void;
}

interface RedColor{
    type: TrafficLightType.Red;
    stop(): void;
}
interface GreenColor{
    type: TrafficLightType.Green;
    drive(): void;
}

    type TrafficLight = YellowColor | RedColor | GreenColor;

const trafficLight: TrafficLight = {
    type: TrafficLightType.Green,
    drive() {
        
    },
}
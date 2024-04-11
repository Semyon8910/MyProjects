import { Car } from "../Model/Car";

export class CarState {
    public allCars: Car[] = [];
}

export enum CarActionType {
    AddCar = "AddCar",
    RemoveCar = "RemoveCar",
}

export interface CarAction {
    type: CarActionType;
    payload?: any;
}

export function addCar(newCar: Car): CarAction {
    return { type: CarActionType.AddCar, payload: newCar };
}

export function removeCar(carId: number): CarAction {
    return { type: CarActionType.RemoveCar, payload: carId };
}

export function carReducer(
    currentState: CarState = new CarState(),
    action: CarAction):CarState
{
    const newState = {...currentState};

    switch(action.type) {
        case CarActionType.AddCar:
            newState.allCars.push(...newState.allCars, action.payload as Car);
            break;
        case CarActionType.RemoveCar:
            newState.allCars = newState.allCars.filter((item) => item.carNumber !== action.payload);
            break;
    }

    return newState;
}


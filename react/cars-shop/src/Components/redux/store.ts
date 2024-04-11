import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, createStore } from "redux";
import { carReducer } from "./carsReduser";

const reducers = combineReducers({
    cars: carReducer
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({serializableCheck:false})
});


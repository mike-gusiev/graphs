import React, {FunctionComponent, useReducer} from 'react';
import Form from './components/Form/Form';
import Graphs from './components/Graphs/Graphs';

type AppActions = {
    type: string,
    payload: number | { name: string, x: number[], y: number[] }[]
}

type AppState = {
    graphsPoints: { name: string, x: number[], y: number[] }[],
    x: number
}

const initialState = {
    graphsPoints: [],
    x: 10
}

function reducer(state: AppState, action: AppActions) {
    return {
        ...state,
        [action.type]: action.payload
    }
}

const App: FunctionComponent = () => {
    const [{x, graphsPoints}, dispatch] = useReducer(reducer, initialState)

    const handleChangePoints = (graphs: { name: string, x: number[], y: number[] }[]) => {
        dispatch({type: "graphsPoints", payload: graphs})
    }

    const handleChangeX = (x: number) => {
        dispatch({type: 'x', payload: x})
    }

    return (
        <>
            <Form onHandleChangePoints={handleChangePoints} onHandleChangeX={handleChangeX} />
            <Graphs graphsPoints={graphsPoints} x={x} />
        </>
    );
};

export default App;

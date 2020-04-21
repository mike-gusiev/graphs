import React, {FunctionComponent, useReducer} from 'react';
import styled from 'styled-components'
import apiCall from "../../utils/mockedApi";

interface OwnProps {
    onHandleChangePoints: Function;
    onHandleChangeX: Function
}

type Props = OwnProps;

type FormActions = {
    type: string;
    payload: number;
};
type FormState = {
    start: number,
    end: number,
    step: number
}

const initialState = {
    start: 0,
    end: 0,
    step: 0,
};

function reducer(state: FormState, action: FormActions) {
    return {
        ...state,
        [action.type]: action.payload,
    };
}

const Form: FunctionComponent<Props> = ({onHandleChangePoints, onHandleChangeX}) => {

    const [{start, end, step}, dispatch] = useReducer(reducer, initialState);

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        const {value, name} = e.target as HTMLInputElement;
        dispatch({type: name, payload: +value});
    };

    const handleGetData = () => {
        if (start && end && step) {
            const data = apiCall(start, end, step)
            const maxX = (Math.max(start, end) ** 3) + 1
            onHandleChangeX(maxX)
            onHandleChangePoints(data)
        } else {
            console.log('please enter some data');
        }
    };

    const enabledButton = ((!!start && !!end && !!step) && (start < end) && ((end - start) > step))

    return (
        <Container>
            <div>
                <Input type="number" onChange={(e) => handleInput(e)} name="start"
                       placeholder="start" />
                <Input type="number" onChange={(e) => handleInput(e)} name="end"
                       placeholder="end" />
                {start > end && <Helper>start must be smaller then end</Helper>}
                <Input type="number" onChange={(e) => handleInput(e)} name="step"
                       placeholder="step" />
                {step > (end - start) && <Helper> step must be smaller then end - start</Helper>}
            </div>
            <Button disabled={!enabledButton} onClick={handleGetData}>Draw canvas</Button>
        </Container>
    );
};

const Container = styled.div`
    margin: 40px auto;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    display: block;
    width: 200px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #747474;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    margin-bottom: 10px;
    outline: none;
`;

const Button = styled.button`
    width: 100px;
    border-radius: 5px;
    border: 1px solid gray;
    background: gray;
    color: white;
    outline: none;
    margin-left: 35px;
    min-height: fit-content;
    padding: 5px 5px 7px;
    cursor: pointer;
    &:not([disabled]) {
       border: 1px solid #edf4f6;
       background: #edf4f6;
       color: black;
       box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    &:hover:not([disabled]) {
       background: cadetblue;
       color: white;
       transition: 0.3s all;
    }
`;

const Helper = styled.p`
    background: brown;
    width: 222px;
    height: 35px;
    border: 1px solid;    
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    color: white;
    border-radius: 5px;
    font-size: 14px;
`

export default Form;

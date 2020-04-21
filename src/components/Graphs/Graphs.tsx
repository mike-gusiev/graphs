import React, {FunctionComponent, useReducer, useEffect} from 'react';
import styled from 'styled-components';
import drawLines from '../../utils/drawLines';
import drawAxes from "../../utils/drawAxes";

interface OwnProps {
    graphsPoints: {
        name: string,
        x: number[],
        y: number[]
    }[];
    x: number
}

type Props = OwnProps;

type GraphsState = {
    linear: boolean;
    cube: boolean;
    square: boolean;
};

type GraphsActions = {
    type: string;
    payload: boolean;
};

const initialState = {
    linear: true,
    cube: true,
    square: true,
};

function reducer(state: GraphsState, action: GraphsActions) {
    return {
        ...state,
        [action.type]: action.payload,
    };
}

const Graphs: FunctionComponent<Props> = ({graphsPoints, x}) => {
    const [{linear, cube, square}, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const {checked, name} = e.target as HTMLInputElement;
        dispatch({type: name, payload: checked});
    };

    useEffect(() => {
        const canvas = document.getElementById('graph') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        ctx && ctx.clearRect(0, 0, 600, 600);
        drawAxes(canvas, x);
        if (graphsPoints.length) {
            graphsPoints.forEach((graph) => {
                if (
                    (!linear && (graph.name === 'linear')) ||
                    (!square && (graph.name === 'squared')) ||
                    (!cube && (graph.name === 'cubed'))
                ) {
                    return;
                }
                if ((graph.name === 'linear') && canvas) {
                    drawLines(canvas, graph.x, graph.y, 'green', x);
                } else if ((graph.name === 'cubed') && canvas) {
                    drawLines(canvas, graph.x, graph.y, 'red', x);
                } else if ((graph.name === 'squared') && canvas) {
                    drawLines(canvas, graph.x, graph.y, 'orange', x);
                }
            });
        }


    }, [linear, square, cube, graphsPoints, x]);

    return (
        <div>
            <InputContainer>
                <InputWrapper>
                    <Input type="checkbox" name="linear" id="linear" checked={linear}
                           onChange={handleChange} />
                    <div>Linear</div>
                </InputWrapper>
                <InputWrapper>
                    <Input type="checkbox" name="square" id="square" checked={square}
                           onChange={handleChange} />
                    <div>Square</div>
                </InputWrapper>
                <InputWrapper>
                    <Input type="checkbox" name="cube" id="cube" checked={cube}
                           onChange={handleChange} />
                    <div>Cube</div>
                </InputWrapper>
            </InputContainer>
            <CanvasWrapper>
                <Canvas id="graph" width={600} height={600} />
            </CanvasWrapper>
        </div>
    );
};

const Input = styled.input`
    display: block;
    margin-bottom: 10px;
    margin-right: 9px;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-around;;
    max-width: 400px;
    margin: 0 auto;
`;

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`;

const CanvasWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: fit-content;
    justify-content: center;
    border: 1px solid #747474;
    margin: 0 auto;
    box-shadow: 5px 5px 10px rgb(0,0,0,0.5);
`;

const Canvas = styled.canvas`
  position: relative;
  background: lightyellow;
`

export default Graphs;

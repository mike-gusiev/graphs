import React from 'react';
import {render} from '@testing-library/react';
import Graphs from './Graphs';
import {mockData} from "../../utils/mockedData";

describe('testing Form component', () => {
    it('renders Linear label', () => {
        const {getByText} = render(<Graphs graphsPoints={mockData} x={10} />);
        const Linear = getByText(/Linear/i);
        expect(Linear).toBeInTheDocument();
    });
    it('renders Square label', () => {
        const {getByText} = render(<Graphs graphsPoints={mockData} x={10}  />);
        const Square = getByText(/Square/i);
        expect(Square).toBeInTheDocument();
    });
    it('renders Cube label', () => {
        const {getByText} = render(<Graphs graphsPoints={mockData} x={10} />);
        const Cube = getByText(/Cube/i);
        expect(Cube).toBeInTheDocument();
    });

})


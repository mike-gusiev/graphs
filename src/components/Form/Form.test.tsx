import React from 'react';
import {render} from '@testing-library/react';
import Form from './Form';

describe('testing Form component', () => {
    it('renders draw button', () => {
        const {getByText} = render(
            <Form
                onHandleChangePoints={() => {
                }}
                onHandleChangeX={() => {
                }} />);
        const DrawBtn = getByText(/Draw canvas/i);
        expect(DrawBtn).toBeInTheDocument();
    });
})


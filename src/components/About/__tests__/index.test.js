import React from 'react';
// react testing library
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '...';

afterEach(cleanup);

describe('About componnent', () => {
    it('renders', () => {
        render(<About />);
    });
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
});

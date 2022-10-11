import { render, screen } from '@testing-library/react';
import ProductsList from './ProductsList';

import React, { useState as useStateMock } from 'react';

const itemsMock = [
    {
        id: '1',
        name: 'Pilsner',
        temperature: 5,
        minimumTemperature: 4,
        maximumTemperature: 6,
    },
    {
        id: '2',
        name: 'IPA',
        temperature: 7,
        minimumTemperature: 4,
        maximumTemperature: 6,
    },
];

describe('<ProductsList />', () => {
    beforeEach(() => {
        jest
            .spyOn(React, 'useState')
            .mockImplementationOnce(() => useStateMock(itemsMock));
    });

    it('renders the headers', () => {
        render(<ProductsList />);
        
        expect(screen.getByText('Product')).toBeInTheDocument();
        expect(screen.getByText('Temperature')).toBeInTheDocument();
        expect(screen.getByText('Status')).toBeInTheDocument();
    });

    it('renders table data', () => {
        render(<ProductsList />);
        const tableTxt = screen.getByText(/^Pilsner$/i);
        expect(tableTxt).toBeInTheDocument();
        const temperature = screen.getByText(/^5$/i);
        expect(temperature).toBeInTheDocument();
    });
});
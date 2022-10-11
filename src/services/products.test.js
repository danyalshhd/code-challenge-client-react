import ProductsService from './products'
import '@testing-library/jest-dom/extend-expect';
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter')
import { productTooHigh, productTooLow, productAllGood } from './fixtures/product'

describe('Products', () => {
    
    const mock = new MockAdapter(axios);
    
    afterEach(() => jest.clearAllMocks());

    it('should mock the expected response', async () => {
        mock.onGet(`${ProductsService.baseUrl}${productAllGood.id}`).reply(200, productAllGood);
        const result = await ProductsService.getTemperature(productAllGood.id);
        expect(result).toEqual({ 
            ...productAllGood,
            status: 'all good',
        });
    })

    it('should call return too high response', async () => {
        mock.onGet(`${ProductsService.baseUrl}${productTooHigh.id}`).reply(200, productTooHigh);
        const result = await ProductsService.getTemperature(productTooHigh.id);
        expect(result).toEqual({ 
            ...productTooHigh,
            status: 'too high',
        });
    })

    it('should call return too low response', async () => {
        mock.onGet(`${ProductsService.baseUrl}${productTooLow.id}`).reply(200, productTooLow);
        const result = await ProductsService.getTemperature(productTooLow.id);
        expect(result).toEqual({ 
            ...productTooLow,
            status: 'too low',
        });
    })
})

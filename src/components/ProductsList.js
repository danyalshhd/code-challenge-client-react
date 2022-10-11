import { useEffect, useState } from 'react';
import { ProductsTemperatureDefinitions } from '../definitions/productsTemperature.definitions';
import ProductService from '../services/products';

const ProductsList = () => {
    const [items, setItems] = useState({});

    useEffect(() => {
        const request = () =>
            ProductsTemperatureDefinitions.forEach((product) => {
                ProductService.getTemperature(product.id)
                    .then((response) =>
                        setItems((prevItems) => ({
                            ...prevItems,
                            [product.id]: {
                                ...product,
                                ...response,
                            },
                        }))
                    );
            });

        setInterval(request, 5000);

        request();
    }, []);

    return (
        <div className="App">
            <h2>Beers</h2>
            <table>
                <thead>
                    <tr>
                        <th align="left">Product</th>
                        <th align="left">Temperature</th>
                        <th align="left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(items).map((itemKey) => (
                        <tr name={items[itemKey].id} key={items[itemKey].id}>
                            <td width={150}>{items[itemKey].name}</td>
                            <td width={150}>{items[itemKey].temperature}</td>
                            <td width={150}>{items[itemKey].status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsList;

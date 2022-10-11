const axios = require('axios');
import { ProductsTemperatureDefinitions } from '../definitions/productsTemperature.definitions';

const baseUrl = 'http://localhost:8081/v1/temperature/'

const getTemperature = async (id) => {
    //console.log(`${baseUrl}${id}`);
  const response = await axios.get(`${baseUrl}${id}`)
  constructResponse(response.data);
  return response.data
}

const constructResponse = (product) => {
    const definition = ProductsTemperatureDefinitions.find(def => def.id === product.id);
    if (!definition) return;
    if (product.temperature < definition.minimumTemperature) {
        product.status = 'too low';
    } else if (product.temperature > definition.maximumTemperature) {
        product.status = 'too high';
    } else if (product.temperature <= definition.maximumTemperature
        && product.temperature >= definition.minimumTemperature
    ) {
        product.status = 'all good';
    }
}

export default { 
    getTemperature,
    baseUrl
}

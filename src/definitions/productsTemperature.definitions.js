const definition = {
    id: null,
    name: null,
    minimumTemperature: 0,
    maximumTemperature: 0,
    status: '',
}

export const ProductsTemperatureDefinitions = [
    {
        ...definition,
        id: '1',
        name: 'Pilsner',
        minimumTemperature: 4,
        maximumTemperature: 6,
      },
      {
        ...definition,
        id: '2',
        name: 'IPA',
        minimumTemperature: 5,
        maximumTemperature: 6,
      },
      {
        ...definition,
        id: '3',
        name: 'Lager',
        minimumTemperature: 4,
        maximumTemperature: 7,
      },
      {
        ...definition,
        id: '4',
        name: 'Stout',
        minimumTemperature: 6,
        maximumTemperature: 8,
      },
      {
        ...definition,
        id: '5',
        name: 'Wheat beer',
        minimumTemperature: 3,
        maximumTemperature: 5,
      },
      {
        ...definition,
        id: '6',
        name: 'Pale Ale',
        minimumTemperature: 4,
        maximumTemperature: 6,
      },
]
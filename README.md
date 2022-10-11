# Pragmateam code challenge server (ReactJS)

Please refer to the provided document for the code challenge requirements. 

## Available scripts

- `npm i` - Install dependencies
- `npm start` - Start the application (Port 8081)
- `npm run test` - Test the application

### Highlights
- Extract out the logic defined in template to be in service
- Make definition of each product and define it as TemperatureCustomDefinition
- Make a different component and its construct the responses in respective service there.
- Wrote unit tests to cover the services response and rendering the component

### Improvements to be made
- The text should be internationalized
- setInterval should be at server side and use sockets to emit event if there is any change for particular product.
- Move to typescript
- Handle error to display pop ups
- Add loaders while fetching record
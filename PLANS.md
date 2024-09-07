## Plans

### Initial Setup

- [x] Create Github repository
- [x] Create a new React application
- [x] Setup eslint
- [ ] Setup Jest
- [ ] Setup husky for pre-commit and pre-push hooks
- [ ] Setup github actions to run the tests, linting, etc
- [ ] Setup sonarcloud for code quality

### Development

- [ ] Check if the food truck data is available on a public API instead of csv
    - If available, use the public API since its going to provide the latest data
        - I found the public API endpoint [here](https://data.sfgov.org/resource/rqzj-sfat.json)
    - If not available, use the csv file
- [ ] Create a service layer to fetch the food truck data (regardless if its from a public API or csv)
- [ ] Create components and basic structure to use OpenMap API to display the food trucks on a map
- [ ] Create filters to filter the food trucks by name, type, etc
- [ ] Implement unit tests when its applicable
- [ ] Configure Github Actions to run the tests
- [ ] Deploy the application to a cloud provider


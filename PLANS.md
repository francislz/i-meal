## Plans

### Initial Setup

- [x] Create Github repository
- [x] Create a new React application
- [x] Setup eslint
- [x] Setup Jest
- [x] Setup husky for pre-commit and pre-push hooks
- [x] Setup github actions to run the tests, linting, etc
- [ ] Setup sonarcloud for code quality (NOTE: Will handle this later)

### Development

- [x] Check if the food truck data is available on a public API instead of csv
    - If available, use the public API since its going to provide the latest data
        - I found the public API endpoint [here](https://data.sfgov.org/resource/rqzj-sfat.json)
- [x] Create a service layer to fetch the food truck data (regardless if its from a public API or csv)
- [x] Create components and basic structure to use OpenMap API to display the food trucks on a map
- [x] Create filters to filter the food trucks by name, type, etc
- [x] Improve input search filter to block only do the requests when user finished typing
- [ ] Display more informations about the food truck when user clicks on it on the map
- [ ] Implement unit tests when its applicable
- [ ] Deploy the application to a cloud provider (NOTE: Will handle this later)


# Engineering Challenge

We strive to be a practical and pragmatic team. That extends to the way that we work with you to understand if this team is a great fit for you. We want you to come away with a great understanding of the kind of things that we actually do day to day and what it is like to work in our teams.

We don't believe that whiteboard coding with someone watching over your shoulder accurately reflects our day to day. Instead we'd like to be able to discuss code that you have already written when we meet.

This can be a project of your own or a substantial pull request on an open source project, but we recognize that most people have done private or proprietary work and this engineering challenge is for you.

We realize that taking on this assignment represents a time commitment for you, and we do not take that lightly. Throughout the recruitment process we will be respectful of your time and commit to working quickly and efficiently. This will be the only technical assessment you'll be asked to do. The brief following conversations will be based on this assessment and your prior experiences.

## Challenge Guidelines

* This is meant to be an assignment that you spend approximately two to three hours of focused coding. Do not feel that you need to spend extra time to make a good impression. Smaller amounts of high quality code will let us have a much better conversation than large amounts of low quality code.

* Think of this like an open source project. Create a repo on Github, use git for source control, and use a Readme file to document what you built for the newcomer to your project.

* We build systems engineered to run in production. Given this, please organize, design, test, deploy, and document your solution as if you were going to put it into production. We completely understand this might mean you can't do much in the time budget. Prioritize production-readiness over features.

* Think out loud in your documentation. Write our tradeoffs, the thoughts behind your choices, or things you would do or do differently if you were able to spend more time on the project or do it a second time.

* We have a variety of languages and frameworks that we use, but we don't expect you to know them ahead of time. For this assignment you can make whatever choices that let you express the best solution to the problem given your knowledge and favorite tools without any restriction. Please make sure to document how to get started with your solution in terms of setup so that we'd be able to run it.

* Once this is functioning and documented to your liking, either send us a link to your public repo or compress the project directory, give the file a pithy name which includes your own name, and send the file to us.

## The Challenge

As the song says, "you've got to play the hand you're dealt", and in this case your hand is to implement something to help us manage our food truck habit.

Our team loves to eat. They are also a team that loves variety, so they also like to discover new places to eat.

In fact, we have a particular affection for food trucks. One of the great things about Food Trucks in San Francisco is that the city releases a list of them as open data.

Your assignment is to make it possible for our teams to do something interesting with this food trucks data.

This is a freeform assignment. You can write a web API that returns a set of food trucks. You can write a web frontend that visualizes the nearby food trucks for a given place. You can create a CLI that lets us get the names of all the taco trucks in the city. You can create system that spits out a container with a placeholder webpage featuring the name of each food truck to help their marketing efforts. You're not limited by these ideas at all, but hopefully those are enough help spark your own creativity.
San Francisco's food truck open dataset is [located here](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/data) and there is an endpoint with a [CSV dump of the latest data here](https://data.sfgov.org/api/views/rqzj-sfat/rows.csv). We've also included a copy of the data in this repo as well.

## Final considerations

### Features

1. The system should be able to fetch the data from the API and display it on a open street map.
2. The system should be able to filter the data by food truck name, food items, and location.
3. The system should be able to display the food truck details when clicked on the map.

### Technologies

1. The system should be built using ReactJS.
2. OpenStreetMap should be used to display the food trucks on the map.

### Patterns

1. Custom hooks should be used to fetch the data from the API, handle state management and filter the data.
2. The system should be built using functional components and hooks.

### CI/CD

1. Github Actions is used for unit tests, linting and sonarqube analysis.
2. Sonar Cloud is used for code quality analysis.

### Running the project

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Access the application on `http://localhost:3000`.


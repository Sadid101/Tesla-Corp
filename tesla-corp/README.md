# Notes from Tausif Sadid

Here I have demonstrated all the necessary requirements from the provided documentat.
First we have a login page, here I have properly added authentication with the dummyJson server and only when an access token is generated I redirect the user to the dashboard page.
I have not added Google authentication since that was not asked for in the document.
I am also saving the token iin my login page before redirecting to the dashboard page. Ideally I would also redirect a user whenever he comes to the home page directly to the dashboard page, however I chose not to so that it allows the user to revisit the login page now.
If a user directly types in the dashboard url, the user will be redirected back to the login page if his browser does not already hold the token, allowing a level of security
I've also added toast message to indicate the user has logged in or is having difficulties logging in

Now for the dashboard page, I am fetching all the data from live jobs, to number of applications, the applications that have been placed since last week, as well as an interactive list of all applicants which can be expanded and collapsed.
None of these data in this page besides the date is static. These are all being read from src/data/dummy.json file


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

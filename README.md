
# Lab #4

## Thank you to Sheyna, Shane, Jordan, Alfredo, Jeffrey, David S. and David T. for their help and collaboration in getting this assignment done. A community is a powerful gift.

## Feature 1. Filter by Numbers of Horns

### Why are we implementing this feature?

As a user, I want to be able to view the beasts by the number of horns

### What are we going to implement?

Given that a user is presented with filtering options
When the user clicks on one option
Then the images should be filtered accordingly

### How are we implementing it?

Using the Form component of react-bootstrap, build a drop down menu so that the user can choose to filter by number of horns.
When the user chooses one of the options, the correct images should be displayed.

Number and name of feature: Feature #1 Filter by Numbers of Horns

Estimate of time needed to complete: 2 hours - it's like driving in L.A. 

Start time: 3:00pm

Finish time: 6:15

Actual time needed to complete: 3.25 hours.

# Lab #3

## Thank you to Sheyna, Shane, Jordan, Alfredo, and Jeffrey, Rhea and Jackson for their help and collaboration in getting this assignment done. A community is a powerful gift.

## Feature #1: Display a Modal

### Why are we implementing this feature?

As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

### What are we going to implement?

Given that a user wants to view the details of the image
When the user clicks on an individual image
Then the image should render larger on the screen with the description displayed

### How are we implementing it?

Import the data.json file into your App component and send that data into the Main component
Map over the JSON data in your Main component to render each beast
Send a function into your Main component that allows the user to update state in the App
Create a SelectedBeast component and include it in your App
Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap

Number and name of feature: #1 Display a Model

Estimate of time needed to complete: 2 hours

Start time: I don't know

Finish time: I don't know

Actual time needed to complete: I feel terrible so I'm counting just finishing as a win.

## Stretch Goal: Fuzzy search - TODO
Why are we implementing this feature?
As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.
What are we going to implement?
Given that a user wants to view specific images
When the user enters a character into the search field
Then only the images matching the current set of characters should be displayed on the screen
How are we implementing it?
Create an input element to allow users to search for an image. It is up to you to decide if the user should be able to search by title, keyword, or both.
Write a regular expression pattern to create a fuzzy search so that the results are narrowed down and displayed every time the user enters or removes a character from the input.
# Lab 2

## Thank you to Sheyna, Shane, Jordan, Alfredo, and Jeffrey for their help and collaboration in getting this assignment done. Without them, I might still be working on it.

## Feature #1: Display images

### Why are we implementing this feature?
As a user, I want to view the images on the page so that I can browse the photo collection.
### What are we going to implement?
Given that a user opens the application in the browser
When the user navigates to the home page
Then the photo gallery should display all of the images in the gallery.
### How are we implementing it?
The Main component should pass props for the title, image and description to each HornedBeast component. You will find this information in the provided JSON file.

Number and name of feature: #1 Display Feature

Estimate of time needed to complete: 45 minutes

Start time: 1:55pm

Finish time: 2:48

Actual time needed to complete:  53 minutes


## Feature #2: Allow users to vote for their favorite beast
### Why are we implementing this feature?
As a user, I want to be able to interact with the site and pick my favorite beast.
### What are we going to implement?
Given that a user opens the application in the browser
When a user clicks on an image
Then the number of "favorites" displayed on that image will increase by one.
### How are we implementing it?
Create state inside of the HornedBeast component that keeps track of the number of times an image was clicked.

Put a heart in each horned beast with the number of times it was “favorited” next to it.

Number and name of feature: #2 Vote for your favorite beast

Estimate of time needed to complete: 1.5 hours

Start time: 3:20

Finish time: 3:35

Actual time needed to complete: 15 minutes

I made extensive use of the class lecture and had assistance from Jordan Yamada, Alfredo Orquiz, and Jeffrey Smith.


## Feature 3: Bootstrap
### Why are we implementing this feature?
As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.
### What are we going to implement?
Given that a user opens the application in the browser
When the images are displayed on the screen
Then each image should be rendered in a visually pleasing way: in columns, as screen width allows.
### How are we implementing it?
Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.
Stretch Goal: Add Interaction
### Why are we implementing this feature?
As a user, I want to be able to interact with each item on the page.
### What are we going to implement?
    Given that a user opens the application in the browser
    When a user clicks on an item other than the horned beasts, such as the title of the page or the footer,
    Then the information and styles should change.
### How are we implementing it?
When the user clicks on elements such as the header, footer or title of page, make something change using state.
You can update the words, change the styles or add something new. Be creative.

Number and name of feature: #3 BootStrap 

Estimate of time needed to complete: 2 hours

Start time: 3:40

Finish time: 6:05

Actual time needed to complete: 2h, 5min

This feature took much longer than it should have due to issues with my bootstrap installs. I think I've spent more time on troubleshooting installs today that I have actually writing code.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Acknowledgements:

I referenced information found in Carlie Anglemire's blog to render the images in this app: https://medium.com/@carlie.anglemire/requiring-images-in-react-9bcf6a8c2cb

Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
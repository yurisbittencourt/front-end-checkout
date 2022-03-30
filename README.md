# Front End Checkout

## Introduction

This is a simple app that simulates the front end checkout process of an online store. It uses [React](https://reactjs.org/) and [Styled Comnponents](https://styled-components.com/) to present to the user a responsive and clean checkout experience.

## Functionality

The app fetches data from a local file and allows the user to filter it based on the item description through a search bar.
The user can add an item to the cart by clicking on the 'Add to Cart' button on the items card, which will redirect them to the payment options page.
![store](https://user-images.githubusercontent.com/55405613/160901598-4283ff96-21b2-4df1-811a-ac9f5a81e918.JPG)

The payment options page displays information on the selected product and allows the user to choose between 3 payment methods, it also displays a component at the top indicating the step the user is currently in as well as a button to return to the previous page.
![payment](https://user-images.githubusercontent.com/55405613/160901607-130c2e3c-d974-4917-ba2b-93ea5e02eda4.JPG)

After authorizing the payment and clicking on 'Continue' the user is taken to the final page with receipt information and a 'Place order' button.
![receipt](https://user-images.githubusercontent.com/55405613/160901657-b42aafee-fd71-4a0d-864a-df4535327bd2.JPG)

## Try it

[frontend-checkout-process](https://frontend-checkout-process.web.app/)

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Pet Challenge

The goal of this project is to develop a web app to find your perfect pet.

This project is being managed [here](https://trello.com/b/mT7EpOG9/pet-challenge).

**Note to myself! Use [this](https://github.com/react-boilerplate/react-boilerplate-cra-template) for the next project.**

## Features

- Retreive pet profiles.
- Show a full profile.
- Mark "like" on profiles.
- 2 screens, minimum 3 profiles with: photo, name, description.
- Cool transitions! Fade in on load, carousels, etc.

### Scaling the app

- Instaling SCSS + JS preprocessors.
- Split vars.scss into multiples files (colors, images, etc).


## Stack

- ReactJS
- Firebase Realtime Database
- Firebase functions using NodeJS

### Extra Libraries
- ESLint with Aribnb ruleset.
- Prettier.
- StyleLint.

* I won't install EditorConfig because I'm the only contributor.

#### Configuration

- ESLint disabled ['react/react-in-jsx-scope'](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md) as we define global React var in `index.jsx` and ['jsx-filename-extension'](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md).
- [Why I am using `.js` instead of `.jsx`](https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904). [More discussion](https://github.com/airbnb/javascript/pull/985#issuecomment-239145468).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

## Credits

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Prettier & ESLint config from [CRA+React Boilerplate](https://github.com/react-boilerplate/react-boilerplate-cra-template).
- Images obtained from [Unsplash](https://unsplash.com): [Alvan Nee](https://unsplash.com/@alvannee?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText), [Erda Estremera](https://unsplash.com/@erdaest?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText).
- Vectors from [FreeVector](https://freevector.com).
- Background from [Tomislava Babić](https://behance.net/antitomi)

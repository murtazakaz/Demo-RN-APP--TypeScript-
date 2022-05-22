# Demo Application

### This application is built using React Native (TypeScript) for both android/iOS

## Features

- Contains two tab screens
- First Home Screen, which shows 'Hello' message with livestream and members count.
- Second Notif Screen, which shows 'World' message with courses and members count.
- Deep linking implemented to open any screen passing data.
- Unit testing and snapshot testing included.

## Installation

- Clone repository

```sh
> gh repo clone murtazakaz/Demo-RN-APP--TypeScript-
```

- Install dependencies by running command

```sh
> npm install
or
> yarn install
```

- Install dependency of ios

```sh
cd ios
pod install
```

- To run this project

```sh
> yarn start
Then, run this command
> yarn android or ios
```

### Deep linking

Deep linking is configured for both android and iOS.

To add new uri scheme, run this;

```sh
> npx uri-scheme add demoapp --ios /android
```

To test, run this following command in root terminal

```sh
> npx uri-scheme open demoapp://<SCREEN>/<COUNT>/<MEMBER COUNT> --ios/android
```

Example;

iOS:

```sh
npx uri-scheme open demoapp://HOME/1/100 --ios
npx uri-scheme open demoapp://NOTIF/1/100 --ios
```

Android:

```sh
npx uri-scheme open demoapp://HOME/1/100 --android
npx uri-scheme open demoapp://NOTIF/1/100 --android
```

### Test

Unit test and Snapshot testing included, to run test cases

```sh
yarn test
```
